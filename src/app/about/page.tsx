import { ArrowLeft, MapPin } from "lucide-react";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import AboutHero from "@/components/about/AboutHero";
import OriginStory from "@/components/about/OriginStory";
import ThankYouMeaning from "@/components/about/ThankYouMeaning";
import CraftStory from "@/components/about/CraftStory";
import DonationStory from "@/components/about/DonationStory";
import CraftValues from "@/components/about/CraftValues";

export default function AboutPage() {
  return (
    <div className="min-h-dvh bg-panq-surface pb-[calc(var(--spacing-panq-8)+4rem)]">
      {/* ====== S1: Header (floating over hero) ====== */}
      <header className="sticky top-0 z-40 glass-panel flex items-center gap-3 px-[var(--spacing-panq-4)] py-3">
        <Link
          href="/"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-panq-surface-container-high"
        >
          <ArrowLeft size={20} className="text-panq-on-surface" />
        </Link>
        <h1 className="font-serif text-[1.125rem] font-bold text-panq-on-surface">
          私たちの物語
        </h1>
      </header>

      {/* ====== S2: Hero ====== */}
      <AboutHero />

      <div className="px-[var(--spacing-panq-4)]">
        {/* ====== S3: Origin ====== */}
        <div className="mt-[var(--spacing-panq-7)]">
          <OriginStory />
        </div>

        {/* ====== S4: 390 = Thank You ====== */}
        <div className="mt-[var(--spacing-panq-7)]">
          <ThankYouMeaning />
        </div>

        {/* ====== S5: Craft Story ====== */}
        <div className="mt-[var(--spacing-panq-7)]">
          <CraftStory />
        </div>

        {/* ====== S6: Donation ====== */}
        <div className="mt-[var(--spacing-panq-7)]">
          <DonationStory />
        </div>

        {/* ====== S7: Values ====== */}
        <div className="mt-[var(--spacing-panq-7)]">
          <CraftValues />
        </div>

        {/* ====== S8: CTA ====== */}
        <section className="mt-[var(--spacing-panq-7)]">
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
            パン屋を探す
          </Link>
          <p className="mt-[var(--spacing-panq-2)] text-center text-[0.75rem] text-panq-on-surface-variant">
            あなたの街のパン屋さんが待っています
          </p>
        </section>
      </div>

      {/* ====== S9: Bottom Nav ====== */}
      <BottomNav />
    </div>
  );
}
