"use client";

import { ArrowLeft, CreditCard, Smartphone, ChevronRight, Heart } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Button from "@/components/Button";
import PriceBadge from "@/components/PriceBadge";
import { getBagById } from "@/lib/mock-data";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const bagId = searchParams.get("bagId") || "1";
  const bag = getBagById(bagId);

  if (!bag) {
    return (
      <div className="flex items-center justify-center min-h-dvh">
        <p className="text-panq-on-surface-variant">商品が見つかりません</p>
      </div>
    );
  }

  const donation = 3.9;
  const total = bag.price;

  return (
    <div className="min-h-dvh bg-panq-surface pb-[var(--spacing-panq-8)]">
      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center gap-3 px-[var(--spacing-panq-3)] py-3 bg-panq-surface">
        <Link
          href={`/bags/${bag.id}`}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-panq-surface-container-low"
        >
          <ArrowLeft size={20} className="text-panq-on-surface" />
        </Link>
        <h1 className="text-[1.125rem] font-bold text-panq-on-surface">
          ご注文の確認
        </h1>
      </header>

      <div className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-3)]">
        {/* Order summary card */}
        <div className="rounded-[2rem] bg-panq-surface-container-lowest p-[var(--spacing-panq-4)] shadow-[var(--shadow-ambient)]">
          <h2 className="text-[0.75rem] font-semibold uppercase tracking-wider text-panq-on-surface-variant">
            注文内容
          </h2>
          <div className="mt-[var(--spacing-panq-3)] flex items-center gap-3">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-[1rem]">
              <img
                src={bag.imageUrl}
                alt={bag.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[0.875rem] font-bold text-panq-on-surface">
                {bag.title}
              </p>
              <p className="text-[0.75rem] text-panq-on-surface-variant mt-0.5">
                {bag.storeName}
              </p>
              <p className="text-[0.6875rem] text-panq-on-surface-variant mt-0.5">
                受取: {bag.pickupTime}
              </p>
            </div>
            <PriceBadge price={bag.price} />
          </div>
        </div>

        {/* Donation section */}
        <div className="mt-[var(--spacing-panq-4)] rounded-[2rem] bg-panq-secondary-container p-[var(--spacing-panq-4)]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panq-surface-container-lowest">
              <Heart size={18} className="text-panq-secondary fill-panq-secondary" />
            </div>
            <div className="flex-1">
              <p className="text-[0.8125rem] font-bold text-panq-on-secondary-container">
                うち3.9円がこどもホスピスへの支援に繋がります
              </p>
            </div>
          </div>
        </div>

        {/* Price breakdown */}
        <div className="mt-[var(--spacing-panq-5)] rounded-[2rem] bg-panq-surface-container-low p-[var(--spacing-panq-4)]">
          <h2 className="text-[0.75rem] font-semibold uppercase tracking-wider text-panq-on-surface-variant">
            お支払い内訳
          </h2>
          <div className="mt-[var(--spacing-panq-3)] flex flex-col gap-[var(--spacing-panq-2)]">
            <div className="flex justify-between">
              <span className="text-[0.875rem] text-panq-on-surface-variant">
                福袋
              </span>
              <span className="text-[0.875rem] font-semibold text-panq-on-surface">
                ¥{bag.price}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[0.875rem] text-panq-on-surface-variant">
                こどもホスピス支援
              </span>
              <span className="text-[0.875rem] font-semibold text-panq-secondary">
                ¥{donation}
              </span>
            </div>
            <div className="flex justify-between items-center pt-[var(--spacing-panq-2)]"
              style={{ borderTop: "2px dashed var(--color-outline-variant)" }}
            >
              <span className="text-[1rem] font-bold text-panq-on-surface">
                合計
              </span>
              <span className="text-[1.25rem] font-bold text-panq-primary">
                ¥{total}
              </span>
            </div>
          </div>
          <p className="mt-[var(--spacing-panq-2)] text-[0.6875rem] text-panq-on-surface-variant">
            ※ 寄付は購入代金に含まれます（追加負担なし）
          </p>
        </div>

        {/* Payment methods */}
        <div className="mt-[var(--spacing-panq-5)]">
          <h2 className="text-[0.75rem] font-semibold uppercase tracking-wider text-panq-on-surface-variant px-1">
            お支払い方法
          </h2>
          <div className="mt-[var(--spacing-panq-3)] flex flex-col gap-[var(--spacing-panq-2)]">
            {/* Credit card - selected */}
            <div className="flex items-center gap-3 rounded-[2rem] bg-panq-surface-container-lowest p-[var(--spacing-panq-4)] shadow-[var(--shadow-ambient)] ring-2 ring-panq-primary">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panq-primary-container">
                <CreditCard size={18} className="text-panq-on-primary-container" />
              </div>
              <div className="flex-1">
                <p className="text-[0.875rem] font-semibold text-panq-on-surface">
                  クレジットカード
                </p>
                <p className="text-[0.6875rem] text-panq-on-surface-variant">
                  **** 4242
                </p>
              </div>
              <div className="h-5 w-5 rounded-full bg-panq-primary flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-panq-on-primary" />
              </div>
            </div>

            {/* PayPay */}
            <div className="flex items-center gap-3 rounded-[2rem] bg-panq-surface-container-low p-[var(--spacing-panq-4)]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panq-surface-container">
                <Smartphone size={18} className="text-panq-on-surface-variant" />
              </div>
              <div className="flex-1">
                <p className="text-[0.875rem] font-semibold text-panq-on-surface">
                  PayPay
                </p>
                <p className="text-[0.6875rem] text-panq-on-surface-variant">
                  残高: ¥3,200
                </p>
              </div>
              <div className="h-5 w-5 rounded-full bg-panq-surface-container-highest" />
            </div>

            {/* Other */}
            <button className="flex items-center gap-3 rounded-[2rem] bg-panq-surface-container-low p-[var(--spacing-panq-4)] cursor-pointer w-full">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panq-surface-container">
                <CreditCard size={18} className="text-panq-on-surface-variant" />
              </div>
              <p className="flex-1 text-left text-[0.875rem] font-semibold text-panq-on-surface">
                他の支払い方法を追加
              </p>
              <ChevronRight size={18} className="text-panq-on-surface-variant" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-[var(--spacing-panq-6)]">
          <Link href={`/pickup/order-${bag.id}`}>
            <Button variant="primary" fullWidth>
              ¥{total} で購入する
            </Button>
          </Link>
          <p className="mt-[var(--spacing-panq-2)] text-center text-[0.6875rem] text-panq-on-surface-variant">
            購入することで利用規約に同意したことになります
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-dvh bg-panq-surface">
          <p className="text-panq-on-surface-variant">読み込み中...</p>
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
