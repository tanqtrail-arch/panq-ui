export interface StoreReview {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Store {
  id: string;
  name: string;
  area: string;
  address: string;
  image: string;
  plans: ("390" | "990")[];
  isFavorite: boolean;
  rating: number;
  reviewCount: number;
  hours: string;
  closedDay: string;
  phone: string;
  isOpen: boolean;
  features: string[];
  description: string;
  reviews: StoreReview[];
}

export const areas = [
  { id: "all", label: "すべて" },
  { id: "jiyugaoka", label: "自由が丘" },
  { id: "musashikosugi", label: "武蔵小杉" },
  { id: "gakugeidaigaku", label: "学芸大学" },
  { id: "sangenjaya", label: "三軒茶屋" },
  { id: "shoinjinjamae", label: "松陰神社前" },
  { id: "yoyogiuehara", label: "代々木上原" },
  { id: "sengawa", label: "仙川" },
] as const;

export type AreaId = (typeof areas)[number]["id"];

export const stores: Store[] = [
  {
    id: "s1",
    name: "Boulangerie Neuf9",
    area: "自由が丘",
    address: "東京都世田谷区奥沢6-12-3",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=400&h=400&fit=crop",
    plans: ["390", "990"],
    isFavorite: true,
    rating: 4.4,
    reviewCount: 102,
    hours: "7:00 - 19:00",
    closedDay: "毎週月曜日",
    phone: "03-6421-1234",
    isOpen: true,
    features: [
      "フランス産小麦と国産素材のブレンド",
      "石窯で焼き上げる本格製法",
      "自由が丘で15年愛される老舗",
    ],
    description: "パリの名店で修業したオーナーシェフが手がける本格ブーランジェリー。自由が丘の街角で、毎朝丁寧に焼き上げるパンをお届けしています。",
    reviews: [
      { id: "r1", userName: "パン好きさん", rating: 5, comment: "毎週楽しみにしています！何が入っているかわからないワクワク感が最高です。", date: "2026-03-20" },
      { id: "r2", userName: "ゆきこ", rating: 4, comment: "クロワッサンが絶品でした。福袋で出会えてラッキー！", date: "2026-03-15" },
      { id: "r3", userName: "K.T.", rating: 5, comment: "プレミアム福袋のクオリティに驚きました。リピート確定です。", date: "2026-03-10" },
    ],
  },
  {
    id: "s2",
    name: "hélianthe 自由が丘",
    area: "自由が丘",
    address: "東京都世田谷区等々力6-2-3",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
    plans: ["990"],
    isFavorite: true,
    rating: 4.9,
    reviewCount: 264,
    hours: "8:00 - 18:00",
    closedDay: "毎週火曜日・水曜日",
    phone: "03-6432-5678",
    isOpen: true,
    features: [
      "北海道産小麦100%使用",
      "天然酵母で48時間じっくり発酵",
      "地域のお客様に愛されて10年",
    ],
    description: "天然酵母と国産素材にこだわった小さなパン屋。一つひとつ手作りで、素材の味わいが生きるパンを焼いています。",
    reviews: [
      { id: "r4", userName: "なつみ", rating: 5, comment: "ここのカンパーニュは世界一だと思います。福袋で毎回入ってて嬉しい。", date: "2026-03-22" },
      { id: "r5", userName: "bread_lover", rating: 5, comment: "プレミアム福袋、お値段以上の価値があります。特にデニッシュが最高！", date: "2026-03-18" },
    ],
  },
  {
    id: "s3",
    name: "Comme'N TOKYO 本店",
    area: "自由が丘",
    address: "東京都世田谷区奥沢7-18-5 1F",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop",
    plans: ["390", "990"],
    isFavorite: false,
    rating: 4.3,
    reviewCount: 826,
    hours: "9:00 - 19:00",
    closedDay: "不定休",
    phone: "03-6809-8765",
    isOpen: true,
    features: [
      "世界大会受賞シェフが監修",
      "厳選された有機素材",
      "季節限定のスペシャルパン",
    ],
    description: "世界大会で受賞歴のあるシェフが手がける、自由が丘を代表するベーカリー。",
    reviews: [
      { id: "r6", userName: "みき", rating: 4, comment: "さすがの実力。福袋でいろんな種類を試せるのが嬉しいです。", date: "2026-03-21" },
      { id: "r7", userName: "ひろし", rating: 5, comment: "ここの食パンは別格。朝食が楽しみになりました。", date: "2026-03-14" },
    ],
  },
  {
    id: "s4",
    name: "ラ・ブランジェ・ナイーフ",
    area: "武蔵小杉",
    address: "神奈川県川崎市中原区小杉町3-1-2",
    image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&h=400&fit=crop",
    plans: ["390"],
    isFavorite: false,
    rating: 4.6,
    reviewCount: 58,
    hours: "7:30 - 18:30",
    closedDay: "毎週日曜日",
    phone: "044-733-1234",
    isOpen: false,
    features: [
      "地元農家から届く新鮮素材",
      "早朝5時から仕込む手作りパン",
      "武蔵小杉で8年の人気店",
    ],
    description: "地元の素材を大切に、毎朝ひとつひとつ丁寧に焼き上げるパン屋です。",
    reviews: [
      { id: "r8", userName: "たかし", rating: 5, comment: "390円でこのクオリティは驚き。お食事パンが特に美味しいです。", date: "2026-03-19" },
    ],
  },
  {
    id: "s5",
    name: "パン工房 まるみ",
    area: "松陰神社前",
    address: "東京都世田谷区松陰1-5-3",
    image: "https://images.unsplash.com/photo-1568471173242-461f0a730452?w=400&h=400&fit=crop",
    plans: ["390", "990"],
    isFavorite: false,
    rating: 4.4,
    reviewCount: 63,
    hours: "8:00 - 17:00",
    closedDay: "毎週水曜日・木曜日",
    phone: "03-3421-9876",
    isOpen: true,
    features: [
      "国産小麦100%の安心素材",
      "昔ながらの製法を守る職人気質",
      "松陰神社前の隠れた名店",
    ],
    description: "昔ながらの製法にこだわり、素朴で飽きのこないパンを焼き続けています。",
    reviews: [
      { id: "r9", userName: "あやか", rating: 4, comment: "懐かしい味のパンが揃っていて、毎回ほっとします。", date: "2026-03-17" },
      { id: "r10", userName: "S.M.", rating: 5, comment: "食パンがふわふわで最高。子どもたちも大好きです！", date: "2026-03-12" },
    ],
  },
  {
    id: "s6",
    name: "Boulangerie Soleil",
    area: "三軒茶屋",
    address: "東京都世田谷区三軒茶屋1-8-12",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=400&fit=crop",
    plans: ["390", "990"],
    isFavorite: true,
    rating: 4.6,
    reviewCount: 42,
    hours: "7:00 - 20:00",
    closedDay: "年中無休",
    phone: "03-5432-1111",
    isOpen: true,
    features: [
      "フランス直輸入の小麦粉を使用",
      "毎日20種類以上を焼き上げ",
      "三軒茶屋の朝を支える存在",
    ],
    description: "太陽のように温かい笑顔でお出迎え。三軒茶屋で朝から夜まで楽しめるベーカリーです。",
    reviews: [
      { id: "r11", userName: "ゆうた", rating: 5, comment: "バゲットの香りが最高。ハード系好きにはたまらない福袋です。", date: "2026-03-23" },
      { id: "r12", userName: "まりこ", rating: 4, comment: "種類が豊富で毎回違う発見があります。", date: "2026-03-16" },
    ],
  },
  {
    id: "s7",
    name: "こむぎ堂",
    area: "学芸大学",
    address: "東京都目黒区鷹番2-4-10",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400&h=400&fit=crop",
    plans: ["390"],
    isFavorite: false,
    rating: 4.5,
    reviewCount: 78,
    hours: "8:00 - 17:00",
    closedDay: "毎週月曜日・火曜日",
    phone: "03-3710-2222",
    isOpen: true,
    features: [
      "無添加・無着色の安心パン",
      "お子さまにも安心の素材選び",
      "学芸大学駅から徒歩3分",
    ],
    description: "「子どもに安心して食べさせられるパン」をモットーに、無添加のパンを焼いています。",
    reviews: [
      { id: "r13", userName: "りさ", rating: 5, comment: "子どもが大好きなメロンパンが福袋に入っていて大喜びでした！", date: "2026-03-20" },
      { id: "r14", userName: "けんじ", rating: 4, comment: "優しい味わいのパンばかりで朝食にぴったり。", date: "2026-03-13" },
    ],
  },
  {
    id: "s8",
    name: "カタネベーカリー",
    area: "代々木上原",
    address: "東京都渋谷区上原1-7-13",
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=400&h=400&fit=crop",
    plans: ["390", "990"],
    isFavorite: false,
    rating: 4.7,
    reviewCount: 312,
    hours: "7:30 - 19:00",
    closedDay: "毎週月曜日",
    phone: "03-3466-3333",
    isOpen: true,
    features: [
      "自家製酵母の風味豊かなパン",
      "併設カフェで焼きたてを楽しめる",
      "代々木上原で20年以上の実績",
    ],
    description: "自家製酵母で丁寧に焼き上げる、代々木上原の名店。併設カフェでゆったりとした朝の時間をお過ごしください。",
    reviews: [
      { id: "r15", userName: "えみ", rating: 5, comment: "ここのパンに出会えて幸せです。プレミアム福袋は毎回感動します。", date: "2026-03-24" },
      { id: "r16", userName: "だいすけ", rating: 5, comment: "酵母の香りが素晴らしい。妻へのお土産にいつも喜ばれます。", date: "2026-03-11" },
    ],
  },
];

export function getStoreById(id: string): Store | undefined {
  return stores.find((s) => s.id === id);
}

export function getFavoriteStores(): Store[] {
  return stores.filter((s) => s.isFavorite);
}
