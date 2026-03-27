"use client";

import { useState } from "react";
import { Plus, Minus, Package, X, Clock, Check } from "lucide-react";
import OwnerBottomNav from "@/components/owner/OwnerBottomNav";

const mockData = {
  today: {
    bags: [
      { type: "standard", price: 390, total: 5, sold: 2, remaining: 3 },
      { type: "premium", price: 990, total: 2, sold: 1, remaining: 1 },
    ],
    pickupTime: "17:00〜18:00",
  },
  history: [
    { date: "3/26（水）", s390: { listed: 5, sold: 5 }, s990: { listed: 2, sold: 2 }, revenue: 3930 },
    { date: "3/25（火）", s390: { listed: 4, sold: 3 }, s990: { listed: 2, sold: 1 }, revenue: 2160 },
    { date: "3/24（月）", s390: { listed: 5, sold: 5 }, s990: { listed: 3, sold: 3 }, revenue: 4920 },
    { date: "3/23（日）", s390: { listed: 6, sold: 6 }, s990: { listed: 2, sold: 2 }, revenue: 4320 },
  ],
  orders: [
    { code: "PQ-1249", product: "PanQ! 福袋", buyer: "田中さん", time: "17:45", status: "waiting" as const },
    { code: "PQ-1248", product: "PanQ! プレミアム", buyer: "鈴木さん", time: "17:15", status: "picked" as const },
    { code: "PQ-1247", product: "PanQ! 福袋", buyer: "山田さん", time: "17:30", status: "waiting" as const },
  ],
};

export default function OwnerListingPage() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"standard" | "premium">("standard");
  const [modalCount, setModalCount] = useState(5);

  return (
    <div className="min-h-dvh bg-panq-surface pb-[calc(var(--spacing-panq-8)+4rem)]">
      {/* Header */}
      <header className="sticky top-0 z-40 glass-panel flex items-center justify-between px-[var(--spacing-panq-4)] py-3">
        <h1 className="font-serif text-[1.125rem] font-bold text-panq-on-surface">出品管理</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1 artisan-gradient text-white text-[0.75rem] font-semibold px-3 py-1.5 rounded-full cursor-pointer"
        >
          <Plus size={14} />
          新規出品
        </button>
      </header>

      <div className="px-[var(--spacing-panq-4)]">
        {/* Today's status */}
        <section className="mt-[var(--spacing-panq-4)]">
          <div className="rounded-[var(--radius-xl)] bg-panq-surface-container-lowest p-[var(--spacing-panq-4)] shadow-[var(--shadow-ambient)]">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-[1.125rem] font-bold text-panq-on-surface">本日の福袋</h2>
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[0.625rem] font-semibold bg-[#2ec4b2]/15 text-[#1a8a7d]">出品中</span>
            </div>
            <div className="mt-[var(--spacing-panq-3)] flex flex-col gap-[var(--spacing-panq-2)]">
              {mockData.today.bags.map((b) => {
                const pct = (b.sold / b.total) * 100;
                return (
                  <div key={b.type} className="rounded-[var(--radius-lg)] bg-panq-surface-container-low p-[var(--spacing-panq-3)]">
                    <div className="flex justify-between text-[0.8125rem]">
                      <span className="font-semibold text-panq-on-surface">¥{b.price}</span>
                      <span className="font-bold text-panq-primary">残り{b.remaining}袋</span>
                    </div>
                    <div className="mt-1.5 h-2 rounded-full bg-panq-surface-container-high overflow-hidden">
                      <div className="h-full rounded-full artisan-gradient" style={{ width: `${pct}%` }} />
                    </div>
                    <p className="mt-1 text-[0.625rem] text-panq-on-surface-variant">{b.sold}/{b.total}袋 販売</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-[var(--spacing-panq-2)] flex items-center gap-1 text-[0.6875rem] text-panq-on-surface-variant">
              <Clock size={12} />
              受取: {mockData.today.pickupTime}
            </div>
          </div>
        </section>

        {/* Pickup queue */}
        <section className="mt-[var(--spacing-panq-5)]">
          <h2 className="font-serif text-[1.125rem] font-bold text-panq-on-surface mb-[var(--spacing-panq-3)]">受取待ち</h2>
          <div className="flex flex-col gap-[var(--spacing-panq-2)]">
            {mockData.orders.map((o) => (
              <div key={o.code} className={`flex items-center justify-between p-[var(--spacing-panq-3)] rounded-[var(--radius-xl)] bg-panq-surface-container-lowest shadow-[var(--shadow-ambient)] ${o.status === "picked" ? "opacity-50" : ""}`}>
                <div>
                  <p className="text-[1rem] font-bold tracking-wider text-panq-primary font-mono">{o.code}</p>
                  <p className="text-[0.6875rem] text-panq-on-surface-variant">{o.product} ・ {o.buyer} ・ {o.time}</p>
                </div>
                {o.status === "waiting" ? (
                  <button className="flex items-center gap-1 text-[0.6875rem] font-semibold artisan-gradient text-white px-3 py-1.5 rounded-full cursor-pointer">
                    <Check size={12} /> 受取済み
                  </button>
                ) : (
                  <span className="text-[0.6875rem] font-semibold text-panq-on-surface-variant bg-panq-surface-container-high px-2.5 py-1 rounded-full">完了</span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-2 text-[0.5625rem] text-panq-on-surface-variant">※ 24時間後に自動で受取完了になります</p>
        </section>

        {/* History */}
        <section className="mt-[var(--spacing-panq-5)]">
          <h2 className="font-serif text-[1.125rem] font-bold text-panq-on-surface mb-[var(--spacing-panq-3)]">出品履歴</h2>
          <div className="flex flex-col gap-[var(--spacing-panq-2)]">
            {mockData.history.map((d) => (
              <div key={d.date} className="flex items-center justify-between p-[var(--spacing-panq-3)] rounded-[var(--radius-lg)] bg-panq-surface-container-low">
                <div>
                  <p className="text-[0.8125rem] font-semibold text-panq-on-surface">{d.date}</p>
                  <p className="text-[0.625rem] text-panq-on-surface-variant">
                    ¥390: {d.s390.sold}/{d.s390.listed}袋 ・ ¥990: {d.s990.sold}/{d.s990.listed}袋
                  </p>
                </div>
                <span className="text-[0.9375rem] font-bold text-panq-primary">¥{d.revenue.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* New listing modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowModal(false)} />
          <div className="relative w-full max-w-[390px] rounded-t-[var(--radius-xl)] bg-panq-surface-container-lowest p-[var(--spacing-panq-5)]">
            <div className="mx-auto mb-[var(--spacing-panq-3)] h-1 w-10 rounded-full bg-panq-outline-variant" />
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-[1.125rem] font-bold text-panq-on-surface">福袋を出品</h3>
              <button onClick={() => setShowModal(false)} className="flex h-8 w-8 items-center justify-center rounded-full bg-panq-surface-container-high cursor-pointer">
                <X size={16} className="text-panq-on-surface-variant" />
              </button>
            </div>

            <div className="mt-[var(--spacing-panq-4)] flex flex-col gap-[var(--spacing-panq-4)]">
              {/* Type tabs */}
              <div className="flex gap-2">
                {(["standard", "premium"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setModalType(t)}
                    className={`flex-1 py-2.5 rounded-full text-[0.8125rem] font-semibold cursor-pointer transition-all ${modalType === t ? "artisan-gradient text-white" : "bg-panq-surface-container-low text-panq-on-surface-variant"}`}
                  >
                    {t === "premium" ? "¥990 プレミアム" : "¥390 福袋"}
                  </button>
                ))}
              </div>

              {/* Count */}
              <div>
                <p className="text-[0.8125rem] font-semibold text-panq-on-surface">数量</p>
                <div className="flex items-center gap-4 mt-2">
                  <button onClick={() => setModalCount(Math.max(1, modalCount - 1))} className="flex h-10 w-10 items-center justify-center rounded-full bg-panq-surface-container-high cursor-pointer"><Minus size={18} /></button>
                  <span className="text-[1.5rem] font-bold text-panq-on-surface w-12 text-center">{modalCount}</span>
                  <button onClick={() => setModalCount(modalCount + 1)} className="flex h-10 w-10 items-center justify-center rounded-full bg-panq-surface-container-high cursor-pointer"><Plus size={18} /></button>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="text-[0.8125rem] font-semibold text-panq-on-surface">一言メッセージ（任意）</label>
                <input type="text" placeholder="例: 本日は自家製カンパーニュ入り！" className="h-11 rounded-full bg-panq-surface-container-low px-4 text-[0.875rem] text-panq-on-surface placeholder:text-panq-on-surface-variant/50 outline-none" />
              </div>

              <button onClick={() => { setShowModal(false); }} className="w-full py-4 rounded-full artisan-gradient text-white font-semibold text-[0.9375rem] cursor-pointer transition-transform active:scale-[0.98]">
                出品する
              </button>
            </div>
          </div>
        </div>
      )}

      <OwnerBottomNav />
    </div>
  );
}
