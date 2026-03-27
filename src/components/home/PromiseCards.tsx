import Link from "next/link";
import { ShieldCheck, Heart, CreditCard, ChevronRight } from "lucide-react";

const promises = [
  {
    icon: ShieldCheck,
    title: "厳選パン屋のみ",
    description: "食品営業許可証を確認し、審査をクリアした店舗だけが参加しています。",
  },
  {
    icon: Heart,
    title: "1袋3.9円をこどもホスピスへ",
    description: "あなたの福袋が、こどもたちの笑顔につながります。",
  },
  {
    icon: CreditCard,
    title: "安心のStripe決済",
    description: "クレジットカード情報はStripeが安全に管理。PanQ!には保存されません。",
  },
];

export default function PromiseCards() {
  return (
    <section className="mt-[var(--spacing-panq-7)] px-[var(--spacing-panq-4)]">
      <h2 className="font-serif text-[1.25rem] font-bold text-panq-on-surface">
        PanQ!の約束
      </h2>

      <div className="mt-[var(--spacing-panq-4)] flex flex-col gap-[var(--spacing-panq-3)]">
        {promises.map((promise) => {
          const Icon = promise.icon;
          return (
            <div
              key={promise.title}
              className="
                flex items-start gap-[var(--spacing-panq-4)]
                p-[var(--spacing-panq-4)] rounded-[var(--radius-xl)]
                bg-panq-surface-container-low
              "
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panq-surface-container-high">
                <Icon size={20} className="text-panq-primary" />
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="text-[0.9375rem] font-semibold text-panq-on-surface">
                  {promise.title}
                </h3>
                <p className="text-[0.75rem] leading-relaxed text-panq-on-surface-variant">
                  {promise.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <Link
        href="/about"
        className="mt-[var(--spacing-panq-3)] flex items-center justify-end gap-0.5 text-[0.8125rem] font-semibold text-panq-primary"
      >
        私たちの物語を読む
        <ChevronRight size={16} />
      </Link>
    </section>
  );
}
