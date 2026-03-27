import { Bell, User, MapPin } from "lucide-react";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import HeroSection from "@/components/home/HeroSection";
import PriceTierSelector from "@/components/home/PriceTierSelector";
import CategoryCards from "@/components/home/CategoryCards";
import ThankYouCircle from "@/components/home/ThankYouCircle";
import PromiseCards from "@/components/home/PromiseCards";

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-panq-surface pb-[calc(var(--spacing-panq-8)+4rem)]">
      {/* ====== Header (sticky, glass) ====== */}
      <header
        className="
          sticky top-0 z-40
          flex items-center justify-between
          px-[var(--spacing-panq-4)] py-3
          glass-panel
        "
      >
        {/* Left: Logo */}
        <span className="font-serif text-[1.125rem] font-bold text-panq-on-surface tracking-tight">
          PanQ!
        </span>

        {/* Right: Bell + Avatar */}
        <div className="flex items-center gap-2">
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-panq-surface-container-high cursor-pointer">
            <Bell size={20} className="text-panq-on-surface-variant" />
            <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-panq-primary border-2 border-panq-surface" />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-panq-surface-container-high cursor-pointer">
            <User size={18} className="text-panq-on-surface-variant" />
          </button>
        </div>
      </header>

      {/* ====== S2: Hero ====== */}
      <HeroSection />

      {/* ====== S3: Price Tier Selector ====== */}
      <PriceTierSelector />

      {/* ====== S4: Category Cards ====== */}
      <CategoryCards />

      {/* ====== S5: CTA ====== */}
      <section className="px-[var(--spacing-panq-4)] mt-[var(--spacing-panq-6)]">
        <Link
          href="/search"
          className="
            flex items-center justify-center gap-2
            w-full py-4 rounded-full
            artisan-gradient premium-glow
            text-white font-semibold text-[0.9375rem]
            transition-transform duration-150 active:scale-[0.98]
          "
        >
          <MapPin size={18} />
          近くのパン屋を探す
        </Link>
      </section>

      {/* ====== S6: Thank You Circle ====== */}
      <ThankYouCircle />

      {/* ====== S7: Promise Cards ====== */}
      <PromiseCards />

      {/* ====== S8: Bottom Nav ====== */}
      <BottomNav />
    </div>
  );
}
