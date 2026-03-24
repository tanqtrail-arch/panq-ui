"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Search, ClipboardList, User, MoreHorizontal } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: "ホーム", href: "/" },
  { icon: Search, label: "さがす", href: "/search" },
  { icon: ClipboardList, label: "注文履歴", href: "/orders" },
  { icon: User, label: "マイページ", href: "/mypage" },
  { icon: MoreHorizontal, label: "その他", href: "/more" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="
        fixed bottom-0 left-1/2 -translate-x-1/2
        z-50 w-full max-w-[430px]
        flex items-center justify-around
        bg-[rgba(255,255,255,0.8)] backdrop-blur-[12px]
        px-2 pt-2
        pb-[max(0.5rem,env(safe-area-inset-bottom))]
      "
    >
      {navItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href ||
              (item.href === "/search" && pathname.startsWith("/bags/")) ||
              (item.href === "/orders" && pathname.startsWith("/pickup/"));
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
