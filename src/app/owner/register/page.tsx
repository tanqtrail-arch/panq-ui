"use client";

import { useState } from "react";
import { ArrowLeft, Check, Upload } from "lucide-react";
import Link from "next/link";
import OwnerBottomNav from "@/components/owner/OwnerBottomNav";

const weekdays = ["月", "火", "水", "木", "金", "土", "日"];
const steps = ["基本情報", "書類提出", "審査待ち"];

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {steps.map((label, i) => {
        const step = i + 1;
        const done = step < current;
        const active = step === current;
        return (
          <div key={label} className="flex items-center gap-2">
            {i > 0 && (
              <div className={`h-0.5 w-6 rounded-full ${done ? "artisan-gradient" : "bg-panq-outline-variant/20"}`} />
            )}
            <div className="flex flex-col items-center gap-1">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full text-[0.75rem] font-bold ${done ? "artisan-gradient text-white" : active ? "artisan-gradient text-white" : "bg-panq-surface-container-high text-panq-on-surface-variant"}`}>
                {done ? <Check size={16} /> : step}
              </div>
              <span className={`text-[0.625rem] ${active ? "font-semibold text-panq-primary" : "text-panq-on-surface-variant"}`}>
                {label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FormField({ label, required, hint, type = "text", placeholder }: { label: string; required?: boolean; hint?: string; type?: string; placeholder?: string }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[0.8125rem] font-semibold text-panq-on-surface">
        {label}{required && <span className="text-panq-error ml-0.5">*</span>}
      </label>
      {hint && <p className="text-[0.625rem] text-panq-on-surface-variant">{hint}</p>}
      <input
        type={type}
        placeholder={placeholder}
        className="h-11 rounded-full bg-panq-surface-container-low px-4 text-[0.875rem] text-panq-on-surface placeholder:text-panq-on-surface-variant/50 outline-none"
      />
    </div>
  );
}

export default function OwnerRegisterPage() {
  const [step, setStep] = useState(1);
  const [closedDays, setClosedDays] = useState<string[]>(["水"]);
  const [plans, setPlans] = useState({ s390: true, s990: true });

  // Step 3: Complete
  if (step === 3) {
    return (
      <div className="min-h-dvh bg-panq-surface flex flex-col items-center justify-center px-[var(--spacing-panq-4)]">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-28 w-28 organic-shape bg-panq-primary-fixed animate-pulse-slow" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full artisan-gradient premium-glow animate-check-pop">
            <Check size={36} className="text-white" />
          </div>
        </div>
        <h1 className="mt-[var(--spacing-panq-6)] font-serif text-[1.5rem] font-bold text-panq-on-surface text-center">
          申請を受け付けました
        </h1>
        <p className="mt-2 text-[0.875rem] text-panq-on-surface-variant text-center">
          審査には1〜3営業日かかります
        </p>
        <p className="mt-1 text-[0.8125rem] text-panq-on-surface-variant text-center">
          審査完了後、LINEでお知らせします
        </p>
        <Link
          href="/"
          className="mt-[var(--spacing-panq-6)] w-full flex items-center justify-center py-3.5 rounded-full border border-panq-outline-variant/30 text-[0.875rem] font-semibold text-panq-primary"
        >
          ホームに戻る
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-panq-surface pb-[calc(var(--spacing-panq-8)+4rem)]">
      {/* Header */}
      <header className="sticky top-0 z-40 glass-panel flex items-center gap-3 px-[var(--spacing-panq-4)] py-3">
        <button
          onClick={() => (step > 1 ? setStep(step - 1) : undefined)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-panq-surface-container-high cursor-pointer"
        >
          <ArrowLeft size={20} className="text-panq-on-surface" />
        </button>
        <h1 className="font-serif text-[1.125rem] font-bold text-panq-on-surface">
          店舗登録
        </h1>
      </header>

      <div className="px-[var(--spacing-panq-4)] mt-[var(--spacing-panq-4)]">
        <StepIndicator current={step} />

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="mt-[var(--spacing-panq-5)] flex flex-col gap-[var(--spacing-panq-4)]">
            <FormField label="店舗名" required placeholder="例: ベーカリー・パンキュー" />
            <FormField label="店舗名（カナ）" placeholder="例: ベーカリー・パンキュー" />
            <div className="flex flex-col gap-1">
              <label className="text-[0.8125rem] font-semibold text-panq-on-surface">エリア</label>
              <select className="h-11 rounded-full bg-panq-surface-container-low px-4 text-[0.875rem] text-panq-on-surface outline-none appearance-none">
                {["自由が丘", "武蔵小杉", "学芸大学", "三軒茶屋", "松陰神社前", "代々木上原", "仙川"].map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </div>
            <FormField label="住所" required placeholder="東京都世田谷区..." />
            <FormField label="電話番号" required type="tel" placeholder="03-1234-5678" />
            <div className="flex gap-[var(--spacing-panq-3)]">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-[0.8125rem] font-semibold text-panq-on-surface">開店</label>
                <input type="time" defaultValue="07:00" className="h-11 rounded-full bg-panq-surface-container-low px-4 text-[0.875rem] text-panq-on-surface outline-none" />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-[0.8125rem] font-semibold text-panq-on-surface">閉店</label>
                <input type="time" defaultValue="19:00" className="h-11 rounded-full bg-panq-surface-container-low px-4 text-[0.875rem] text-panq-on-surface outline-none" />
              </div>
            </div>

            {/* Closed days */}
            <div>
              <label className="text-[0.8125rem] font-semibold text-panq-on-surface">定休日</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {weekdays.map((d) => (
                  <button
                    key={d}
                    onClick={() => setClosedDays((p) => p.includes(d) ? p.filter((x) => x !== d) : [...p, d])}
                    className={`h-9 w-9 rounded-full text-[0.75rem] font-semibold cursor-pointer transition-colors ${closedDays.includes(d) ? "artisan-gradient text-white" : "bg-panq-surface-container-high text-panq-on-surface-variant"}`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Plans */}
            <div>
              <label className="text-[0.8125rem] font-semibold text-panq-on-surface">取扱プラン</label>
              <div className="flex gap-3 mt-2">
                {[{ key: "s390", label: "¥390 福袋" }, { key: "s990", label: "¥990 プレミアム" }].map((p) => (
                  <button
                    key={p.key}
                    onClick={() => setPlans((prev) => ({ ...prev, [p.key]: !prev[p.key as keyof typeof prev] }))}
                    className={`flex-1 py-2.5 rounded-full text-[0.8125rem] font-semibold cursor-pointer transition-all ${plans[p.key as keyof typeof plans] ? "artisan-gradient text-white" : "bg-panq-surface-container-low text-panq-on-surface-variant"}`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Store description */}
            <div className="flex flex-col gap-1">
              <label className="text-[0.8125rem] font-semibold text-panq-on-surface">店舗紹介文</label>
              <textarea
                placeholder="お店のこだわりやパンへの想いを書いてください"
                rows={3}
                className="rounded-[var(--radius-xl)] bg-panq-surface-container-low p-4 text-[0.875rem] text-panq-on-surface placeholder:text-panq-on-surface-variant/50 outline-none resize-none"
              />
            </div>

            <button
              onClick={() => setStep(2)}
              className="mt-[var(--spacing-panq-3)] w-full py-4 rounded-full artisan-gradient text-white font-semibold text-[0.9375rem] cursor-pointer transition-transform active:scale-[0.98]"
            >
              次へ
            </button>
          </div>
        )}

        {/* Step 2: Document Upload */}
        {step === 2 && (
          <div className="mt-[var(--spacing-panq-5)] flex flex-col gap-[var(--spacing-panq-5)]">
            <div className="rounded-[var(--radius-xl)] bg-panq-surface-container-low p-[var(--spacing-panq-5)]">
              <h2 className="font-serif text-[1rem] font-bold text-panq-on-surface">
                食品営業許可証
              </h2>
              <p className="mt-1 text-[0.75rem] text-panq-on-surface-variant leading-relaxed">
                審査のため、食品営業許可証の画像をアップロードしてください。
              </p>

              {/* Upload area */}
              <div className="mt-[var(--spacing-panq-4)] flex flex-col items-center justify-center gap-3 h-[160px] rounded-[var(--radius-xl)] border-2 border-dashed border-panq-outline-variant/30 bg-panq-surface-container-lowest">
                <Upload size={28} className="text-panq-outline-variant" />
                <span className="text-[0.8125rem] font-medium text-panq-on-surface-variant">
                  タップして画像を選択
                </span>
                <span className="text-[0.625rem] text-panq-on-surface-variant">
                  JPG, PNG（10MB以下）
                </span>
              </div>
            </div>

            <div className="rounded-[var(--radius-xl)] bg-panq-primary-fixed/50 p-[var(--spacing-panq-4)]">
              <p className="text-[0.75rem] text-panq-on-primary-fixed leading-relaxed">
                アップロードされた書類はPanQ!の審査チームのみが確認します。審査完了後、安全に保管されます。
              </p>
            </div>

            <button
              onClick={() => setStep(3)}
              className="w-full py-4 rounded-full artisan-gradient premium-glow text-white font-semibold text-[0.9375rem] cursor-pointer transition-transform active:scale-[0.98]"
            >
              申請する
            </button>
          </div>
        )}
      </div>

      <OwnerBottomNav />
    </div>
  );
}
