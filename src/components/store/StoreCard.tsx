"use client";

import Link from "next/link";
import { Heart, Star, MapPin } from "lucide-react";
import type { Store } from "@/lib/store-data";

interface StoreCardProps {
  store: Store;
}

export default function StoreCard({ store }: StoreCardProps) {
  return (
    <Link
      href={`/store/${store.id}`}
      className="
        flex items-center gap-[var(--spacing-panq-4)]
        p-[var(--spacing-panq-3)] rounded-[var(--radius-xl)]
        bg-panq-surface-container-lowest
        shadow-[var(--shadow-ambient)]
        transition-transform duration-150 active:scale-[0.98]
      "
    >
      {/* Store image */}
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-[var(--radius-lg)]">
        <img
          src={store.image}
          alt={store.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Store info */}
      <div className="flex flex-1 flex-col gap-1.5 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-[0.9375rem] font-bold text-panq-on-surface leading-snug truncate">
            {store.name}
          </h3>
          <button
            onClick={(e) => e.preventDefault()}
            className="shrink-0 cursor-pointer"
          >
            <Heart
              size={18}
              className={
                store.isFavorite
                  ? "fill-panq-primary text-panq-primary"
                  : "text-panq-outline-variant"
              }
            />
          </button>
        </div>

        {/* Area + rating */}
        <div className="flex items-center gap-2 text-[0.75rem] text-panq-on-surface-variant">
          <span className="flex items-center gap-0.5">
            <MapPin size={12} />
            {store.area}
          </span>
          <span className="flex items-center gap-0.5">
            <Star size={11} className="fill-panq-tertiary-container text-panq-tertiary-container" />
            {store.rating}
          </span>
        </div>

        {/* Plan badges */}
        <div className="flex items-center gap-1.5">
          {store.plans.includes("990") && (
            <span className="artisan-gradient text-white text-[0.625rem] font-bold px-2 py-0.5 rounded-full">
              プレミアム ¥990
            </span>
          )}
          {store.plans.includes("390") && (
            <span className="text-[0.625rem] font-semibold px-2 py-0.5 rounded-full border border-panq-outline-variant text-panq-on-surface-variant">
              ¥390
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
