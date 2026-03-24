"use client";

import { useState } from "react";
import { Croissant, QrCode } from "lucide-react";
import Link from "next/link";
import FilterChip from "@/components/FilterChip";
import PickupCode from "@/components/PickupCode";
import Button from "@/components/Button";
import BottomNav from "@/components/BottomNav";

const mockCurrentOrder = {
  id: "order-001",
  pickupCode: "PQ-1247",
  store: {
    name: "モーニングベーカリー 自由が丘店",
    address: "東京都目黒区自由が丘1-2-3",
  },
  item: { title: "おまかせパン福袋", price: 390 },
  pickupDeadline: "本日 18:00まで",
  status: "ready",
};

const mockOrderHistory = [
  {
    id: "order-002",
    storeName: "ブーランジュリー・パティスリー",
    date: "2026/03/21",
    price: 990,
    imageUrl:
      "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=200&h=200&fit=crop",
  },
  {
    id: "order-003",
    storeName: "キトキトパンの石窯便り",
    date: "2026/03/18",
    price: 390,
    imageUrl:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop",
  },
  {
    id: "order-004",
    storeName: "こむぎのはこ",
    date: "2026/03/15",
    price: 990,
    imageUrl:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=200&h=200&fit=crop",
  },
];

const tabs = [
  { id: "ready", label: "受取待ち" },
  { id: "confirmed", label: "注文確認" },
  { id: "past", label: "過去の注文" },
];

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("ready");

  return (
    <div className="min-h-dvh bg-panq-surface pb-[calc(var(--spacing-panq-8)+4rem)]">
      {/* Dark header */}
      <header className="bg-panq-inverse-surface px-[var(--spacing-panq-3)] pt-[var(--spacing-panq-6)] pb-[var(--spacing-panq-5)]">
        <div className="flex items-center justify-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-panq-primary-container">
            <Croissant size={16} className="text-panq-on-primary-container" />
          </div>
          <span className="text-[1rem] font-bold text-panq-inverse-primary tracking-tight">
            PanQ!
          </span>
        </div>
      </header>

      {/* Status tabs */}
      <section className="flex gap-2 px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-4)] overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <FilterChip
            key={tab.id}
            label={tab.label}
            selected={activeTab === tab.id}
            onToggle={() => setActiveTab(tab.id)}
          />
        ))}
      </section>

      {/* Current order card */}
      {activeTab === "ready" && (
        <section className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-5)]">
          <div className="rounded-[2rem] bg-panq-surface-container-lowest p-[var(--spacing-panq-5)] shadow-[var(--shadow-ambient)]">
            {/* Store info */}
            <p className="text-[1rem] font-semibold text-panq-on-surface">
              {mockCurrentOrder.store.name}
            </p>
            <p className="mt-1 text-[0.75rem] text-panq-on-surface-variant">
              お店でこのコードを見せてください
            </p>

            {/* Pickup code */}
            <div className="mt-[var(--spacing-panq-4)]">
              <PickupCode
                code={mockCurrentOrder.pickupCode}
                deadline={mockCurrentOrder.pickupDeadline}
                location={mockCurrentOrder.store.address}
              />
            </div>

            {/* QR button */}
            <div className="mt-[var(--spacing-panq-4)]">
              <Button
                variant="outline"
                fullWidth
                onClick={() => alert("QRコード表示は近日公開")}
              >
                <QrCode size={18} />
                QRコードを提示
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Empty state for confirmed tab */}
      {activeTab === "confirmed" && (
        <section className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-8)]">
          <div className="flex flex-col items-center gap-[var(--spacing-panq-3)]">
            <p className="text-[0.875rem] text-panq-on-surface-variant">
              確認待ちの注文はありません
            </p>
            <Link href="/search">
              <Button variant="secondary">福袋を探す</Button>
            </Link>
          </div>
        </section>
      )}

      {/* Order history */}
      <section className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-6)]">
        <h2 className="text-[1.5rem] font-semibold text-panq-on-surface">
          最近の注文履歴
        </h2>

        <div className="mt-[var(--spacing-panq-4)] flex flex-col gap-[var(--spacing-panq-3)]">
          {mockOrderHistory.map((order) => (
            <div
              key={order.id}
              className="flex items-center gap-3 rounded-[2rem] bg-panq-surface-container-lowest p-[var(--spacing-panq-3)] shadow-[var(--shadow-ambient)]"
            >
              {/* Thumbnail */}
              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-[0.5rem]">
                <img
                  src={order.imageUrl}
                  alt={order.storeName}
                  width={48}
                  height={48}
                  style={{ objectFit: "cover", width: 48, height: 48, borderRadius: 8 }}
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-[0.875rem] font-semibold text-panq-on-surface truncate">
                  {order.storeName}
                </p>
                <p className="text-[0.75rem] text-panq-on-surface-variant">
                  {order.date}
                </p>
              </div>

              {/* Price */}
              <span className="text-[0.875rem] font-semibold text-panq-primary shrink-0">
                ¥{order.price}
              </span>
            </div>
          ))}
        </div>
      </section>

      <BottomNav />
    </div>
  );
}
