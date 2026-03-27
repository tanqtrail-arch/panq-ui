"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Package, BarChart3, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: Package, label: "出品管理", href: "/owner/listing" },
  { icon: BarChart3, label: "実績", href: "/owner/stats" },
  { icon: Settings, label: "設定", href: "/owner/register" },
];

export default function OwnerBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="
        fixed bottom-0 left-1/2 -translate-x-1/2
        z-50 w-full max-w-[390px]
        flex items-center justify-around
        glass-panel
        px-2 pt-2
        pb-[max(0.5rem,env(safe-area-inset-bottom))]
      "
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href === "/owner/listing" && pathname === "/owner");
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              flex flex-col items-center gap-0.5 px-3 py-1
              transition-colors duration-150
              ${isActive ? "text-panq-primary" : "text-panq-on-surface-variant"}
            `}
          >
            <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[0.625rem] font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
