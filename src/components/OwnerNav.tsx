"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Croissant, MoreHorizontal } from "lucide-react";

const tabs = [
  { label: "出品管理", href: "/owner/listing" },
  { label: "じっせき", href: "/owner/stats" },
  { label: "設定", href: "/owner/settings" },
];

export default function OwnerNav() {
  const pathname = usePathname();

  return (
    <header className="bg-panq-inverse-surface">
      {/* Top bar */}
      <div className="flex items-center justify-between px-[var(--spacing-panq-3)] pt-[var(--spacing-panq-3)] pb-[var(--spacing-panq-2)]">
        <Link href="/owner/listing" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-panq-primary-container">
            <Croissant size={16} className="text-panq-on-primary-container" />
          </div>
          <span className="text-[0.9375rem] font-bold text-panq-inverse-on-surface tracking-tight">
            PanQ!{" "}
            <span className="text-[0.75rem] font-normal text-panq-inverse-on-surface/60">
              for Owners
            </span>
          </span>
        </Link>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full cursor-pointer"
          onClick={() => alert("近日公開")}
        >
          <MoreHorizontal size={20} className="text-panq-inverse-on-surface" />
        </button>
      </div>

      {/* Tab bar */}
      <div className="flex gap-1 px-[var(--spacing-panq-3)] pb-[var(--spacing-panq-2)]">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`
                px-4 py-2 text-[0.8125rem] font-semibold
                transition-colors duration-150
                ${
                  isActive
                    ? "text-panq-inverse-primary border-b-2 border-panq-inverse-primary"
                    : "text-panq-inverse-on-surface"
                }
              `}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
