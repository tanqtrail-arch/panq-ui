"use client";

import { ArrowLeft, Copy, UserPlus, Share2, ShoppingBag, Gift } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const steps = [
  {
    number: 1,
    icon: Copy,
    text: "マイページから自分の紹介コード（PANQ-U0001 形式）をコピー",
  },
  {
    number: 2,
    icon: Share2,
    text: "LINEやSNSでおともだちにシェア",
  },
  {
    number: 3,
    icon: ShoppingBag,
    text: "おともだちがPanQに登録して、初回の福袋を購入",
  },
  {
    number: 4,
    icon: Gift,
    text: "両方に 39pt が付与されます！",
  },
];

const rules = [
  "ポイントは紹介された方の初回購入完了後に付与されます",
  "紹介人数に上限はありません",
  "紹介コードはマイページからいつでも確認できます",
];

export default function ReferralPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("PANQ-U0001");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <div className="min-h-dvh bg-panq-surface pb-[var(--spacing-panq-8)]">
      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center gap-3 px-[var(--spacing-panq-3)] py-3 bg-panq-surface">
        <Link
          href="/more"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-panq-surface-container-low"
        >
          <ArrowLeft size={20} className="text-panq-on-surface" />
        </Link>
        <h1 className="text-[1.125rem] font-bold text-panq-on-surface">
          おともだち紹介
        </h1>
      </header>

      <div className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-3)]">
        {/* Hero */}
        <div className="rounded-[2rem] bg-panq-primary-container p-[var(--spacing-panq-5)] text-center">
          <div className="flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-panq-surface-container-lowest">
              <UserPlus size={28} className="text-panq-primary" />
            </div>
          </div>
          <h2 className="mt-[var(--spacing-panq-3)] text-[1.125rem] font-bold text-panq-on-primary-container">
            おともだちを紹介して、
            <br />
            一緒にポイントをもらおう！
          </h2>
          <p className="mt-[var(--spacing-panq-2)] text-[0.875rem] text-panq-on-primary-container">
            紹介した方も、紹介された方も <span className="font-bold">39pt</span> プレゼント！
          </p>
        </div>

        {/* Steps */}
        <div className="mt-[var(--spacing-panq-5)]">
          <h2 className="text-[1rem] font-bold text-panq-on-surface px-1">
            紹介のしかた
          </h2>
          <div className="mt-[var(--spacing-panq-3)] flex flex-col gap-[var(--spacing-panq-2)]">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex items-center gap-3 rounded-[2rem] bg-panq-surface-container-lowest p-[var(--spacing-panq-4)] shadow-[var(--shadow-ambient)]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panq-primary-container">
                    <span className="text-[0.8125rem] font-bold text-panq-on-primary-container">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <Icon size={16} className="text-panq-primary shrink-0" />
                    <p className="text-[0.875rem] text-panq-on-surface leading-snug">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Referral code */}
        <div className="mt-[var(--spacing-panq-5)] rounded-[2rem] bg-panq-surface-container-lowest p-[var(--spacing-panq-5)] shadow-[var(--shadow-ambient)] text-center">
          <p className="text-[0.75rem] font-semibold uppercase tracking-wider text-panq-on-surface-variant">
            あなたの紹介コード
          </p>
          <p className="mt-[var(--spacing-panq-2)] text-[1.5rem] font-bold tracking-widest text-panq-on-surface">
            PANQ-U0001
          </p>
          <button
            onClick={handleCopy}
            className="
              mt-[var(--spacing-panq-3)]
              inline-flex items-center justify-center gap-2
              rounded-full px-6 py-2.5
              font-semibold text-[0.875rem]
              bg-panq-primary text-panq-on-primary
              active:scale-[0.98] transition-transform duration-150
              cursor-pointer
            "
          >
            <Copy size={16} />
            {copied ? "コピーしました！" : "コピーする"}
          </button>
        </div>

        {/* Rules */}
        <div className="mt-[var(--spacing-panq-5)] rounded-[2rem] bg-panq-surface-container-low p-[var(--spacing-panq-4)]">
          <h2 className="text-[1rem] font-bold text-panq-on-surface">
            ルール
          </h2>
          <ul className="mt-[var(--spacing-panq-2)] flex flex-col gap-[var(--spacing-panq-2)]">
            {rules.map((rule) => (
              <li
                key={rule}
                className="text-[0.8125rem] text-panq-on-surface-variant leading-relaxed"
              >
                ・ {rule}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}