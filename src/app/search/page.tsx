"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import AreaChips from "@/components/store/AreaChips";
import StoreCard from "@/components/store/StoreCard";
import RequestBanner from "@/components/store/RequestBanner";
import { stores, type AreaId } from "@/lib/store-data";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState<AreaId>("all");

  const areaMap: Record<string, string> = {
    jiyugaoka: "自由が丘",
    musashikosugi: "武蔵小杉",
    gakugeidaigaku: "学芸大学",
    sangenjaya: "三軒茶屋",
    shoinjinjamae: "松陰神社前",
    yoyogiuehara: "代々木上原",
    sengawa: "仙川",
  };

  const filtered = useMemo(() => {
    return stores.filter((s) => {
      if (selectedArea !== "all" && s.area !== areaMap[selectedArea]) return false;
      if (query) {
        const q = query.toLowerCase();
        return (
          s.name.toLowerCase().includes(q) ||
          s.area.includes(q) ||
          s.address.includes(q)
        );
      }
      return true;
    });
  }, [query, selectedArea]);

  return (
    <div className="min-h-dvh bg-panq-surface pb-[calc(var(--spacing-panq-8)+4rem)]">
      {/* ====== Header ====== */}
      <header className="sticky top-0 z-40 glass-panel px-[var(--spacing-panq-4)] py-3 flex items-center justify-between">
        <h1 className="font-serif text-[1.125rem] font-bold text-panq-on-surface">
          パン屋を探す
        </h1>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-panq-surface-container-high cursor-pointer">
          <SlidersHorizontal size={18} className="text-panq-on-surface-variant" />
        </button>
      </header>

      {/* ====== Search Bar ====== */}
      <section className="px-[var(--spacing-panq-4)] mt-[var(--spacing-panq-3)]">
        <div
          className="
            flex items-center gap-2
            h-12 rounded-full
            bg-panq-surface-container-low
            px-4
          "
        >
          <Search size={18} className="text-panq-on-surface-variant shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="エリア・店名で検索"
            className="
              flex-1 bg-transparent text-[0.875rem]
              text-panq-on-surface placeholder:text-panq-on-surface-variant/60
              outline-none
            "
          />
        </div>
      </section>

      {/* ====== Area Chips ====== */}
      <section className="px-[var(--spacing-panq-4)] mt-[var(--spacing-panq-4)]">
        <AreaChips selected={selectedArea} onSelect={setSelectedArea} />
      </section>

      {/* ====== Results Count ====== */}
      <section className="px-[var(--spacing-panq-4)] mt-[var(--spacing-panq-5)]">
        <p className="text-[0.75rem] text-panq-on-surface-variant">
          {filtered.length}件のパン屋が見つかりました
        </p>
      </section>

      {/* ====== Store Cards ====== */}
      <section className="px-[var(--spacing-panq-4)] mt-[var(--spacing-panq-3)] flex flex-col gap-[var(--spacing-panq-2)]">
        {filtered.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </section>

      {/* ====== Request Banner ====== */}
      <section className="px-[var(--spacing-panq-4)] mt-[var(--spacing-panq-6)]">
        <RequestBanner />
      </section>

      <BottomNav />
    </div>
  );
}
