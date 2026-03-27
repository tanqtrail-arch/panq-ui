import Link from "next/link";
import {
  Wheat,
  Cookie,
  Sandwich,
  Croissant,
  Gift,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Category {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

const categories: Category[] = [
  { id: "hard", label: "ハード系", description: "ハードパン中心の詰め合わせ", icon: Wheat },
  { id: "sweet", label: "甘い系", description: "菓子パン・スイーツ系", icon: Cookie },
  { id: "meal", label: "お食事系", description: "惣菜パン・サンドイッチ系", icon: Sandwich },
  { id: "simple", label: "シンプル系", description: "食パン・ロール等の定番", icon: Croissant },
  { id: "mix", label: "ミックス", description: "おまかせアソート", icon: Gift },
];

export default function CategoryCards() {
  return (
    <section className="px-[var(--spacing-panq-4)] mt-[var(--spacing-panq-6)]">
      <h2 className="font-serif text-[1.25rem] font-bold text-panq-on-surface">
        何が入ってる？
      </h2>
      <p className="mt-1 text-[0.8125rem] text-panq-on-surface-variant">
        福袋は5つのカテゴリから選べます
      </p>

      <div className="mt-[var(--spacing-panq-4)] flex flex-col gap-[var(--spacing-panq-3)]">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link
              key={cat.id}
              href={`/search?category=${cat.id}`}
              className="
                flex items-center gap-[var(--spacing-panq-4)]
                p-[var(--spacing-panq-4)] rounded-[var(--radius-xl)]
                bg-panq-surface-container-lowest
                shadow-[var(--shadow-ambient)]
                transition-transform duration-150 active:scale-[0.98]
              "
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-panq-primary-fixed">
                <Icon size={22} className="text-panq-on-primary-fixed-variant" strokeWidth={2} />
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-[0.9375rem] font-semibold text-panq-on-surface">
                  {cat.label}
                </span>
                <span className="text-[0.75rem] text-panq-on-surface-variant">
                  {cat.description}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
