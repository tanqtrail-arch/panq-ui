import Link from "next/link";
import {
  Bell,
  CreditCard,
  MapPin,
  HelpCircle,
  BookOpen,
  FileText,
  Lock,
  Tag,
  Store,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface MenuItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

const items: MenuItem[] = [
  { icon: Bell, label: "通知設定", href: "/mypage" },
  { icon: CreditCard, label: "お支払い方法", href: "/mypage" },
  { icon: MapPin, label: "よく行くエリア", href: "/mypage" },
  { icon: HelpCircle, label: "ヘルプ・よくある質問", href: "/more/faq" },
  { icon: BookOpen, label: "私たちの物語", href: "/about" },
  { icon: FileText, label: "利用規約", href: "/more/terms" },
  { icon: Lock, label: "プライバシーポリシー", href: "/more/privacy" },
  { icon: Tag, label: "特定商取引法に基づく表記", href: "/more/commercial" },
  { icon: Store, label: "店舗オーナーの方へ", href: "/owner" },
];

export default function MenuList() {
  return (
    <div className="rounded-[var(--radius-xl)] bg-panq-surface-container-lowest overflow-hidden shadow-[var(--shadow-ambient)]">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`
              flex items-center gap-3 px-[var(--spacing-panq-4)] py-[var(--spacing-panq-3)]
              transition-colors duration-100
              ${i < items.length - 1 ? "border-b border-panq-outline-variant/10" : ""}
            `}
          >
            <Icon size={18} className="text-panq-on-surface-variant shrink-0" />
            <span className="flex-1 text-[0.875rem] text-panq-on-surface">
              {item.label}
            </span>
            <ChevronRight size={16} className="text-panq-outline-variant shrink-0" />
          </Link>
        );
      })}
    </div>
  );
}
