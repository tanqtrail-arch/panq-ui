"use client";

import { useState } from "react";
import { ArrowLeft, Check, Croissant } from "lucide-react";
import Link from "next/link";
import Button from "@/components/Button";
import FilterChip from "@/components/FilterChip";

const weekdays = ["月", "火", "水", "木", "金", "土", "日"];

function StepIndicator({ current }: { current: number }) {
  const steps = ["基本情報", "営業情報", "確認"];
  return (
    <div className="flex items-center justify-center gap-3">
      {steps.map((label, i) => {
        const step = i + 1;
        const isCompleted = step < current;
        const isCurrent = step === current;
        return (
          <div key={label} className="flex items-center gap-2">
            {i > 0 && (
              <div
                className={`h-0.5 w-6 rounded-full ${
                  isCompleted
                    ? "bg-panq-secondary"
                    : "bg-panq-outline-variant/20"
                }`}
              />
            )}
            <div className="flex flex-col items-center gap-1">
              <div
                className={`
                  flex h-8 w-8 items-center justify-center rounded-full text-[0.75rem] font-bold
                  ${
                    isCompleted
                      ? "bg-panq-secondary text-panq-on-secondary"
                      : isCurrent
                        ? "bg-panq-primary text-panq-on-primary"
                        : "bg-panq-outline-variant/20 text-panq-on-surface-variant"
                  }
                `}
              >
                {isCompleted ? <Check size={16} /> : step}
              </div>
              <span
                className={`text-[0.6875rem] ${
                  isCurrent
                    ? "font-semibold text-panq-primary"
                    : "text-panq-on-surface-variant"
                }`}
              >
                {label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FormField({
  label,
  required,
  hint,
  type = "text",
  placeholder,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-[var(--spacing-panq-1)]">
      <label className="text-[0.875rem] font-semibold text-panq-on-surface">
        {label}
        {required && (
          <span className="text-panq-error ml-1">*</span>
        )}
      </label>
      {hint && (
        <p className="text-[0.6875rem] text-panq-on-surface-variant">{hint}</p>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="
          h-12 rounded-[1rem] px-4
          bg-panq-surface-container-highest
          text-[0.875rem] text-panq-on-surface
          placeholder:text-panq-on-surface-variant/50
          outline-none
          border border-panq-outline-variant/20
          focus:border-panq-primary
          transition-colors duration-150
        "
      />
    </div>
  );
}

function SelectField({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-[var(--spacing-panq-1)]">
      <label className="text-[0.875rem] font-semibold text-panq-on-surface">
        {label}
      </label>
      <select
        className="
          h-12 rounded-[1rem] px-4
          bg-panq-surface-container-highest
          text-[0.875rem] text-panq-on-surface
          outline-none appearance-none
          border border-panq-outline-variant/20
          focus:border-panq-primary
          transition-colors duration-150
        "
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function OwnerRegisterPage() {
  const [step, setStep] = useState(1);
  const [closedDays, setClosedDays] = useState<string[]>(["水"]);
  const [bagType, setBagType] = useState("both");
  const [agreed, setAgreed] = useState(false);
  const [completed, setCompleted] = useState(false);

  if (completed) {
    return (
      <div className="min-h-dvh bg-panq-surface flex flex-col items-center justify-center px-[var(--spacing-panq-3)]">
        <div className="flex flex-col items-center gap-[var(--spacing-panq-4)] text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-panq-secondary-container">
            <Check size={32} className="text-panq-secondary" />
          </div>
          <h1 className="text-[1.75rem] font-bold text-panq-on-surface">
            登録申請を受け付けました
          </h1>
          <p className="text-[0.875rem] text-panq-on-surface-variant">
            審査には通常1〜3営業日かかります
          </p>
          <p className="text-[0.875rem] text-panq-on-surface-variant">
            審査完了後、メールでお知らせします
          </p>
          <div className="mt-[var(--spacing-panq-4)] w-full">
            <Link href="/">
              <Button variant="primary" fullWidth>
                ホームに戻る
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const timeOptions = Array.from({ length: 15 }, (_, i) => {
    const h = i + 6;
    return `${h}:00`;
  });

  return (
    <div className="min-h-dvh bg-panq-surface pb-[var(--spacing-panq-8)]">
      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center gap-3 px-[var(--spacing-panq-3)] py-3 bg-panq-surface">
        <button
          onClick={() => (step > 1 ? setStep(step - 1) : undefined)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-panq-surface-container-low cursor-pointer"
        >
          <ArrowLeft size={20} className="text-panq-on-surface" />
        </button>
        <div className="flex items-center gap-2">
          <Croissant size={18} className="text-panq-primary" />
          <h1 className="text-[1.125rem] font-bold text-panq-on-surface">
            PanQ! にお店を登録
          </h1>
        </div>
      </header>

      <div className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-4)]">
        {/* Step indicator */}
        <StepIndicator current={step} />

        {/* Step 1: Basic info */}
        {step === 1 && (
          <div className="mt-[var(--spacing-panq-6)] flex flex-col gap-[var(--spacing-panq-4)]">
            <FormField label="店舗名" required placeholder="例: ベーカリー・パンキュー" />
            <FormField label="代表者名" required placeholder="例: 田中 太郎" />
            <FormField
              label="メールアドレス"
              required
              type="email"
              placeholder="example@panq.jp"
            />
            <FormField
              label="電話番号"
              required
              type="tel"
              placeholder="03-1234-5678"
            />
            <FormField
              label="郵便番号"
              required
              placeholder="123-4567"
              hint="郵便番号を入力すると住所が自動入力されます"
            />
            <FormField label="住所" required placeholder="東京都渋谷区..." />
            <FormField
              label="営業許可証番号"
              required
              placeholder="第 12345 号"
              hint="食品衛生法に基づく営業許可証の番号"
            />

            <div className="mt-[var(--spacing-panq-4)]">
              <Button
                variant="primary"
                fullWidth
                onClick={() => setStep(2)}
              >
                次へ進む
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Business info */}
        {step === 2 && (
          <div className="mt-[var(--spacing-panq-6)] flex flex-col gap-[var(--spacing-panq-4)]">
            {/* Business hours */}
            <div className="flex flex-col gap-[var(--spacing-panq-2)]">
              <p className="text-[0.875rem] font-semibold text-panq-on-surface">
                営業時間
              </p>
              <div className="flex items-center gap-2">
                <SelectField label="" options={timeOptions} />
                <span className="text-panq-on-surface-variant mt-5">〜</span>
                <SelectField label="" options={timeOptions} />
              </div>
            </div>

            {/* Pickup hours */}
            <div className="flex flex-col gap-[var(--spacing-panq-2)]">
              <p className="text-[0.875rem] font-semibold text-panq-on-surface">
                受取可能時間
              </p>
              <p className="text-[0.6875rem] text-panq-on-surface-variant">
                福袋のピックアップ時間帯
              </p>
              <div className="flex items-center gap-2">
                <SelectField label="" options={timeOptions} />
                <span className="text-panq-on-surface-variant mt-5">〜</span>
                <SelectField label="" options={timeOptions} />
              </div>
            </div>

            {/* Closed days */}
            <div className="flex flex-col gap-[var(--spacing-panq-2)]">
              <p className="text-[0.875rem] font-semibold text-panq-on-surface">
                定休日
              </p>
              <div className="flex flex-wrap gap-2">
                {weekdays.map((day) => (
                  <FilterChip
                    key={day}
                    label={day}
                    selected={closedDays.includes(day)}
                    onToggle={() =>
                      setClosedDays((prev) =>
                        prev.includes(day)
                          ? prev.filter((d) => d !== day)
                          : [...prev, day]
                      )
                    }
                  />
                ))}
              </div>
            </div>

            {/* Bag type */}
            <div className="flex flex-col gap-[var(--spacing-panq-2)]">
              <p className="text-[0.875rem] font-semibold text-panq-on-surface">
                福袋タイプ
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { id: "standard", label: "390円のみ" },
                  { id: "premium", label: "990円のみ" },
                  { id: "both", label: "両方" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setBagType(opt.id)}
                    className={`
                      flex items-center gap-3 rounded-[1rem] p-[var(--spacing-panq-3)]
                      cursor-pointer transition-colors duration-150
                      ${
                        bagType === opt.id
                          ? "bg-panq-primary-container"
                          : "bg-panq-surface-container-lowest border border-panq-outline-variant/20"
                      }
                    `}
                  >
                    <div
                      className={`
                        h-5 w-5 rounded-full flex items-center justify-center
                        ${
                          bagType === opt.id
                            ? "bg-panq-primary"
                            : "bg-panq-surface-container-highest"
                        }
                      `}
                    >
                      {bagType === opt.id && (
                        <div className="h-2 w-2 rounded-full bg-panq-on-primary" />
                      )}
                    </div>
                    <span
                      className={`text-[0.875rem] font-semibold ${
                        bagType === opt.id
                          ? "text-panq-on-primary-container"
                          : "text-panq-on-surface"
                      }`}
                    >
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Daily limit */}
            <FormField
              label="1日の出品可能数"
              type="number"
              placeholder="例: 10"
            />

            <div className="mt-[var(--spacing-panq-4)]">
              <Button
                variant="primary"
                fullWidth
                onClick={() => setStep(3)}
              >
                次へ進む
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="mt-[var(--spacing-panq-6)] flex flex-col gap-[var(--spacing-panq-4)]">
            {/* Summary card */}
            <div className="rounded-[2rem] bg-panq-surface-container-low p-[var(--spacing-panq-5)]">
              <h2 className="text-[1rem] font-bold text-panq-on-surface">
                入力内容の確認
              </h2>
              <div className="mt-[var(--spacing-panq-4)] flex flex-col gap-[var(--spacing-panq-3)]">
                {[
                  { label: "店舗名", value: "ベーカリー・パンキュー" },
                  { label: "代表者名", value: "田中 太郎" },
                  { label: "メール", value: "example@panq.jp" },
                  { label: "電話番号", value: "03-1234-5678" },
                  { label: "住所", value: "東京都渋谷区神南1-2-3" },
                  { label: "営業許可証番号", value: "第 12345 号" },
                  { label: "営業時間", value: "7:00〜19:00" },
                  { label: "受取時間", value: "17:00〜18:00" },
                  { label: "定休日", value: "水曜日" },
                  { label: "福袋タイプ", value: "390円・990円 両方" },
                  { label: "1日の出品可能数", value: "10個" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-[0.75rem] text-panq-on-surface-variant">
                      {item.label}
                    </span>
                    <span className="text-[0.75rem] font-semibold text-panq-on-surface text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Agreement */}
            <button
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setAgreed(!agreed)}
            >
              <div
                className={`
                  h-6 w-6 rounded-[0.5rem] flex items-center justify-center
                  ${
                    agreed
                      ? "bg-panq-primary"
                      : "bg-panq-surface-container-highest border border-panq-outline-variant/20"
                  }
                `}
              >
                {agreed && <Check size={14} className="text-panq-on-primary" />}
              </div>
              <span className="text-[0.8125rem] text-panq-on-surface">
                利用規約に同意する
              </span>
            </button>

            <div className="mt-[var(--spacing-panq-2)]">
              <Button
                variant="primary"
                fullWidth
                disabled={!agreed}
                onClick={() => setCompleted(true)}
              >
                登録申請する
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
