"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Heart } from "lucide-react";
import { getBagById } from "@/lib/mock-data";

function getProductName(price: 390 | 990) {
  return price === 990 ? "PanQ! プレミアム" : "PanQ! 福袋";
}

function OrderCompleteContent() {
  const searchParams = useSearchParams();
  const bagId = searchParams.get("bagId") || "1";
  const bag = getBagById(bagId);

  if (!bag) {
    return (
      <div className="flex items-center justify-center min-h-dvh bg-panq-surface">
        <p className="text-panq-on-surface-variant">注文情報が見つかりません</p>
      </div>
    );
  }

  const productName = getProductName(bag.price);
  const orderId = `PQ-${String(Math.floor(10000 + Math.random() * 90000))}`;

  return (
    <div className="min-h-dvh bg-panq-surface flex flex-col items-center px-[var(--spacing-panq-4)] pt-[var(--spacing-panq-8)] pb-[var(--spacing-panq-8)]">
      {/* ====== C-1: Success animation ====== */}
      <div className="relative flex items-center justify-center">
        {/* Organic shape background */}
        <div className="absolute h-28 w-28 organic-shape bg-panq-primary-fixed animate-pulse-slow" />
        {/* Check circle */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full artisan-gradient premium-glow animate-check-pop">
          <svg
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
              className="animate-check-draw"
            />
          </svg>
        </div>
      </div>

      {/* ====== C-2: Message ====== */}
      <h1 className="mt-[var(--spacing-panq-6)] font-serif text-[1.5rem] font-bold text-panq-on-surface text-center">
        ありがとうございます！
      </h1>
      <p className="mt-1 text-[0.875rem] text-panq-on-surface-variant text-center">
        ご注文が確定しました
      </p>

      {/* ====== C-3: Order details card ====== */}
      <div className="mt-[var(--spacing-panq-6)] w-full rounded-[var(--radius-xl)] bg-panq-surface-container-lowest p-[var(--spacing-panq-5)] shadow-[var(--shadow-ambient)]">
        <div className="flex flex-col gap-[var(--spacing-panq-3)]">
          <div className="flex justify-between">
            <span className="text-[0.75rem] text-panq-on-surface-variant">注文番号</span>
            <span className="text-[0.875rem] font-bold text-panq-on-surface">{orderId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[0.75rem] text-panq-on-surface-variant">商品</span>
            <span className="text-[0.875rem] font-semibold text-panq-on-surface">{productName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[0.75rem] text-panq-on-surface-variant">店舗</span>
            <span className="text-[0.875rem] text-panq-on-surface">{bag.storeName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[0.75rem] text-panq-on-surface-variant">受取時間</span>
            <span className="text-[0.875rem] text-panq-on-surface">{bag.pickupTime}</span>
          </div>
          <div
            className="flex justify-between items-center pt-[var(--spacing-panq-3)]"
            style={{ borderTop: "2px dashed var(--color-outline-variant)" }}
          >
            <span className="text-[0.875rem] font-bold text-panq-on-surface">お支払い</span>
            <span className="text-[1.25rem] font-bold text-panq-primary">¥{bag.price}</span>
          </div>
        </div>
      </div>

      {/* ====== C-4: Donation thank you ====== */}
      <div
        className="
          mt-[var(--spacing-panq-4)] w-full
          relative overflow-hidden
          rounded-[var(--radius-xl)] p-[var(--spacing-panq-4)]
          bg-panq-primary-fixed premium-glow
          text-center
        "
      >
        <div className="absolute -left-6 -top-6 h-24 w-24 organic-shape bg-panq-primary-fixed-dim/20" />
        <div className="absolute -right-4 -bottom-4 h-16 w-16 organic-shape bg-panq-primary-fixed-dim/15" />
        <div className="relative">
          <Heart size={24} className="mx-auto fill-panq-primary text-panq-primary" />
          <p className="mt-2 font-serif text-[0.9375rem] font-bold text-panq-on-primary-fixed">
            あなたの¥3.9がこどもホスピスに届きました
          </p>
          <p className="mt-1 text-[0.75rem] text-panq-on-primary-fixed-variant">
            累計寄付額: ¥15,213.9
          </p>
        </div>
      </div>

      {/* ====== C-5: Actions ====== */}
      <div className="mt-[var(--spacing-panq-6)] w-full flex flex-col gap-[var(--spacing-panq-3)]">
        <Link
          href="/orders"
          className="
            flex items-center justify-center
            w-full py-3.5 rounded-full
            border border-panq-outline-variant/30
            text-[0.875rem] font-semibold text-panq-primary
            transition-transform duration-150 active:scale-[0.98]
          "
        >
          注文履歴を見る
        </Link>
        <Link
          href="/"
          className="
            flex items-center justify-center
            w-full py-3 rounded-full
            text-[0.875rem] font-semibold text-panq-on-surface-variant
            transition-transform duration-150 active:scale-[0.98]
          "
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}

export default function OrderCompletePage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-dvh bg-panq-surface">
          <p className="text-panq-on-surface-variant">読み込み中...</p>
        </div>
      }
    >
      <OrderCompleteContent />
    </Suspense>
  );
}
