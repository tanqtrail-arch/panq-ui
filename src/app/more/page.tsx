"use client";

import {
  ChevronRight,
  Info,
  FileText,
  Shield,
  Scale,
  LogOut,
  Store,
  BookOpen,
  Star,
  Users,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";

const linkItems = [
  { icon: BookOpen, label: "つかいかた", href: "/more/howto", color: "text-panq-primary" },
  { icon: Star, label: "ポイントについて", href: "/more/points", color: "text-panq-primary" },
  { icon: Users, label: "おともだち紹介", href: "/more/referral", color: "text-panq-primary" },
  { icon: HelpCircle, label: "よくある質問", href: "/more/faq", color: "text-panq-primary" },
];

const menuItems = [
  { icon: Info, label: "PanQ について", color: "text-panq-primary" },
  { icon: FileText, label: "利用規約", color: "text-panq-primary" },
  { icon: Shield, label: "プライバシーポリシー", color: "text-panq-primary" },
  { icon: Scale, label: "特定商取引法に基づく表記", color: "text-panq-primary" },
];

export default function MorePage() {
  return (
    <div className="min-h-dvh bg-panq-surface pb-[calc(var(--spacing-panq-8)+4rem)]">
      {/* Header */}
      <header className="px-[var(--spacing-panq-3)] pt-[var(--spacing-panq-5)] pb-[var(--spacing-panq-3)]">
        <h1 className="text-[1.75rem] font-bold text-panq-on-surface">
          その他
        </h1>
      </header>

      {/* Link pages */}
      <section className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-3)] flex flex-col gap-[var(--spacing-panq-3)]">
        {linkItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className="
                flex items-center gap-3 w-full
                rounded-[2rem] bg-panq-surface-container-lowest
                p-[var(--spacing-panq-4)]
                shadow-[var(--shadow-ambient)]
                active:scale-[0.98] transition-transform duration-150
              "
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panq-surface-container">
                <Icon size={18} className={item.color} />
              </div>
              <p className="flex-1 text-left text-[0.875rem] font-semibold text-panq-on-surface">
                {item.label}
              </p>
              <ChevronRight size={18} className="text-panq-on-surface-variant shrink-0" />
            </Link>
          );
        })}
      </section>

      {/* Menu list */}
      <section className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-3)] flex flex-col gap-[var(--spacing-panq-3)]">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className="
                flex items-center gap-3 w-full
                rounded-[2rem] bg-panq-surface-container-lowest
                p-[var(--spacing-panq-4)]
                shadow-[var(--shadow-ambient)]
                cursor-pointer
                active:scale-[0.98] transition-transform duration-150
              "
              onClick={() => alert("近日公開")}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panq-surface-container">
                <Icon size={18} className={item.color} />
              </div>
              <p className="flex-1 text-left text-[0.875rem] font-semibold text-panq-on-surface">
                {item.label}
              </p>
              <ChevronRight size={18} className="text-panq-on-surface-variant shrink-0" />
            </button>
          );
        })}

        {/* App version */}
        <div className="flex items-center gap-3 rounded-[2rem] bg-panq-surface-container-lowest p-[var(--spacing-panq-4)] shadow-[var(--shadow-ambient)]">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panq-surface-container">
            <Info size={18} className="text-panq-on-surface-variant" />
          </div>
          <p className="flex-1 text-left text-[0.875rem] font-semibold text-panq-on-surface">
            アプリバージョン
          </p>
          <span className="text-[0.75rem] text-panq-on-surface-variant shrink-0">
            v1.0.0
          </span>
        </div>

        {/* Owner link */}
        <Link
          href="/owner/register"
          className="
            flex items-center gap-3 w-full
            rounded-[2rem] bg-panq-tertiary-container
            p-[var(--spacing-panq-4)]
            active:scale-[0.98] transition-transform duration-150
          "
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panq-surface-container-lowest">
            <Store size={18} className="text-panq-tertiary" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-[0.875rem] font-semibold text-panq-on-tertiary-container">
              パン屋オーナーの方はこちら
            </p>
            <p className="text-[0.6875rem] text-panq-on-tertiary-container/70">
              お店を登録して福袋を出品しましょう
            </p>
          </div>
          <ChevronRight size={18} className="text-panq-on-tertiary-container shrink-0" />
        </Link>

        {/* Logout */}
        <button
          className="
            flex items-center gap-3 w-full
            rounded-[2rem] bg-panq-surface-container-lowest
            p-[var(--spacing-panq-4)]
            shadow-[var(--shadow-ambient)]
            cursor-pointer
            active:scale-[0.98] transition-transform duration-150
          "
          onClick={() => alert("近日公開")}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panq-surface-container">
            <LogOut size={18} className="text-panq-error" />
          </div>
          <p className="flex-1 text-left text-[0.875rem] font-semibold text-panq-error">
            ログアウト
          </p>
        </button>
      </section>

      {/* Footer */}
      <footer className="mt-[var(--spacing-panq-8)] flex flex-col items-center gap-1 pb-[var(--spacing-panq-6)]">
        <p className="text-[0.75rem] text-panq-on-surface-variant">
          PanQ! by QuEST Inc.
        </p>
        <p className="text-[0.75rem] text-panq-on-surface-variant">
          © 2026 QuEST Inc.
        </p>
      </footer>

      <BottomNav />
    </div>
  );
}
