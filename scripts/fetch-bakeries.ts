import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
if (!API_KEY) {
  console.error("GOOGLE_PLACES_API_KEY not found in .env.local");
  process.exit(1);
}

const STATIONS = [
  { name: "自由が丘", lat: 35.6076, lng: 139.6686 },
  { name: "武蔵小杉", lat: 35.5764, lng: 139.6605 },
  { name: "学芸大学", lat: 35.6283, lng: 139.6851 },
  { name: "三軒茶屋", lat: 35.6437, lng: 139.6703 },
  { name: "松陰神社前", lat: 35.6424, lng: 139.6571 },
  { name: "代々木上原", lat: 35.6684, lng: 139.6782 },
  { name: "仙川", lat: 35.6626, lng: 139.5771 },
];

const QUERIES = ["パン屋", "ベーカリー"];
const RADIUS = 800;

const CHAIN_KEYWORDS = [
  "ヤマザキ",
  "山崎",
  "リトルマーメイド",
  "DONQ",
  "ドンク",
  "VIE DE FRANCE",
  "ヴィドフランス",
  "PAUL",
  "神戸屋",
  "セブンイレブン",
  "セブン-イレブン",
  "ファミリーマート",
  "ローソン",
  "サンジェルマン",
  "ポンパドウル",
  "アンデルセン",
];

interface Place {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  rating: number | null;
  userRatingsTotal: number | null;
  station: string;
}

function isChain(name: string): boolean {
  const upper = name.toUpperCase();
  return CHAIN_KEYWORDS.some((kw) => upper.includes(kw.toUpperCase()));
}

function haversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371000;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Places API (New) — Text Search
async function searchPlacesNew(
  query: string,
  lat: number,
  lng: number
): Promise<any[]> {
  const url = "https://places.googleapis.com/v1/places:searchText";

  const body = {
    textQuery: query,
    locationBias: {
      circle: {
        center: { latitude: lat, longitude: lng },
        radius: RADIUS,
      },
    },
    languageCode: "ja",
    maxResultCount: 20,
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": API_KEY!,
      "X-Goog-FieldMask":
        "places.id,places.displayName,places.formattedAddress,places.location,places.rating,places.userRatingCount",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`API error ${res.status}: ${errText}`);
  }

  const data = await res.json();
  return data.places || [];
}

async function main() {
  const allPlaces = new Map<string, Place>();
  const stationCounts: Record<string, number> = {};

  for (const station of STATIONS) {
    const stationPlaceIds = new Set<string>();

    for (const query of QUERIES) {
      console.log(`Searching "${query}" near ${station.name}...`);
      const results = await searchPlacesNew(query, station.lat, station.lng);

      for (const r of results) {
        const placeId: string = r.id;
        const name: string = r.displayName?.text || "";

        // Skip chains
        if (isChain(name)) continue;

        // Skip if outside radius
        const placeLat = r.location?.latitude;
        const placeLng = r.location?.longitude;
        if (placeLat == null || placeLng == null) continue;

        const dist = haversineDistance(
          station.lat,
          station.lng,
          placeLat,
          placeLng
        );
        if (dist > RADIUS) continue;

        if (!allPlaces.has(placeId)) {
          allPlaces.set(placeId, {
            id: placeId,
            name,
            address: r.formattedAddress || "",
            lat: placeLat,
            lng: placeLng,
            rating: r.rating ?? null,
            userRatingsTotal: r.userRatingCount ?? null,
            station: station.name,
          });
        }

        stationPlaceIds.add(placeId);
      }

      // Rate limit
      await new Promise((resolve) => setTimeout(resolve, 300));
    }

    stationCounts[station.name] = stationPlaceIds.size;
  }

  // Sort by station order then name
  const bakeries = Array.from(allPlaces.values()).sort((a, b) => {
    const stationOrder =
      STATIONS.findIndex((s) => s.name === a.station) -
      STATIONS.findIndex((s) => s.name === b.station);
    if (stationOrder !== 0) return stationOrder;
    return a.name.localeCompare(b.name, "ja");
  });

  // Save
  const outPath = path.resolve(__dirname, "../data/bakeries.json");
  fs.writeFileSync(outPath, JSON.stringify(bakeries, null, 2), "utf-8");

  // Summary
  console.log("\n=== Results ===");
  for (const station of STATIONS) {
    console.log(`${station.name}: ${stationCounts[station.name] || 0} 店舗`);
  }
  console.log(`---`);
  console.log(`合計: ${bakeries.length} 店舗（重複除外済み）`);
  console.log(`\nSaved to ${outPath}`);
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
