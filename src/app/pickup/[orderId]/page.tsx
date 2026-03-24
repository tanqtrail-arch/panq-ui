import { ArrowLeft, CheckCircle2, MapPin, Clock, ShoppingBag, Check } from "lucide-react";
import Link from "next/link";
import PickupCode from "@/components/PickupCode";

const orderCodes: Record<string, string> = {
  "order-1": "PQ-1234",
  "order-2": "PQ-5678",
  "order-3": "PQ-9012",
  "order-4": "PQ-3456",
  "order-5": "PQ-7890",
  "order-6": "PQ-3939",
};

export function generateStaticParams() {
  return Object.keys(orderCodes).map((orderId) => ({ orderId }));
}

export default async function PickupPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;
  const code = orderCodes[orderId] || "PQ-1234";

  return (
    <div className="min-h-dvh bg-panq-inverse-surface pb-[var(--spacing-panq-8)]">
      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center gap-3 px-[var(--spacing-panq-3)] py-3 bg-panq-inverse-surface">
        <Link
          href="/"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-panq-inverse-on-surface/10"
        >
          <ArrowLeft size={20} className="text-panq-inverse-on-surface" />
        </Link>
        <h1 className="text-[1.125rem] font-bold text-panq-inverse-on-surface">
          受取確認
        </h1>
      </header>

      <div className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-3)]">
        {/* Success banner */}
        <div className="flex flex-col items-center gap-[var(--spacing-panq-3)] pt-[var(--spacing-panq-4)] pb-[var(--spacing-panq-5)]">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-panq-secondary-container">
            <CheckCircle2 size={32} className="text-panq-secondary" />
          </div>
          <div className="text-center">
            <h2 className="text-[1.25rem] font-bold text-panq-inverse-on-surface">
              注文が完了しました
            </h2>
            <p className="mt-1 text-[0.8125rem] text-panq-inverse-on-surface/60">
              下のコードをお店で見せてください
            </p>
          </div>
        </div>

        {/* Pickup code — large display (white card on dark bg) */}
        <div className="mt-[var(--spacing-panq-2)]">
          <PickupCode
            code={code}
            deadline="本日 18:00 まで"
            location="ベーカリー・パンキュー 渋谷店"
          />
        </div>

        {/* Order details (white card) */}
        <div className="mt-[var(--spacing-panq-5)] rounded-[2rem] bg-panq-surface-container-lowest p-[var(--spacing-panq-4)]">
          <h2 className="text-[0.75rem] font-semibold uppercase tracking-wider text-panq-on-surface-variant">
            注文詳細
          </h2>
          <div className="mt-[var(--spacing-panq-3)] flex flex-col gap-[var(--spacing-panq-3)]">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panq-surface-container">
                <ShoppingBag size={16} className="text-panq-primary" />
              </div>
              <div>
                <p className="text-[0.8125rem] font-semibold text-panq-on-surface">
                  おまかせパン福袋
                </p>
                <p className="text-[0.6875rem] text-panq-on-surface-variant">
                  ¥390（うち¥3.9 こどもホスピス支援）
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panq-surface-container">
                <MapPin size={16} className="text-panq-primary" />
              </div>
              <div>
                <p className="text-[0.8125rem] font-semibold text-panq-on-surface">
                  ベーカリー・パンキュー
                </p>
                <p className="text-[0.6875rem] text-panq-on-surface-variant">
                  渋谷区神南1-2-3
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panq-surface-container">
                <Clock size={16} className="text-panq-primary" />
              </div>
              <div>
                <p className="text-[0.8125rem] font-semibold text-panq-on-surface">
                  受取時間
                </p>
                <p className="text-[0.6875rem] text-panq-on-surface-variant">
                  14:00〜18:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Helpful tips (white card) */}
        <div className="mt-[var(--spacing-panq-4)] rounded-[2rem] bg-panq-surface-container-lowest p-[var(--spacing-panq-4)]">
          <h2 className="text-[0.875rem] font-bold text-panq-on-surface">
            受取のヒント
          </h2>
          <ul className="mt-[var(--spacing-panq-2)] flex flex-col gap-[var(--spacing-panq-2)]">
            <li className="text-[0.75rem] text-panq-on-surface-variant leading-relaxed">
              ・ コードをスタッフに見せるだけで受取できます
            </li>
            <li className="text-[0.75rem] text-panq-on-surface-variant leading-relaxed">
              ・ エコバッグをご持参ください
            </li>
            <li className="text-[0.75rem] text-panq-on-surface-variant leading-relaxed">
              ・ 受取期限を過ぎるとキャンセルになります
            </li>
          </ul>
        </div>

        {/* CTAs */}
        <div className="mt-[var(--spacing-panq-6)] flex flex-col gap-[var(--spacing-panq-2)]">
          <Link
            href="/"
            className="
              inline-flex items-center justify-center gap-2
              w-full rounded-full px-6 py-3
              font-semibold text-[0.875rem]
              bg-panq-secondary-container text-panq-on-secondary-container
              active:scale-[0.98] transition-transform duration-150
            "
          >
            <Check size={18} />
            受け取り完了
          </Link>
          <Link
            href="/"
            className="
              inline-flex items-center justify-center
              w-full rounded-full px-6 py-3
              font-semibold text-[0.875rem]
              bg-panq-inverse-primary text-panq-on-primary-container
              active:scale-[0.98] transition-transform duration-150
            "
          >
            ホームに戻る
          </Link>
          <Link
            href="/search"
            className="
              inline-flex items-center justify-center
              w-full rounded-full px-6 py-3
              font-semibold text-[0.875rem]
              bg-transparent text-panq-inverse-on-surface
              border border-panq-inverse-on-surface/20
              active:scale-[0.98] transition-transform duration-150
            "
          >
            他の福袋を探す
          </Link>
        </div>
      </div>
    </div>
  );
}
