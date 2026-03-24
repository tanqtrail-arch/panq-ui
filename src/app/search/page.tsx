"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeft, SlidersHorizontal, MapPin, Star, Map, Clock } from "lucide-react";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import FilterChip from "@/components/FilterChip";
import PriceBadge from "@/components/PriceBadge";
import BottomNav from "@/components/BottomNav";
import { bags, CATEGORY_LABELS, type BagCategory } from "@/lib/mock-data";

const pickupDays = [
  { id: "today", label: "今日" },
  { id: "tomorrow", label: "明日" },
];

const areas = [
  { id: "nearby", label: "現在地から近い順" },
  { id: "jiyugaoka", label: "自由が丘" },
  { id: "musashikosugi", label: "武蔵小杉" },
  { id: "gakugeidaigaku", label: "学芸大学" },
  { id: "sangenjaya", label: "三軒茶屋" },
  { id: "shoinjinjamae", label: "松陰神社前" },
  { id: "yoyogiuehara", label: "代々木上原" },
  { id: "sengawa", label: "仙川" },
];

const prices = [
  { id: "390", label: "¥390" },
  { id: "990", label: "¥990" },
];

const categoryFilters: { id: BagCategory; label: string }[] = [
  { id: "hard", label: "ハード系" },
  { id: "sweet", label: "甘い系" },
  { id: "meal", label: "お食事系" },
  { id: "simple", label: "シンプル系" },
  { id: "mix", label: "ミックス" },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as BagCategory | null;

  const [activeDay, setActiveDay] = useState("today");
  const [activeArea, setActiveArea] = useState("nearby");
  const [activePrice, setActivePrice] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<BagCategory | null>(
    initialCategory && CATEGORY_LABELS[initialCategory] ? initialCategory : null
  );

  const filteredBags = bags.filter((bag) => {
    if (activePrice === "390" && bag.price !== 390) return false;
    if (activePrice === "990" && bag.price !== 990) return false;
    if (activeCategory && bag.category !== activeCategory) return false;
    return true;
  });

  return (
    <div className="min-h-dvh bg-panq-surface pb-[calc(var(--spacing-panq-8)+4rem)]">
      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center gap-3 px-[var(--spacing-panq-3)] py-3 bg-panq-surface">
        <Link
          href="/"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-panq-surface-container-low"
        >
          <ArrowLeft size={20} className="text-panq-on-surface" />
        </Link>
        <h1 className="text-[1.125rem] font-bold text-panq-on-surface">
          さがす
        </h1>
        <div className="ml-auto">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-panq-surface-container-low cursor-pointer">
            <SlidersHorizontal size={18} className="text-panq-on-surface-variant" />
          </button>
        </div>
      </header>

      {/* Search bar */}
      <section className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-3)]">
        <SearchBar placeholder="パン屋さん・エリアで探す..." />
      </section>

      {/* Filters */}
      <section className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-5)]">
        {/* 1: 受取日 */}
        <div>
          <p className="text-[0.75rem] text-panq-on-surface-variant">受取日</p>
          <div className="flex gap-2 mt-[var(--spacing-panq-2)] overflow-x-auto scrollbar-hide">
            {pickupDays.map((d) => (
              <FilterChip
                key={d.id}
                label={d.label}
                selected={activeDay === d.id}
                onToggle={() => setActiveDay(d.id)}
              />
            ))}
          </div>
        </div>

        {/* 2: エリア */}
        <div className="mt-[var(--spacing-panq-4)]">
          <p className="text-[0.75rem] text-panq-on-surface-variant">エリア</p>
          <div className="flex gap-2 mt-[var(--spacing-panq-2)] overflow-x-auto scrollbar-hide">
            {areas.map((a) => (
              <FilterChip
                key={a.id}
                label={a.label}
                selected={activeArea === a.id}
                onToggle={() => setActiveArea(a.id)}
              />
            ))}
          </div>
        </div>

        {/* 3: 価格 */}
        <div className="mt-[var(--spacing-panq-4)]">
          <p className="text-[0.75rem] text-panq-on-surface-variant">価格</p>
          <div className="flex gap-2 mt-[var(--spacing-panq-2)]">
            {prices.map((p) => (
              <FilterChip
                key={p.id}
                label={p.label}
                selected={activePrice === p.id}
                onToggle={() =>
                  setActivePrice(activePrice === p.id ? null : p.id)
                }
              />
            ))}
          </div>
        </div>

        {/* 4: カテゴリ */}
        <div className="mt-[var(--spacing-panq-4)]">
          <p className="text-[0.75rem] text-panq-on-surface-variant">カテゴリ</p>
          <div className="flex gap-2 mt-[var(--spacing-panq-2)] overflow-x-auto scrollbar-hide">
            {categoryFilters.map((c) => (
              <FilterChip
                key={c.id}
                label={c.label}
                selected={activeCategory === c.id}
                onToggle={() =>
                  setActiveCategory(activeCategory === c.id ? null : c.id)
                }
              />
            ))}
          </div>
        </div>

        {/* 5: 地図ボタン */}
        <button
          className="
            mt-[var(--spacing-panq-4)] w-full
            flex items-center justify-center gap-2
            rounded-full py-3
            bg-panq-surface-container-low
            text-[0.875rem] font-semibold text-panq-primary
            cursor-pointer
            active:scale-[0.98] transition-transform duration-150
          "
          onClick={() => alert("近日公開")}
        >
          <Map size={18} />
          地図で近くのパン屋さんを探す
        </button>
      </section>

      {/* Results count */}
      <section className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-5)]">
        <p className="text-[0.75rem] text-panq-on-surface-variant">
          {filteredBags.length}件の福袋が見つかりました
        </p>
      </section>

      {/* Bag list — vertical card layout */}
      <section className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-3)] flex flex-col gap-[var(--spacing-panq-4)]">
        {filteredBags.map((bag) => (
          <Link
            key={bag.id}
            href={`/bags/${bag.id}`}
            className="
              flex flex-col
              rounded-[2rem] overflow-hidden
              bg-panq-surface-container-lowest
              shadow-[var(--shadow-ambient)]
            "
          >
            {/* Image with overlay badge */}
            <div className="relative h-[180px] w-full">
              <img
                src={bag.imageUrl}
                alt={bag.title}
                className="h-full w-full object-cover"
              />
              <span
                className={`
                  absolute top-3 left-3
                  inline-flex items-center rounded-full px-2.5 py-0.5
                  text-[0.6875rem] font-semibold uppercase tracking-wider
                  backdrop-blur-sm
                  ${
                    bag.tier === "premium"
                      ? "bg-panq-primary/90 text-panq-on-primary"
                      : "bg-panq-secondary/90 text-panq-on-secondary"
                  }
                `}
              >
                {bag.tier === "premium" ? "Premium" : "Standard"}
              </span>
            </div>

            {/* Card body */}
            <div className="p-[var(--spacing-panq-4)] flex flex-col gap-[var(--spacing-panq-2)]">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-[1.125rem] font-semibold text-panq-on-surface leading-snug">
                    {bag.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[0.75rem] text-panq-on-surface-variant">
                      {bag.storeName}
                    </span>
                    <span className="flex items-center gap-0.5 text-[0.75rem] text-panq-on-surface-variant">
                      <Star size={11} className="fill-panq-tertiary text-panq-tertiary" />
                      {bag.rating}
                    </span>
                  </div>
                </div>
                <PriceBadge price={bag.price} />
              </div>

              <div className="flex items-center gap-1 text-[0.75rem] text-panq-on-surface-variant">
                <Clock size={13} />
                受取: {bag.pickupTime}
              </div>

              <div className="flex items-center gap-1 text-[0.75rem] text-panq-on-surface-variant">
                <MapPin size={13} />
                {bag.storeAddress}
              </div>

              {/* Add to cart button */}
              <button
                className="
                  mt-[var(--spacing-panq-2)] w-full
                  inline-flex items-center justify-center
                  rounded-full px-6 py-2.5
                  font-semibold text-[0.875rem]
                  bg-panq-secondary-container text-panq-on-secondary-container
                  active:scale-[0.98] transition-transform duration-150
                "
                onClick={(e) => e.preventDefault()}
              >
                カートに追加
              </button>
            </div>
          </Link>
        ))}
      </section>

      <BottomNav />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-dvh bg-panq-surface">
          <p className="text-panq-on-surface-variant">読み込み中...</p>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
