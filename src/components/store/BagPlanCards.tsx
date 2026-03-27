import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BagPlanCardsProps {
  plans: ("390" | "990")[];
  storeId: string;
}

const planData = {
  "990": {
    title: "PanQ! プレミアム",
    price: 990,
    description: "職人こだわりの厳選パン詰め合わせ。5〜6個入り。",
    remaining: 3,
    bagId: "2",
  },
  "390": {
    title: "PanQ! 福袋",
    price: 390,
    description: "お手頃にパン屋さんの味を楽しめる福袋。2〜3個入り。",
    remaining: 5,
    bagId: "1",
  },
} as const;

export default function BagPlanCards({ plans, storeId }: BagPlanCardsProps) {
  return (
    <div className="flex flex-col gap-[var(--spacing-panq-3)]">
      {plans.includes("990") && (
        <Link
          href={`/bags/${planData["990"].bagId}`}
          className="
            relative overflow-hidden
            flex flex-col gap-[var(--spacing-panq-3)]
            p-[var(--spacing-panq-4)] rounded-[var(--radius-xl)]
            bg-panq-surface-container-lowest
            shadow-[var(--shadow-ambient)]
            ring-1 ring-panq-primary-fixed-dim/30
            transition-transform duration-150 active:scale-[0.98]
          "
        >
          {/* Accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 artisan-gradient" />

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif text-[1.0625rem] font-bold text-panq-on-surface">
                {planData["990"].title}
              </h3>
              <p className="mt-0.5 text-[0.75rem] text-panq-on-surface-variant">
                {planData["990"].description}
              </p>
            </div>
            <span className="shrink-0 text-[1.375rem] font-bold text-panq-primary">
              ¥{planData["990"].price}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[0.6875rem] font-medium text-panq-tertiary">
              残り{planData["990"].remaining}袋
            </span>
            <span className="flex items-center gap-0.5 artisan-gradient text-white text-[0.75rem] font-semibold px-3 py-1.5 rounded-full">
              この福袋を選ぶ
              <ChevronRight size={14} />
            </span>
          </div>
        </Link>
      )}

      {plans.includes("390") && (
        <Link
          href={`/bags/${planData["390"].bagId}`}
          className="
            flex flex-col gap-[var(--spacing-panq-3)]
            p-[var(--spacing-panq-4)] rounded-[var(--radius-xl)]
            bg-panq-surface-container-lowest
            shadow-[var(--shadow-ambient)]
            transition-transform duration-150 active:scale-[0.98]
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif text-[1.0625rem] font-bold text-panq-on-surface">
                {planData["390"].title}
              </h3>
              <p className="mt-0.5 text-[0.75rem] text-panq-on-surface-variant">
                {planData["390"].description}
              </p>
            </div>
            <span className="shrink-0 text-[1.375rem] font-bold text-panq-primary">
              ¥{planData["390"].price}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[0.6875rem] font-medium text-panq-tertiary">
              残り{planData["390"].remaining}袋
            </span>
            <span className="flex items-center gap-0.5 text-[0.75rem] font-semibold px-3 py-1.5 rounded-full border border-panq-outline-variant text-panq-on-surface-variant">
              この福袋を選ぶ
              <ChevronRight size={14} />
            </span>
          </div>
        </Link>
      )}
    </div>
  );
}
