export type RankKey = "beginner" | "thankful" | "bronze" | "silver" | "gold" | "platinum" | "diamond";

export interface Rank {
  key: RankKey;
  threshold: number;
  badge: string;
  title: string;
  benefit: string;
  hasPresent: boolean;
}

export const RANKS: Rank[] = [
  { key: "thankful", threshold: 39, badge: "サンキュー", title: "パンフレンド", benefit: "限定開封レポート閲覧", hasPresent: false },
  { key: "bronze", threshold: 99, badge: "ブロンズ", title: "パンラバー", benefit: "お気に入り店舗の新着通知", hasPresent: false },
  { key: "silver", threshold: 390, badge: "シルバー", title: "パンマスター", benefit: "ランキングに名前掲載", hasPresent: false },
  { key: "gold", threshold: 990, badge: "ゴールド", title: "パンアルチザン", benefit: "職人手作り帆布トートバッグ", hasPresent: true },
  { key: "platinum", threshold: 3900, badge: "プラチナ", title: "パンアンバサダー", benefit: "限定イベント招待", hasPresent: false },
  { key: "diamond", threshold: 9900, badge: "ダイヤモンド", title: "パンレジェンド", benefit: "限定パン窯セット（陶器プレート+マグ+バターナイフ）", hasPresent: true },
];

export function getCurrentRank(points: number): Rank | null {
  let current: Rank | null = null;
  for (const rank of RANKS) {
    if (points >= rank.threshold) current = rank;
  }
  return current;
}

export function getNextRank(points: number): Rank | null {
  return RANKS.find((r) => points < r.threshold) ?? null;
}

export function getRankDisplayName(points: number): string {
  const rank = getCurrentRank(points);
  return rank ? rank.title : "パンビギナー";
}

export function getRankBadgeName(points: number): string {
  const rank = getCurrentRank(points);
  return rank ? rank.badge : "ビギナー";
}
