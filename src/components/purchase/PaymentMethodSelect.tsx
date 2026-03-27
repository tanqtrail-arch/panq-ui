"use client";

import { useState } from "react";
import { CreditCard } from "lucide-react";

type Method = "apple-pay" | "card";

export default function PaymentMethodSelect() {
  const [selected, setSelected] = useState<Method>("apple-pay");

  return (
    <div className="flex flex-col gap-[var(--spacing-panq-3)]">
      {/* Apple Pay */}
      <button
        onClick={() => setSelected("apple-pay")}
        className={`
          flex items-center justify-center
          rounded-[var(--radius-xl)] py-3.5 cursor-pointer
          transition-all duration-150
          ${
            selected === "apple-pay"
              ? "bg-black text-white ring-2 ring-panq-primary"
              : "bg-black text-white opacity-60"
          }
        `}
      >
        <span className="text-[1rem] font-semibold tracking-tight">
           Pay
        </span>
      </button>

      {/* Credit Card */}
      <button
        onClick={() => setSelected("card")}
        className={`
          flex items-center gap-3
          rounded-[var(--radius-xl)] p-[var(--spacing-panq-4)] cursor-pointer
          transition-all duration-150
          ${
            selected === "card"
              ? "bg-panq-surface-container-lowest shadow-[var(--shadow-ambient)] ring-2 ring-panq-primary"
              : "bg-panq-surface-container-low"
          }
        `}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panq-primary-fixed">
          <CreditCard size={18} className="text-panq-primary" />
        </div>
        <div className="flex-1 text-left">
          <p className="text-[0.875rem] font-semibold text-panq-on-surface">
            クレジットカード
          </p>
          <p className="text-[0.6875rem] text-panq-on-surface-variant">
            Visa, Mastercard, JCB, AMEX
          </p>
        </div>
        <div className={`h-5 w-5 rounded-full flex items-center justify-center ${
          selected === "card" ? "bg-panq-primary" : "bg-panq-surface-container-highest"
        }`}>
          {selected === "card" && <div className="h-2 w-2 rounded-full bg-white" />}
        </div>
      </button>

      {/* Card form (dummy, shown when card is selected) */}
      {selected === "card" && (
        <div className="rounded-[var(--radius-xl)] bg-panq-surface-container-lowest p-[var(--spacing-panq-4)] shadow-[var(--shadow-ambient)] flex flex-col gap-[var(--spacing-panq-3)]">
          <div>
            <label className="text-[0.6875rem] font-medium text-panq-on-surface-variant">カード番号</label>
            <input
              type="text"
              placeholder="4242 4242 4242 4242"
              className="
                mt-1 w-full h-11 rounded-full
                bg-panq-surface-container-low px-4
                text-[0.875rem] text-panq-on-surface
                placeholder:text-panq-on-surface-variant/50
                outline-none
              "
            />
          </div>
          <div className="flex gap-[var(--spacing-panq-3)]">
            <div className="flex-1">
              <label className="text-[0.6875rem] font-medium text-panq-on-surface-variant">有効期限</label>
              <input
                type="text"
                placeholder="MM / YY"
                className="
                  mt-1 w-full h-11 rounded-full
                  bg-panq-surface-container-low px-4
                  text-[0.875rem] text-panq-on-surface
                  placeholder:text-panq-on-surface-variant/50
                  outline-none
                "
              />
            </div>
            <div className="flex-1">
              <label className="text-[0.6875rem] font-medium text-panq-on-surface-variant">CVC</label>
              <input
                type="text"
                placeholder="123"
                className="
                  mt-1 w-full h-11 rounded-full
                  bg-panq-surface-container-low px-4
                  text-[0.875rem] text-panq-on-surface
                  placeholder:text-panq-on-surface-variant/50
                  outline-none
                "
              />
            </div>
          </div>
          <p className="text-[0.625rem] text-panq-on-surface-variant">
            カード情報はStripeが安全に管理します
          </p>
        </div>
      )}
    </div>
  );
}
