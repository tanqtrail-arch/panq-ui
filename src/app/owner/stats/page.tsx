"use client";

import { useState } from "react";
import { Star, Heart, CreditCard, Award } from "lucide-react";
import OwnerBottomNav from "@/components/owner/OwnerBottomNav";

const mockStats = {
  monthlySales: 48600,
  monthlyBags: 89,
  repeatRate: 64,
  rating: 4.6,
  weeklyData: [
    { day: "月", s390: 1560, s990: 1980 },
    { day: "火", s390: 780, s990: 990 },
    { day: "水", s390: 0, s990: 0 },
    { day: "木", s390: 1170, s990: 1980 },
    { day: "金", s390: 1560, s990: 2970 },
    { day: "土", s390: 2340, s990: 3960 },
    { day: "日", s390: 1950, s990: 2970 },
  ],
  reviews: [
    { name: "パン好きさん", rating: 5, comment: "毎週楽しみにしています！何が入っているかわからないワクワク感が最高です。", date: "3/25" },
    { name: "ゆきこ", rating: 4, comment: "クロワッサンが絶品でした。福袋で出会えてラッキー！", date: "3/22" },
  ],
  badge: { current: "サンキューバッジ", currentCount: 89, nextBadge: "ブロンズバッジ", nextThreshold: 99 },
  payout: { nextDate: "2026-04-01", cycle: "7日後", balance: 38400 },
};

const periods = [
  { id: "today", label: "今日" },
  { id: "week", label: "今週" },
  { id: "month", label: "今月" },
];

const maxBar = Math.max(...mockStats.weeklyData.map((d) => d.s390 + d.s990));

export default function OwnerStatsPage() {
  const [period, setPeriod] = useState("month");

  const summaryCards = [
    { label: "売上合計", value: `¥${mockStats.monthlySales.toLocaleString()}`, gradient: true },
    { label: "販売袋数", value: `${mockStats.monthlyBags}袋`, gradient: false },
    { label: "リピート率", value: `${mockStats.repeatRate}%`, gradient: false },
    { label: "評価", value: `★ ${mockStats.rating}`, gradient: false },
  ];

  return (
    <div className="min-h-dvh bg-panq-surface pb-[calc(var(--spacing-panq-8)+4rem)]">
      {/* Header */}
      <header className="sticky top-0 z-40 glass-panel flex items-center justify-between px-[var(--spacing-panq-4)] py-3">
        <h1 className="font-serif text-[1.125rem] font-bold text-panq-on-surface">実績</h1>
        <div className="flex gap-1">
          {periods.map((p) => (
            <button
              key={p.id}
              onClick={() => setPeriod(p.id)}
              className={`px-3 py-1 rounded-full text-[0.6875rem] font-semibold cursor-pointer transition-colors ${period === p.id ? "artisan-gradient text-white" : "bg-panq-surface-container-high text-panq-on-surface-variant"}`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </header>

      <div className="px-[var(--spacing-panq-4)]">
        {/* Summary cards */}
        <section className="mt-[var(--spacing-panq-4)] grid grid-cols-2 gap-[var(--spacing-panq-2)]">
          {summaryCards.map((c) => (
            <div key={c.label} className="rounded-[var(--radius-xl)] bg-panq-surface-container-lowest p-[var(--spacing-panq-4)] shadow-[var(--shadow-ambient)]">
              <p className="text-[0.625rem] font-semibold uppercase tracking-wider text-panq-on-surface-variant">{c.label}</p>
              <p className={`mt-1 text-[1.375rem] font-bold leading-tight ${c.gradient ? "text-gradient" : "text-panq-on-surface"}`}>{c.value}</p>
            </div>
          ))}
        </section>

        {/* Sales chart */}
        <section className="mt-[var(--spacing-panq-5)]">
          <h2 className="font-serif text-[1.125rem] font-bold text-panq-on-surface mb-[var(--spacing-panq-3)]">今週の売上</h2>
          <div className="rounded-[var(--radius-xl)] bg-panq-surface-container-lowest p-[var(--spacing-panq-4)] shadow-[var(--shadow-ambient)]">
            <div className="flex items-end justify-between gap-1.5" style={{ height: 140 }}>
              {mockStats.weeklyData.map((d) => {
                const total = d.s390 + d.s990;
                const pct = maxBar > 0 ? (total / maxBar) * 100 : 0;
                const s990pct = total > 0 ? (d.s990 / total) * 100 : 0;
                return (
                  <div key={d.day} className="flex flex-1 flex-col items-center gap-1.5">
                    <div className="w-full flex justify-center" style={{ height: 110 }}>
                      <div className="w-7 rounded-t-[var(--radius-sm)] overflow-hidden flex flex-col justify-end" style={{ height: `${Math.max(pct, total > 0 ? 5 : 0)}%` }}>
                        <div className="artisan-gradient" style={{ height: `${s990pct}%` }} />
                        <div className="bg-panq-primary-fixed" style={{ height: `${100 - s990pct}%` }} />
                      </div>
                    </div>
                    <span className="text-[0.625rem] font-medium text-panq-on-surface-variant">{d.day}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-[var(--spacing-panq-3)] flex items-center justify-center gap-4 text-[0.625rem] text-panq-on-surface-variant">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full artisan-gradient" />¥990</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-panq-primary-fixed" />¥390</span>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="mt-[var(--spacing-panq-5)]">
          <h2 className="font-serif text-[1.125rem] font-bold text-panq-on-surface mb-[var(--spacing-panq-3)]">お客様からのありがとう</h2>
          <div className="flex flex-col gap-[var(--spacing-panq-2)]">
            {mockStats.reviews.map((r) => (
              <div key={r.name} className="rounded-[var(--radius-xl)] bg-panq-surface-container-lowest p-[var(--spacing-panq-4)] shadow-[var(--shadow-ambient)]">
                <div className="flex items-center justify-between">
                  <span className="text-[0.8125rem] font-semibold text-panq-on-surface">{r.name}</span>
                  <span className="text-[0.6875rem] text-panq-on-surface-variant">{r.date}</span>
                </div>
                <div className="mt-1 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={11} className={i < r.rating ? "fill-panq-tertiary-container text-panq-tertiary-container" : "text-panq-outline-variant"} />
                  ))}
                </div>
                <p className="mt-1.5 text-[0.75rem] leading-relaxed text-panq-on-surface-variant">{r.comment}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Store badge */}
        <section className="mt-[var(--spacing-panq-5)]">
          <h2 className="font-serif text-[1.125rem] font-bold text-panq-on-surface mb-[var(--spacing-panq-3)]">店舗バッジ</h2>
          <div className="rounded-[var(--radius-xl)] bg-panq-surface-container-lowest p-[var(--spacing-panq-4)] shadow-[var(--shadow-ambient)]">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-panq-tertiary-fixed">
                <Award size={22} className="text-panq-on-tertiary-fixed-variant" />
              </div>
              <div>
                <p className="text-[0.9375rem] font-bold text-panq-on-surface">{mockStats.badge.current}</p>
                <p className="text-[0.6875rem] text-panq-on-surface-variant">月間 {mockStats.badge.currentCount}袋</p>
              </div>
            </div>
            <div className="mt-[var(--spacing-panq-3)]">
              <div className="flex justify-between text-[0.625rem] text-panq-on-surface-variant mb-1">
                <span>{mockStats.badge.current}</span>
                <span>{mockStats.badge.nextBadge}</span>
              </div>
              <div className="h-2 rounded-full bg-panq-surface-container-high overflow-hidden">
                <div className="h-full rounded-full artisan-gradient" style={{ width: `${(mockStats.badge.currentCount / mockStats.badge.nextThreshold) * 100}%` }} />
              </div>
              <p className="mt-1.5 text-[0.6875rem] text-panq-on-surface-variant">
                あと{mockStats.badge.nextThreshold - mockStats.badge.currentCount}袋で{mockStats.badge.nextBadge}
              </p>
            </div>
          </div>
        </section>

        {/* Payout */}
        <section className="mt-[var(--spacing-panq-5)]">
          <h2 className="font-serif text-[1.125rem] font-bold text-panq-on-surface mb-[var(--spacing-panq-3)]">入金情報</h2>
          <div className="rounded-[var(--radius-xl)] bg-panq-surface-container-lowest p-[var(--spacing-panq-4)] shadow-[var(--shadow-ambient)]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-panq-primary-fixed">
                <CreditCard size={18} className="text-panq-primary" />
              </div>
              <div className="flex-1">
                <p className="text-[0.6875rem] text-panq-on-surface-variant">次回入金予定</p>
                <p className="text-[1rem] font-bold text-panq-on-surface">{mockStats.payout.nextDate}</p>
              </div>
              <span className="text-[1.125rem] font-bold text-panq-primary">¥{mockStats.payout.balance.toLocaleString()}</span>
            </div>
            <div className="mt-[var(--spacing-panq-3)] rounded-[var(--radius-lg)] bg-panq-surface-container-low p-[var(--spacing-panq-3)]">
              <p className="text-[0.6875rem] text-panq-on-surface-variant">
                ペイアウトサイクル: <span className="font-semibold text-panq-on-surface">新規 7日後 → 実績あり 4日後 → 優良 2日後</span>
              </p>
            </div>
            <button className="mt-[var(--spacing-panq-3)] text-[0.8125rem] font-semibold text-panq-primary cursor-pointer">
              Stripeダッシュボードを開く →
            </button>
          </div>
        </section>
      </div>

      <OwnerBottomNav />
    </div>
  );
}
