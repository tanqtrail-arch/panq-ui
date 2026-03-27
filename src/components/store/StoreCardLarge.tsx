"use client";

import Link from "next/link";
import { Heart, Star, MapPin } from "lucide-react";
import type { Store } from "@/lib/store-data";

interface StoreCardLargeProps {
  store: Store;
}

export default function StoreCardLarge({ store }: StoreCardLargeProps) {
  return (
    <div className="rounded-[var(--radius-xl)] overflow-hidden bg-panq-surface-container-lowest shadow-[var(--shadow-ambient)]">
      {/* Store image — full width */}
      <Link href={`/store/${store.id}`} className="block relative">
        <div className="aspect-[16/9]">
          <img
            src={store.image}
            alt={store.name}
            className="h-full w-full object-cover"
          />
        </div>
        {/* Heart overlay */}
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm cursor-pointer"
        >
          <Heart
            size={16}
            className={
              store.isFavorite
                ? "fill-panq-primary text-panq-primary"
                : "text-panq-on-surface-variant"
            }
          />
        </button>
      </Link>

      {/* Info area */}
      <div className="p-[var(--spacing-panq-4)] flex flex-col gap-2">
        <h3 className="font-serif text-[1.0625rem] font-bold text-panq-on-surface leading-snug">
          {store.name}
        </h3>

        <div className="flex items-center gap-2 text-[0.75rem] text-panq-on-surface-variant">
          <span className="flex items-center gap-0.5">
            <MapPin size={12} />
            {store.area}
          </span>
          <span className="flex items-center gap-0.5">
            <Star size={11} className="fill-panq-tertiary-container text-panq-tertiary-container" />
            {store.rating}
          </span>
          <span>({store.reviewCount})</span>
        </div>

        {/* Plan badges */}
        <div className="flex items-center gap-1.5">
          {store.plans.includes("990") && (
            <span className="artisan-gradient text-white text-[0.6875rem] font-bold px-2.5 py-1 rounded-full">
              プレミアム ¥990
            </span>
          )}
          {store.plans.includes("390") && (
            <span className="text-[0.6875rem] font-semibold px-2.5 py-1 rounded-full border border-panq-outline-variant text-panq-on-surface-variant">
              ¥390
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/store/${store.id}`}
          className="
            mt-1 w-full inline-flex items-center justify-center
            rounded-full px-4 py-2.5
            artisan-gradient text-white
            font-semibold text-[0.8125rem]
            transition-transform duration-150 active:scale-[0.98]
          "
        >
          予約する
        </Link>
      </div>
    </div>
  );
}
