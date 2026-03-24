"use client";

import { useState } from "react";
import { Plus, Minus, Package, X } from "lucide-react";
import OwnerNav from "@/components/OwnerNav";
import Button from "@/components/Button";
import FilterChip from "@/components/FilterChip";
import { CATEGORY_LABELS, type BagCategory } from "@/lib/mock-data";

const categoryOptions: { id: BagCategory; label: string }[] = [
  { id: "hard", label: "ハード系" },
  { id: "sweet", label: "甘い系" },
  { id: "meal", label: "お食事系" },
  { id: "simple", label: "シンプル系" },
  { id: "mix", label: "ミックス" },
];

const mockOwnerListing = {
  today: {
    status: "active" as const,
    bags: [
      { type: "standard", price: 390, total: 5, sold: 2, remaining: 3 },
      { type: "premium", price: 990, total: 2, sold: 1, remaining: 1 },
    ],
    pickupTime: "17:00〜18:00",
  },
  weeklyHistory: [
    { date: "3/24（月）", listed: 7, sold: 7, revenue: 3930, allSold: true },
    { date: "3/23（日）", listed: 5, sold: 4, revenue: 2550, allSold: false },
    { date: "3/22（土）", listed: 8, sold: 8, revenue: 5100, allSold: true },
    { date: "3/21（金）", listed: 6, sold: 6, revenue: 3510, allSold: true },
    { date: "3/20（木）", listed: 4, sold: 3, revenue: 1950, allSold: false },
  ],
  todayOrders: [
    { code: "PQ-1247", status: "waiting" as const, bagType: "standard", time: "17:30" },
    { code: "PQ-1248", status: "picked" as const, bagType: "premium", time: "17:15" },
    { code: "PQ-1249", status: "waiting" as const, bagType: "standard", time: "17:45" },
  ],
};

const timeOptions = Array.from({ length: 8 }, (_, i) => {
  const h = i + 14;
  return `${h}:00`;
});

export default function OwnerListingPage() {
  const [showModal, setShowModal] = useState(false);
  const [modalBagType, setModalBagType] = useState("standard");
  const [modalCategory, setModalCategory] = useState<BagCategory>("mix");
  const [modalCount, setModalCount] = useState(5);

  const { today, weeklyHistory, todayOrders } = mockOwnerListing;

  return (
    <div className="min-h-dvh bg-panq-surface pb-[var(--spacing-panq-8)]">
      <OwnerNav />

      <div className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-5)]">
        {/* Today's status card */}
        <div className="rounded-[2rem] bg-panq-surface-container-lowest p-[var(--spacing-panq-5)] shadow-[var(--shadow-ambient)]">
          <div className="flex items-center justify-between">
            <h2 className="text-[1.5rem] font-semibold text-panq-on-surface">
              本日の福袋
            </h2>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[0.75rem] font-semibold bg-panq-secondary-container text-panq-on-secondary-container">
              出品中
            </span>
          </div>

          <div className="mt-[var(--spacing-panq-4)] flex flex-col gap-[var(--spacing-panq-3)]">
            {today.bags.map((bag) => (
              <div
                key={bag.type}
                className="flex items-center justify-between rounded-[1.5rem] bg-panq-surface-container-low p-[var(--spacing-panq-3)]"
              >
                <div>
                  <p className="text-[0.875rem] font-semibold text-panq-on-surface">
                    ¥{bag.price}
                  </p>
                  <p className="text-[0.6875rem] text-panq-on-surface-variant">
                    {bag.sold}/{bag.total}個 売れました
                  </p>
                </div>
                <span className="text-[1.125rem] font-bold text-panq-primary">
                  あと{bag.remaining}個
                </span>
              </div>
            ))}
          </div>

          <p className="mt-[var(--spacing-panq-3)] text-[0.75rem] text-panq-on-surface-variant">
            受取時間: {today.pickupTime}
          </p>
        </div>

        {/* List action */}
        <div className="mt-[var(--spacing-panq-5)]">
          <Button
            variant="primary"
            fullWidth
            onClick={() => setShowModal(true)}
          >
            <Package size={18} />
            今日の福袋を出品する
          </Button>
        </div>

        {/* Weekly history */}
        <section className="mt-[var(--spacing-panq-6)]">
          <h2 className="text-[1.5rem] font-semibold text-panq-on-surface">
            今週の出品履歴
          </h2>
          <div className="mt-[var(--spacing-panq-4)] flex flex-col gap-[var(--spacing-panq-3)]">
            {weeklyHistory.map((day) => (
              <div
                key={day.date}
                className={`
                  flex items-center justify-between rounded-[1.5rem]
                  p-[var(--spacing-panq-3)]
                  ${
                    day.allSold
                      ? "bg-panq-secondary-container"
                      : "bg-panq-surface-container-low"
                  }
                `}
              >
                <div>
                  <p
                    className={`text-[0.875rem] font-semibold ${
                      day.allSold
                        ? "text-panq-on-secondary-container"
                        : "text-panq-on-surface"
                    }`}
                  >
                    {day.date}
                  </p>
                  <p
                    className={`text-[0.6875rem] ${
                      day.allSold
                        ? "text-panq-on-secondary-container/70"
                        : "text-panq-on-surface-variant"
                    }`}
                  >
                    {day.sold}/{day.listed}個 売上
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-[1rem] font-bold ${
                      day.allSold
                        ? "text-panq-on-secondary-container"
                        : "text-panq-primary"
                    }`}
                  >
                    ¥{day.revenue.toLocaleString()}
                  </p>
                  {day.allSold && (
                    <span className="text-[0.6875rem] font-semibold text-panq-on-secondary-container">
                      完売
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Today's orders */}
        <section className="mt-[var(--spacing-panq-6)]">
          <h2 className="text-[1.5rem] font-semibold text-panq-on-surface">
            本日の注文
          </h2>
          <div className="mt-[var(--spacing-panq-4)] flex flex-col gap-[var(--spacing-panq-3)]">
            {todayOrders.map((order) => (
              <div
                key={order.code}
                className={`
                  flex items-center justify-between rounded-[1.5rem]
                  p-[var(--spacing-panq-3)]
                  bg-panq-surface-container-lowest shadow-[var(--shadow-ambient)]
                  ${order.status === "picked" ? "opacity-50" : ""}
                `}
              >
                <div>
                  <p className="text-[1.125rem] font-bold tracking-wide text-panq-primary font-mono">
                    {order.code}
                  </p>
                  <p className="text-[0.6875rem] text-panq-on-surface-variant">
                    ¥{order.bagType === "standard" ? 390 : 990} ・ {order.time}
                  </p>
                </div>
                <span
                  className={`
                    inline-flex items-center rounded-full px-3 py-1
                    text-[0.6875rem] font-semibold
                    ${
                      order.status === "waiting"
                        ? "bg-panq-primary-container text-panq-on-primary-container"
                        : "bg-panq-surface-container text-panq-on-surface-variant"
                    }
                  `}
                >
                  {order.status === "waiting" ? "受取待ち" : "受取済み"}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Sheet Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-panq-inverse-surface/40"
            onClick={() => setShowModal(false)}
          />
          {/* Sheet */}
          <div className="relative w-full max-w-[430px] rounded-t-[2rem] bg-panq-surface-container-lowest p-[var(--spacing-panq-5)]">
            {/* Handle */}
            <div className="mx-auto mb-[var(--spacing-panq-4)] h-1 w-10 rounded-full bg-panq-outline-variant" />

            <div className="flex items-center justify-between">
              <h3 className="text-[1.125rem] font-bold text-panq-on-surface">
                福袋を出品
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-panq-surface-container cursor-pointer"
              >
                <X size={16} className="text-panq-on-surface-variant" />
              </button>
            </div>

            <div className="mt-[var(--spacing-panq-5)] flex flex-col gap-[var(--spacing-panq-4)]">
              {/* Bag type */}
              <div>
                <p className="text-[0.875rem] font-semibold text-panq-on-surface">
                  福袋タイプ
                </p>
                <div className="flex gap-2 mt-[var(--spacing-panq-2)]">
                  <FilterChip
                    label="¥390"
                    selected={modalBagType === "standard"}
                    onToggle={() => setModalBagType("standard")}
                  />
                  <FilterChip
                    label="¥990"
                    selected={modalBagType === "premium"}
                    onToggle={() => setModalBagType("premium")}
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <p className="text-[0.875rem] font-semibold text-panq-on-surface">
                  カテゴリ
                </p>
                <div className="flex flex-wrap gap-2 mt-[var(--spacing-panq-2)]">
                  {categoryOptions.map((c) => (
                    <FilterChip
                      key={c.id}
                      label={c.label}
                      selected={modalCategory === c.id}
                      onToggle={() => setModalCategory(c.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Count stepper */}
              <div>
                <p className="text-[0.875rem] font-semibold text-panq-on-surface">
                  個数
                </p>
                <div className="flex items-center gap-4 mt-[var(--spacing-panq-2)]">
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-panq-surface-container cursor-pointer active:scale-95 transition-transform"
                    onClick={() => setModalCount(Math.max(1, modalCount - 1))}
                  >
                    <Minus size={18} className="text-panq-on-surface" />
                  </button>
                  <span className="text-[1.5rem] font-bold text-panq-on-surface w-12 text-center">
                    {modalCount}
                  </span>
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-panq-surface-container cursor-pointer active:scale-95 transition-transform"
                    onClick={() => setModalCount(modalCount + 1)}
                  >
                    <Plus size={18} className="text-panq-on-surface" />
                  </button>
                </div>
              </div>

              {/* Pickup time */}
              <div>
                <p className="text-[0.875rem] font-semibold text-panq-on-surface">
                  受取時間帯
                </p>
                <select
                  className="
                    mt-[var(--spacing-panq-2)] h-12 w-full rounded-[1rem] px-4
                    bg-panq-surface-container-highest
                    text-[0.875rem] text-panq-on-surface
                    outline-none appearance-none
                    border border-panq-outline-variant/20
                    focus:border-panq-primary
                  "
                >
                  {timeOptions.map((t) => (
                    <option key={t} value={t}>
                      {t}〜{parseInt(t) + 1}:00
                    </option>
                  ))}
                </select>
              </div>

              <Button
                variant="primary"
                fullWidth
                onClick={() => {
                  alert("出品しました");
                  setShowModal(false);
                }}
              >
                出品する
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
