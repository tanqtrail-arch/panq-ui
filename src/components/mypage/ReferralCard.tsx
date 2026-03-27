"use client";

import { Copy, Share2, Users } from "lucide-react";
import { useState } from "react";

interface ReferralCardProps {
  code: string;
  referralCount: number;
}

export default function ReferralCard({ code, referralCount }: ReferralCardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback — silently fail in Phase A
    }
  }

  return (
    <div className="rounded-[var(--radius-xl)] bg-panq-surface-container-lowest p-[var(--spacing-panq-5)] shadow-[var(--shadow-ambient)]">
      <p className="text-[0.875rem] leading-relaxed text-panq-on-surface-variant">
        友だちを招待すると、あなたも友だちも
        <span className="font-bold text-panq-primary"> 39pt </span>
        もらえます（初回購入時）
      </p>

      {/* Code display */}
      <div className="mt-[var(--spacing-panq-4)] flex items-center gap-2">
        <div className="flex-1 h-11 rounded-full bg-panq-surface-container-low px-4 flex items-center">
          <span className="text-[0.9375rem] font-bold text-panq-on-surface tracking-wider">
            {code}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-panq-surface-container-high cursor-pointer transition-transform active:scale-95"
        >
          <Copy size={16} className={copied ? "text-[#2ec4b2]" : "text-panq-on-surface-variant"} />
        </button>
      </div>
      {copied && (
        <p className="mt-1 text-[0.6875rem] text-[#2ec4b2] font-medium">コピーしました！</p>
      )}

      {/* Share button */}
      <button
        className="
          mt-[var(--spacing-panq-4)] w-full
          flex items-center justify-center gap-2
          rounded-full py-3
          artisan-gradient text-white
          font-semibold text-[0.875rem]
          cursor-pointer
          transition-transform duration-150 active:scale-[0.98]
        "
      >
        <Share2 size={16} />
        招待リンクを共有
      </button>

      {/* Referral count */}
      <div className="mt-[var(--spacing-panq-3)] flex items-center justify-center gap-1.5 text-[0.75rem] text-panq-on-surface-variant">
        <Users size={14} />
        {referralCount}人招待済み
      </div>
    </div>
  );
}
