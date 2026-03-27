import Link from "next/link";
import { Smartphone, CreditCard, Heart } from "lucide-react";

const benefits = [
  { icon: Smartphone, title: "LINEで簡単出品", desc: "スマホから30秒で今日の福袋を出品できます" },
  { icon: CreditCard, title: "Stripeで安心決済", desc: "売上はStripe Connect経由で安全にお振込み" },
  { icon: Heart, title: "1袋3.9円がこどもホスピスへ", desc: "お店の福袋が社会貢献にもつながります" },
];

export default function OwnerLandingPage() {
  return (
    <div className="min-h-dvh bg-panq-surface flex flex-col items-center px-[var(--spacing-panq-4)] pt-[var(--spacing-panq-8)] pb-[var(--spacing-panq-8)]">
      {/* Logo */}
      <span className="font-serif text-[1.25rem] font-bold text-panq-on-surface">
        PanQ! <span className="text-[0.75rem] font-normal text-panq-on-surface-variant">for Owners</span>
      </span>

      {/* Hero text */}
      <h1 className="mt-[var(--spacing-panq-6)] font-serif text-[1.5rem] font-bold text-panq-on-surface text-center leading-tight">
        PanQ!でお店の福袋を
        <br />
        届けませんか？
      </h1>
      <p className="mt-[var(--spacing-panq-3)] text-[0.875rem] text-panq-on-surface-variant text-center leading-relaxed max-w-[300px]">
        街のパン屋さんとお客さまをつなぐ、ありがとうのプラットフォーム。
      </p>

      {/* Benefits */}
      <div className="mt-[var(--spacing-panq-7)] w-full flex flex-col gap-[var(--spacing-panq-4)]">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.title}
              className="flex items-start gap-[var(--spacing-panq-4)] p-[var(--spacing-panq-4)] rounded-[var(--radius-xl)] bg-panq-surface-container-lowest shadow-[var(--shadow-ambient)]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panq-primary-fixed">
                <Icon size={20} className="text-panq-primary" />
              </div>
              <div>
                <h3 className="text-[0.9375rem] font-semibold text-panq-on-surface">{b.title}</h3>
                <p className="mt-0.5 text-[0.75rem] text-panq-on-surface-variant">{b.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-[var(--spacing-panq-7)] w-full flex flex-col gap-[var(--spacing-panq-3)]">
        <Link
          href="/owner/register"
          className="flex items-center justify-center w-full py-4 rounded-full artisan-gradient premium-glow text-white font-semibold text-[0.9375rem] transition-transform duration-150 active:scale-[0.98]"
        >
          店舗を登録する
        </Link>
        <Link
          href="/owner/listing"
          className="flex items-center justify-center w-full py-3 text-[0.875rem] font-semibold text-panq-primary"
        >
          すでにアカウントをお持ちの方
        </Link>
      </div>
    </div>
  );
}
