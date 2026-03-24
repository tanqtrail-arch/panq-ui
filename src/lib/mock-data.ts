export type BagCategory = "hard" | "sweet" | "meal" | "simple" | "mix";

export const CATEGORY_LABELS: Record<BagCategory, string> = {
  hard: "ハード系",
  sweet: "甘い系",
  meal: "お食事系",
  simple: "シンプル系",
  mix: "ミックス",
};

export interface BagItem {
  id: string;
  title: string;
  description: string;
  price: 390 | 990;
  tier: "standard" | "premium";
  category: BagCategory;
  imageUrl: string;
  storeName: string;
  storeAddress: string;
  pickupTime: string;
  contents: string[];
  rating: number;
  reviewCount: number;
}

export const bags: BagItem[] = [
  {
    id: "1",
    title: "おまかせパン福袋",
    description: "入っているパンはどれもこだわりの一品ばかり。何が入っているかはお楽しみ！",
    price: 390,
    tier: "standard",
    category: "mix",
    imageUrl:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
    storeName: "ベーカリー・パンキュー",
    storeAddress: "渋谷区神南1-2-3",
    pickupTime: "14:00〜18:00",
    contents: ["食パン", "クロワッサン", "ベーグル", "季節のパン"],
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: "2",
    title: "プレミアムパン福袋",
    description: "特選こだわりのパンをたっぷりと詰め合わせ。厳選素材のパンが揃った贅沢な一箱です。",
    price: 990,
    tier: "premium",
    category: "mix",
    imageUrl:
      "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600&h=400&fit=crop",
    storeName: "ベーカリー・パンキュー",
    storeAddress: "渋谷区神南1-2-3",
    pickupTime: "14:00〜18:00",
    contents: ["デニッシュ", "ブリオッシュ", "カンパーニュ", "クロワッサン", "季節の限定パン"],
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: "3",
    title: "朝の食パンセット",
    description: "毎朝の食卓に最高の一枚を。国産小麦100%の食パンが入っています。",
    price: 390,
    tier: "standard",
    category: "simple",
    imageUrl:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop",
    storeName: "むぎのやま",
    storeAddress: "目黒区自由が丘2-5-8",
    pickupTime: "10:00〜14:00",
    contents: ["角食パン", "山食パン", "レーズン食パン"],
    rating: 4.7,
    reviewCount: 56,
  },
  {
    id: "4",
    title: "ハード系パンの詰め合わせ",
    description: "本格的なフランスパンやドイツパンを中心に。パン好きのためのセレクション。",
    price: 990,
    tier: "premium",
    category: "hard",
    imageUrl:
      "https://images.unsplash.com/photo-1568471173242-461f0a730452?w=600&h=400&fit=crop",
    storeName: "Boulangerie Soleil",
    storeAddress: "世田谷区三軒茶屋1-8-12",
    pickupTime: "15:00〜19:00",
    contents: ["バゲット", "カンパーニュ", "ライ麦パン", "フーガス", "プレッツェル"],
    rating: 4.6,
    reviewCount: 42,
  },
  {
    id: "5",
    title: "おやつパン福袋",
    description: "甘くて幸せなパンたち。お子さまのおやつにもぴったりです。",
    price: 390,
    tier: "standard",
    category: "sweet",
    imageUrl:
      "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=400&fit=crop",
    storeName: "こむぎ堂",
    storeAddress: "新宿区高田馬場3-1-6",
    pickupTime: "11:00〜16:00",
    contents: ["メロンパン", "クリームパン", "あんパン", "チョコデニッシュ"],
    rating: 4.5,
    reviewCount: 78,
  },
  {
    id: "6",
    title: "お食事パンセット",
    description: "ランチにぴったりのお食事パン。おかずなしでも大満足のラインナップ。",
    price: 390,
    tier: "standard",
    category: "meal",
    imageUrl:
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&h=400&fit=crop",
    storeName: "パン工房 まるみ",
    storeAddress: "世田谷区松陰神社前1-5-3",
    pickupTime: "12:00〜17:00",
    contents: ["カレーパン", "たまごサンド", "焼きそばパン", "コロッケパン"],
    rating: 4.4,
    reviewCount: 63,
  },
];

export function getBagById(id: string): BagItem | undefined {
  return bags.find((b) => b.id === id);
}
