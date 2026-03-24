"use client";

import { Star, Heart } from "lucide-react";
import OwnerNav from "@/components/OwnerNav";

const mockOwnerStats = {
  monthlySales: 15600,
  monthlyCount: 39,
  monthlyDonation: 152.1,
  weeklyData: [
    { day: "月", sales: 3930 },
    { day: "火", sales: 2340 },
    { day: "水", sales: 0 },
    { day: "木", sales: 1950 },
    { day: "金", sales: 2730 },
    { day: "土", sales: 5100 },
    { day: "日", sales: 3510 },
  ],
  badge: {
    current: "サンキューバッジ",
    currentThreshold: 39,
    nextBadge: "ゴールドバッジ",
    nextThreshold: 390,
    progress: 10,
  },
};

const summaryCards = [
  {
    label: "今月の売上",
    value: `¥${mockOwnerStats.monthlySales.toLocaleString()}`,
    color: "text-panq-primary",
  },
  {
    label: "販売数",
    value: `${mockOwnerStats.monthlyCount}個`,
    color: "text-panq-secondary",
  },
  {
    label: "寄付額",
    value: `¥${mockOwnerStats.monthlyDonation}`,
    color: "text-panq-tertiary",
  },
];

const maxSales = Math.max(...mockOwnerStats.weeklyData.map((d) => d.sales));

export default function OwnerStatsPage() {
  return (
    <div className="min-h-dvh bg-panq-surface pb-[var(--spacing-panq-8)]">
      <OwnerNav />

      <div className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-5)]">
        {/* Summary cards — horizontal scroll */}
        <div className="flex gap-[var(--spacing-panq-3)] overflow-x-auto scrollbar-hide">
          {summaryCards.map((card) => (
            <div
              key={card.label}
              className="
                flex flex-col gap-[var(--spacing-panq-2)]
                shrink-0 w-[160px]
                rounded-[2rem] bg-panq-surface-container-lowest
                p-[var(--spacing-panq-4)]
                shadow-[var(--shadow-ambient)]
              "
            >
              <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-panq-on-surface-variant">
                {card.label}
              </p>
              <p className={`text-[1.75rem] font-bold leading-none ${card.color}`}>
                {card.value}
              </p>
            </div>
          ))}
        </div>

        {/* Weekly chart — CSS bars */}
        <section className="mt-[var(--spacing-panq-6)]">
          <h2 className="text-[1.5rem] font-semibold text-panq-on-surface">
            今週の売上
          </h2>
          <div className="mt-[var(--spacing-panq-4)] rounded-[2rem] bg-panq-surface-container-lowest p-[var(--spacing-panq-5)] shadow-[var(--shadow-ambient)]">
            <div className="flex items-end justify-between gap-2" style={{ height: 160 }}>
              {mockOwnerStats.weeklyData.map((d) => {
                const pct = maxSales > 0 ? (d.sales / maxSales) * 100 : 0;
                return (
                  <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
                    {/* Bar */}
                    <div className="w-full flex justify-center" style={{ height: 120 }}>
                      <div
                        className="w-8 rounded-t-[0.5rem] bg-panq-primary-container transition-all duration-500"
                        style={{
                          height: `${pct}%`,
                          alignSelf: "flex-end",
                          minHeight: d.sales > 0 ? 8 : 0,
                        }}
                      />
                    </div>
                    {/* Day label */}
                    <span className="text-[0.6875rem] font-medium text-panq-on-surface-variant">
                      {d.day}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Badge / Rank */}
        <section className="mt-[var(--spacing-panq-6)]">
          <h2 className="text-[1.5rem] font-semibold text-panq-on-surface">
            うちのランク
          </h2>
          <div className="mt-[var(--spacing-panq-4)] rounded-[2rem] bg-panq-surface-container-lowest p-[var(--spacing-panq-5)] shadow-[var(--shadow-ambient)]">
            {/* Current badge */}
            <div className="flex items-center gap-[var(--spacing-panq-3)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-panq-tertiary-container">
                <Star
                  size={28}
                  className="text-panq-tertiary fill-panq-tertiary"
                />
              </div>
              <div>
                <p className="text-[1.125rem] font-bold text-panq-on-surface">
                  {mockOwnerStats.badge.current}
                </p>
                <p className="text-[0.75rem] text-panq-on-surface-variant">
                  月間 {mockOwnerStats.badge.currentThreshold}個 達成
                </p>
              </div>
            </div>

            {/* Progress to next */}
            <div className="mt-[var(--spacing-panq-4)]">
              <div className="flex justify-between text-[0.6875rem] text-panq-on-surface-variant">
                <span>{mockOwnerStats.badge.current}</span>
                <span>{mockOwnerStats.badge.nextBadge}</span>
              </div>
              <div className="mt-1 h-3 w-full rounded-full bg-panq-surface-container overflow-hidden">
                <div
                  className="h-full rounded-full bg-panq-primary transition-all duration-500"
                  style={{ width: `${mockOwnerStats.badge.progress}%` }}
                />
              </div>
              <p className="mt-[var(--spacing-panq-2)] text-[0.75rem] text-panq-on-surface-variant">
                次のバッジまであと{" "}
                {mockOwnerStats.badge.nextThreshold - mockOwnerStats.monthlyCount}個
              </p>
            </div>
          </div>
        </section>

        {/* Donation report */}
        <section className="mt-[var(--spacing-panq-6)]">
          <h2 className="text-[1.5rem] font-semibold text-panq-on-surface">
            こどもホスピスへの寄付
          </h2>
          <div className="mt-[var(--spacing-panq-4)] rounded-[2rem] bg-panq-secondary-container p-[var(--spacing-panq-5)]">
            <div className="flex items-center gap-[var(--spacing-panq-3)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-panq-surface-container-lowest">
                <Heart
                  size={24}
                  className="text-panq-secondary fill-panq-secondary"
                />
              </div>
              <div>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-panq-on-secondary-container/70">
                  累計寄付額
                </p>
                <p className="text-[2.25rem] font-bold text-panq-on-secondary-container leading-none">
                  ¥{mockOwnerStats.monthlyDonation}
                </p>
              </div>
            </div>
            <p className="mt-[var(--spacing-panq-3)] text-[0.75rem] text-panq-on-secondary-container/70">
              1つの福袋につき3.9円が寄付されます
            </p>
          </div>
        </section>

        {/* More details link */}
        <div className="mt-[var(--spacing-panq-5)]">
          <button
            className="w-full rounded-full py-3 text-[0.875rem] font-semibold text-panq-primary bg-panq-surface-container-low cursor-pointer active:scale-[0.98] transition-transform duration-150"
            onClick={() => alert("近日公開")}
          >
            もっと詳しく
          </button>
        </div>
      </div>
    </div>
  );
}
