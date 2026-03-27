"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { getBagById } from "@/lib/mock-data";
import OrderSummary from "@/components/purchase/OrderSummary";
import PickupInfo from "@/components/purchase/PickupInfo";
import PaymentMethodSelect from "@/components/purchase/PaymentMethodSelect";
import DonationBanner from "@/components/purchase/DonationBanner";

function getProductName(price: 390 | 990) {
  return price === 990 ? "PanQ! プレミアム" : "PanQ! 福袋";
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const bagId = searchParams.get("bagId") || "1";
  const bag = getBagById(bagId);

  if (!bag) {
    return (
      <div className="flex items-center justify-center min-h-dvh bg-panq-surface">
        <p className="text-panq-on-surface-variant">商品が見つかりません</p>
      </div>
    );
  }

  const productName = getProductName(bag.price);
  const donation = 3.9;

  return (
    <div className="min-h-dvh bg-panq-surface pb-[var(--spacing-panq-8)]">
      {/* ====== B-1: Header ====== */}
      <header className="sticky top-0 z-40 glass-panel flex items-center gap-3 px-[var(--spacing-panq-4)] py-3">
        <Link
          href={`/bags/${bag.id}`}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-panq-surface-container-high"
        >
          <ArrowLeft size={20} className="text-panq-on-surface" />
        </Link>
        <h1 className="font-serif text-[1.125rem] font-bold text-panq-on-surface">
          注文内容
        </h1>
      </header>

      <div className="px-[var(--spacing-panq-4)] mt-[var(--spacing-panq-4)]">
        {/* ====== B-2: Order Summary ====== */}
        <OrderSummary
          title={productName}
          storeName={bag.storeName}
          price={bag.price}
          imageUrl={bag.imageUrl}
        />

        {/* ====== B-3: Pickup Info ====== */}
        <section className="mt-[var(--spacing-panq-5)] rounded-[var(--radius-xl)] bg-panq-surface-container-low p-[var(--spacing-panq-4)]">
          <h2 className="font-serif text-[1rem] font-bold text-panq-on-surface mb-[var(--spacing-panq-3)]">
            受取情報
          </h2>
          <PickupInfo
            storeName={bag.storeName}
            address={bag.storeAddress}
            pickupTime={bag.pickupTime}
          />
        </section>

        {/* ====== B-4: Payment Method ====== */}
        <section className="mt-[var(--spacing-panq-5)]">
          <h2 className="font-serif text-[1rem] font-bold text-panq-on-surface mb-[var(--spacing-panq-3)]">
            支払い方法
          </h2>
          <PaymentMethodSelect />
        </section>

        {/* ====== B-5: Donation Banner ====== */}
        <section className="mt-[var(--spacing-panq-5)]">
          <DonationBanner amount={donation} />
        </section>

        {/* ====== B-6: Total + Confirm ====== */}
        <section className="mt-[var(--spacing-panq-5)] rounded-[var(--radius-xl)] bg-panq-surface-container-low p-[var(--spacing-panq-4)]">
          <div className="flex flex-col gap-[var(--spacing-panq-2)]">
            <div className="flex justify-between">
              <span className="text-[0.875rem] text-panq-on-surface-variant">小計</span>
              <span className="text-[0.875rem] font-semibold text-panq-on-surface">¥{bag.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[0.875rem] text-panq-on-surface-variant">こどもホスピス支援</span>
              <span className="text-[0.875rem] font-semibold text-panq-primary">¥{donation}（含む）</span>
            </div>
            <div
              className="flex justify-between items-center pt-[var(--spacing-panq-3)] mt-[var(--spacing-panq-2)]"
              style={{ borderTop: "2px dashed var(--color-outline-variant)" }}
            >
              <span className="text-[1rem] font-bold text-panq-on-surface">合計</span>
              <span className="text-[1.375rem] font-bold text-panq-primary">¥{bag.price}</span>
            </div>
          </div>
        </section>

        {/* Confirm CTA */}
        <section className="mt-[var(--spacing-panq-5)]">
          <Link
            href={`/order-complete?bagId=${bag.id}`}
            className="
              flex items-center justify-center
              w-full py-4 rounded-full
              artisan-gradient premium-glow
              text-white font-bold text-[1rem]
              transition-transform duration-150 active:scale-[0.98]
            "
          >
            確定する
          </Link>
          <p className="mt-[var(--spacing-panq-2)] text-center text-[0.6875rem] text-panq-on-surface-variant">
            購入することで利用規約に同意したことになります
          </p>
        </section>
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
