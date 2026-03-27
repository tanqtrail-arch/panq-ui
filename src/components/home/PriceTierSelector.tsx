"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const tiers = [
  {
    price: 390,
    label: "おてがる福袋",
    description: "パン屋さんの人気パンが2〜3個。まずはここから。",
    href: "/search?tier=standard",
  },
  {
    price: 990,
    label: "プレミアム福袋",
    description: "職人こだわりのパンが5〜6個。特別な詰め合わせ。",
    href: "/search?tier=premium",
  },
] as const;

export default function PriceTierSelector() {
  const [selected, setSelected] = useState<390 | 990>(390);

  return (
    <section className="px-[var(--spacing-panq-4)] mt-[var(--spacing-panq-6)]">
      <h2 className="font-serif text-[1.25rem] font-bold text-panq-on-surface">
        えらべる2つの福袋
      </h2>
      <p className="mt-1 text-[0.8125rem] text-panq-on-surface-variant">
        お好みの価格帯をタップしてください
      </p>

      <div className="mt-[var(--spacing-panq-4)] flex gap-[var(--spacing-panq-3)]">
        {tiers.map((tier) => {
          const isActive = selected === tier.price;
          return (
            <button
              key={tier.price}
              onClick={() => setSelected(tier.price)}
              className={`
                flex-1 flex flex-col items-start gap-2
                p-4 rounded-[var(--radius-xl)] cursor-pointer
                transition-all duration-200
                ${
                  isActive
                    ? "artisan-gradient text-white premium-glow"
                    : "bg-panq-surface-container-lowest text-panq-on-surface shadow-[var(--shadow-ambient)]"
                }
              `}
            >
              <span className={`text-[1.5rem] font-bold ${isActive ? "text-white" : "text-panq-primary"}`}>
                ¥{tier.price}
              </span>
              <span className={`text-[0.8125rem] font-semibold ${isActive ? "text-white/90" : "text-panq-on-surface"}`}>
                {tier.label}
              </span>
              <span className={`text-[0.75rem] leading-relaxed ${isActive ? "text-white/75" : "text-panq-on-surface-variant"}`}>
                {tier.description}
              </span>
            </button>
          );
        })}
      </div>

      <Link
        href={tiers.find((t) => t.price === selected)?.href ?? "/search"}
        className="mt-[var(--spacing-panq-3)] flex items-center justify-end gap-0.5 text-[0.8125rem] font-semibold text-panq-primary"
      >
        {selected === 990 ? "プレミアム" : "おてがる"}福袋を見る
        <ChevronRight size={16} />
      </Link>
    </section>
  );
}
