"use client";

import {
  User,
  ChevronRight,
  Crown,
  Gift,
  Users,
  BookOpen,
  HelpCircle,
  MessageCircle,
  Settings,
  Croissant,
} from "lucide-react";
import BottomNav from "@/components/BottomNav";

const menuItems = [
  { icon: Crown, label: "ランクについて" },
  { icon: Gift, label: "ポイントについて" },
  { icon: Users, label: "おともだち紹介", sub: "紹介コード: PANQ-U0001" },
  { icon: BookOpen, label: "つかいかた" },
  { icon: HelpCircle, label: "よくある質問" },
  { icon: MessageCircle, label: "お問い合わせ" },
  { icon: Settings, label: "設定" },
];

export default function MyPage() {
  return (
    <div className="min-h-dvh bg-panq-surface pb-[calc(var(--spacing-panq-8)+4rem)]">
      {/* Header */}
      <header className="flex items-center justify-center gap-2 px-[var(--spacing-panq-3)] py-3 bg-panq-surface">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-panq-primary-container">
          <Croissant size={16} className="text-panq-on-primary-container" />
        </div>
        <span className="text-[1rem] font-bold text-panq-on-surface tracking-tight">
          PanQ!
        </span>
      </header>

      {/* Profile section */}
      <section className="rounded-b-[2rem] bg-panq-surface-container-low px-[var(--spacing-panq-3)] pt-[var(--spacing-panq-5)] pb-[var(--spacing-panq-6)]">
        <div className="flex items-center gap-[var(--spacing-panq-4)]">
          {/* Avatar */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-panq-primary-container">
            <User size={28} className="text-panq-on-primary-container" />
          </div>
          {/* Name + title */}
          <div>
            <h1 className="text-[1.5rem] font-semibold text-panq-on-surface">
              パン好き太郎
            </h1>
            <p className="text-[0.75rem] text-panq-on-surface-variant">
              街のクランク・アルチザン
            </p>
          </div>
        </div>
      </section>

      {/* Points card */}
      <section className="px-[var(--spacing-panq-3)] -mt-[var(--spacing-panq-4)]">
        <div className="rounded-[2rem] bg-panq-surface-container-lowest p-[var(--spacing-panq-5)] shadow-[var(--shadow-ambient)]">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-panq-on-surface-variant">
            Current Points
          </p>
          <p className="mt-[var(--spacing-panq-2)] text-[1.75rem] font-bold text-panq-primary leading-none">
            390 <span className="text-[0.875rem]">pt</span>
          </p>

          {/* Level bar */}
          <div className="mt-[var(--spacing-panq-4)]">
            <div className="h-3 w-full rounded-full bg-panq-primary-container overflow-hidden">
              <div
                className="h-full rounded-full bg-panq-primary transition-all duration-500"
                style={{ width: "65%" }}
              />
            </div>
            <p className="mt-[var(--spacing-panq-2)] text-[0.75rem] text-panq-on-surface-variant">
              レベルアップまであと35%
            </p>
          </div>
        </div>
      </section>

      {/* Menu list */}
      <section className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-5)] flex flex-col gap-[var(--spacing-panq-2)]">
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
                <Icon size={18} className="text-panq-primary" />
              </div>
              <div className="flex-1 text-left min-w-0">
                <p className="text-[0.875rem] font-semibold text-panq-on-surface">
                  {item.label}
                </p>
                {item.sub && (
                  <p className="text-[0.6875rem] text-panq-on-surface-variant mt-0.5">
                    {item.sub}
                  </p>
                )}
              </div>
              <ChevronRight size={18} className="text-panq-on-surface-variant shrink-0" />
            </button>
          );
        })}
      </section>

      <BottomNav />
    </div>
  );
}
