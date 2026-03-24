import {
  Bell,
  ChevronRight,
  Croissant,
  Sandwich,
  Cookie,
  Wheat,
  Slice,
  Shuffle,
  User,
} from "lucide-react";
import Link from "next/link";
import FukubukuroCard from "@/components/FukubukuroCard";
import SearchBar from "@/components/SearchBar";
import BottomNav from "@/components/BottomNav";
import { bags } from "@/lib/mock-data";

const mockBags = bags.slice(0, 2);

const categories = [
  { icon: Wheat, label: "ハード系", id: "hard" },
  { icon: Cookie, label: "甘い系", id: "sweet" },
  { icon: Sandwich, label: "お食事系", id: "meal" },
  { icon: Slice, label: "シンプル系", id: "simple" },
  { icon: Shuffle, label: "ミックス", id: "mix" },
];

const artisanItems = [
  {
    name: "クラシック・ローフ",
    price: "¥450",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=200&fit=crop",
  },
  {
    name: "塩プレッツェル",
    price: "¥280",
    image:
      "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=300&h=200&fit=crop",
  },
  {
    name: "バゲット",
    price: "¥350",
    image:
      "https://images.unsplash.com/photo-1568471173242-461f0a730452?w=300&h=200&fit=crop",
  },
  {
    name: "クロワッサン",
    price: "¥320",
    image:
      "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=300&h=200&fit=crop",
  },
  {
    name: "ベーグル",
    price: "¥280",
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=300&h=200&fit=crop",
  },
];

/* ====== Page Component ====== */

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-panq-surface pb-[calc(var(--spacing-panq-8)+4rem)]">
      {/* ====== Header (sticky) ====== */}
      <header
        className="
          sticky top-0 z-40
          flex items-center justify-between
          px-[var(--spacing-panq-3)] py-3
          bg-panq-surface
        "
      >
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-panq-primary-container">
            <Croissant size={18} className="text-panq-on-primary-container" />
          </div>
          <span className="text-[1.0625rem] font-bold text-panq-on-surface tracking-tight">
            PanQ
          </span>
        </div>

        {/* Right: Bell + Avatar */}
        <div className="flex items-center gap-2">
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-panq-surface-container-low cursor-pointer">
            <Bell size={20} className="text-panq-on-surface-variant" />
            <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-panq-primary border-2 border-panq-surface" />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-panq-surface-container cursor-pointer">
            <User size={18} className="text-panq-on-surface-variant" />
          </button>
        </div>
      </header>

      {/* ====== Greeting ====== */}
      <section className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-3)]">
        <h1 className="text-[1.375rem] font-bold leading-tight text-panq-on-surface">
          ようこそ、パンキューへ
        </h1>
        <p className="mt-0.5 text-[0.875rem] text-panq-on-surface-variant">
          今日はどの福袋にしますか？
        </p>
      </section>

      {/* ====== Search ====== */}
      <section className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-3)]">
        <Link href="/search">
          <SearchBar />
        </Link>
      </section>

      {/* ====== Status Chips ====== */}
      <section className="flex gap-1.5 px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-3)] overflow-x-auto scrollbar-hide">
        <span className="inline-flex items-center shrink-0 rounded-full px-3 py-1 text-[0.6875rem] font-semibold bg-panq-primary-container text-panq-on-primary-container">
          受取待ち 1件
        </span>
        <span className="inline-flex items-center shrink-0 rounded-full px-3 py-1 text-[0.6875rem] font-semibold bg-panq-surface-container-high text-panq-on-surface-variant">
          注文確認
        </span>
      </section>

      {/* ====== Fukubukuro Cards ====== */}
      <section className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-5)] flex flex-col gap-[var(--spacing-panq-3)]">
        <h2 className="text-[1.125rem] font-bold text-panq-on-surface">
          おたのしみ福袋
        </h2>
        {mockBags.map((bag) => (
          <FukubukuroCard
            key={bag.id}
            id={bag.id}
            title={bag.title}
            description={bag.description}
            price={bag.price}
            tier={bag.tier}
            category={bag.category}
            imageUrl={bag.imageUrl}
            storeName={bag.storeName}
          />
        ))}
      </section>

      {/* ====== Categories (horizontal scroll) ====== */}
      <section className="mt-[var(--spacing-panq-5)]">
        <div className="flex gap-4 px-[var(--spacing-panq-3)] overflow-x-auto scrollbar-hide">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                href={`/search?category=${cat.id}`}
                className="flex flex-col items-center gap-2 shrink-0"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-panq-surface-container">
                  <Icon size={24} className="text-panq-primary" />
                </div>
                <span className="text-[0.75rem] font-medium text-panq-on-surface-variant whitespace-nowrap">
                  {cat.label}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ====== Artisan Selection ====== */}
      <section className="mt-[var(--spacing-panq-5)]">
        <div className="flex items-center justify-between px-[var(--spacing-panq-3)]">
          <h2 className="text-[1.25rem] font-semibold text-panq-on-surface">
            アルチザン・セレクション
          </h2>
          <Link href="/search" className="flex items-center gap-0.5 text-[0.75rem] font-semibold text-panq-primary">
            すべて見る
            <ChevronRight size={14} />
          </Link>
        </div>

        <div className="flex gap-[var(--spacing-panq-2)] px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-3)] overflow-x-auto scrollbar-hide">
          {artisanItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col shrink-0 w-[140px] rounded-[2rem] bg-panq-surface-container-lowest shadow-[var(--shadow-ambient)] overflow-hidden"
            >
              {/* Image — top portion */}
              <div className="h-[100px] w-[140px]">
                <img
                  src={item.image}
                  alt={item.name}
                  width={140}
                  height={100}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Text — bottom portion */}
              <div className="flex flex-col gap-0.5 px-3 py-2.5">
                <p className="text-[0.875rem] font-semibold text-panq-on-surface leading-snug truncate">
                  {item.name}
                </p>
                <p className="text-[0.75rem] font-bold text-panq-primary">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== Bottom Nav ====== */}
      <BottomNav />
    </div>
  );
}
