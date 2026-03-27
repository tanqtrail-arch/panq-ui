"use client";

import { Settings, LogOut } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import UserProfile from "@/components/mypage/UserProfile";
import PointEarning from "@/components/mypage/PointEarning";
import BadgeProgress from "@/components/mypage/BadgeProgress";
import OrderHistory from "@/components/mypage/OrderHistory";
import ImpactStats from "@/components/mypage/ImpactStats";
import ReferralCard from "@/components/mypage/ReferralCard";
import MenuList from "@/components/mypage/MenuList";

const mockUser = {
  name: "山田 太郎",
  totalBags: 42,
  totalPoints: 124,
  referralCode: "PANQ-U0042",
  referralCount: 3,
  favoriteStores: 5,
  orders: [
    { id: "PQ-00042", date: "2026-03-25", store: "Boulangerie Neuf9", product: "PanQ! プレミアム", price: 990, status: "pending" as const },
    { id: "PQ-00039", date: "2026-03-22", store: "パン工房 まるみ", product: "PanQ! 福袋", price: 390, status: "received" as const },
    { id: "PQ-00038", date: "2026-03-20", store: "Boulangerie Soleil", product: "PanQ! プレミアム", price: 990, status: "received" as const },
  ],
};

export default function MyPage() {
  return (
    <div className="min-h-dvh bg-panq-surface pb-[calc(var(--spacing-panq-8)+4rem)]">
      {/* ====== S1: Header ====== */}
      <header className="sticky top-0 z-40 glass-panel flex items-center justify-between px-[var(--spacing-panq-4)] py-3">
        <h1 className="font-serif text-[1.125rem] font-bold text-panq-on-surface">
          マイページ
        </h1>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-panq-surface-container-high cursor-pointer">
          <Settings size={18} className="text-panq-on-surface-variant" />
        </button>
      </header>

      <div className="px-[var(--spacing-panq-4)]">
        {/* ====== S2: User Profile ====== */}
        <section className="mt-[var(--spacing-panq-5)]">
          <UserProfile
            name={mockUser.name}
            points={mockUser.totalPoints}
          />
        </section>

        {/* ====== S3: Point Earning ====== */}
        <section className="mt-[var(--spacing-panq-6)]">
          <h2 className="font-serif text-[1.125rem] font-bold text-panq-on-surface mb-[var(--spacing-panq-4)]">
            ポイントのもらいかた
          </h2>
          <PointEarning />
        </section>

        {/* ====== S4: Badge Progress ====== */}
        <section className="mt-[var(--spacing-panq-6)]">
          <h2 className="font-serif text-[1.125rem] font-bold text-panq-on-surface mb-[var(--spacing-panq-4)]">
            ランク
          </h2>
          <BadgeProgress totalPoints={mockUser.totalPoints} />
        </section>

        {/* ====== S5: Order History ====== */}
        <section className="mt-[var(--spacing-panq-6)]">
          <h2 className="font-serif text-[1.125rem] font-bold text-panq-on-surface mb-[var(--spacing-panq-4)]">
            注文履歴
          </h2>
          <OrderHistory orders={mockUser.orders} />
        </section>

        {/* ====== S6: Impact Stats ====== */}
        <section className="mt-[var(--spacing-panq-6)]">
          <h2 className="font-serif text-[1.125rem] font-bold text-panq-on-surface mb-[var(--spacing-panq-4)]">
            あなたの「ありがとう」
          </h2>
          <ImpactStats
            totalBags={mockUser.totalBags}
            totalPoints={mockUser.totalPoints}
            favoriteStores={mockUser.favoriteStores}
          />
        </section>

        {/* ====== S7: Referral ====== */}
        <section className="mt-[var(--spacing-panq-6)]">
          <h2 className="font-serif text-[1.125rem] font-bold text-panq-on-surface mb-[var(--spacing-panq-4)]">
            友だちを招待
          </h2>
          <ReferralCard
            code={mockUser.referralCode}
            referralCount={mockUser.referralCount}
          />
        </section>

        {/* ====== S8: Menu List ====== */}
        <section className="mt-[var(--spacing-panq-6)]">
          <MenuList />
        </section>

        {/* ====== S9: Logout ====== */}
        <section className="mt-[var(--spacing-panq-6)]">
          <button className="w-full flex items-center justify-center gap-2 py-3 text-[0.875rem] font-semibold text-panq-error cursor-pointer">
            <LogOut size={16} />
            ログアウト
          </button>
        </section>

        {/* ====== S10: Version ====== */}
        <p className="mt-[var(--spacing-panq-4)] text-center text-[0.6875rem] text-panq-on-surface-variant">
          PanQ! v1.0.0
        </p>
      </div>

      {/* ====== S11: Bottom Nav ====== */}
      <BottomNav />
    </div>
  );
}
