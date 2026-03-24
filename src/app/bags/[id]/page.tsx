import { ArrowLeft, Clock, MapPin, Star, Heart, Share2, ChevronRight } from "lucide-react";
import Link from "next/link";
import Button from "@/components/Button";
import PriceBadge from "@/components/PriceBadge";
import TierLabel from "@/components/TierLabel";
import { getBagById, bags, CATEGORY_LABELS } from "@/lib/mock-data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return bags.map((bag) => ({ id: bag.id }));
}

export default async function BagDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const bag = getBagById(id);

  if (!bag) {
    notFound();
  }

  return (
    <div className="min-h-dvh bg-panq-surface pb-[var(--spacing-panq-8)]">
      {/* Hero image */}
      <div className="relative">
        <img
          src={bag.imageUrl}
          alt={bag.title}
          className="h-[300px] w-full object-cover"
          style={{ borderRadius: "0 0 2rem 2rem" }}
        />

        {/* Floating header buttons */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-[var(--spacing-panq-3)] pt-3">
          <Link
            href="/search"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.8)] backdrop-blur-[12px]"
          >
            <ArrowLeft size={20} className="text-panq-on-surface" />
          </Link>
          <div className="flex gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.8)] backdrop-blur-[12px] cursor-pointer">
              <Heart size={20} className="text-panq-on-surface" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(255,255,255,0.8)] backdrop-blur-[12px] cursor-pointer">
              <Share2 size={20} className="text-panq-on-surface" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-5)]">
        {/* Tier + Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TierLabel tier={bag.tier} />
            <span className="text-[0.6875rem] font-medium text-panq-on-surface-variant">
              {CATEGORY_LABELS[bag.category]}
            </span>
          </div>
          <span className="flex items-center gap-1 text-[0.75rem] text-panq-on-surface-variant">
            <Star size={14} className="fill-panq-tertiary text-panq-tertiary" />
            {bag.rating} ({bag.reviewCount}件)
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-[var(--spacing-panq-3)] text-[1.5rem] font-bold leading-tight text-panq-on-surface">
          {bag.title}
        </h1>

        {/* Price */}
        <div className="mt-[var(--spacing-panq-2)]">
          <PriceBadge price={bag.price} />
        </div>

        {/* Description */}
        <p className="mt-[var(--spacing-panq-4)] text-[0.875rem] leading-relaxed text-panq-on-surface-variant">
          {bag.description}
        </p>

        {/* Contents preview */}
        <div className="mt-[var(--spacing-panq-5)] rounded-[2rem] bg-panq-surface-container-low p-[var(--spacing-panq-4)]">
          <h2 className="text-[0.875rem] font-bold text-panq-on-surface">
            福袋の中身（例）
          </h2>
          <div className="mt-[var(--spacing-panq-2)] flex flex-wrap gap-2">
            {bag.contents.map((item) => (
              <span
                key={item}
                className="inline-flex rounded-full bg-panq-surface-container-lowest px-3 py-1.5 text-[0.75rem] font-medium text-panq-on-surface-variant"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Pickup info */}
        <div className="mt-[var(--spacing-panq-4)] rounded-[2rem] bg-panq-surface-container-low p-[var(--spacing-panq-4)]">
          <h2 className="text-[0.875rem] font-bold text-panq-on-surface">
            受取情報
          </h2>
          <div className="mt-[var(--spacing-panq-3)] flex flex-col gap-[var(--spacing-panq-3)]">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panq-surface-container">
                <MapPin size={16} className="text-panq-primary" />
              </div>
              <div>
                <p className="text-[0.8125rem] font-semibold text-panq-on-surface">
                  {bag.storeName}
                </p>
                <p className="text-[0.75rem] text-panq-on-surface-variant">
                  {bag.storeAddress}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panq-surface-container">
                <Clock size={16} className="text-panq-primary" />
              </div>
              <div>
                <p className="text-[0.8125rem] font-semibold text-panq-on-surface">
                  受取時間
                </p>
                <p className="text-[0.75rem] text-panq-on-surface-variant">
                  {bag.pickupTime}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Store link */}
        <button className="mt-[var(--spacing-panq-4)] flex w-full items-center justify-between rounded-[2rem] bg-panq-surface-container-low p-[var(--spacing-panq-4)] cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-panq-primary-container">
              <span className="text-[0.875rem] font-bold text-panq-on-primary-container">
                {bag.storeName.charAt(0)}
              </span>
            </div>
            <div className="text-left">
              <p className="text-[0.8125rem] font-semibold text-panq-on-surface">
                {bag.storeName}
              </p>
              <p className="text-[0.6875rem] text-panq-on-surface-variant">
                お店の詳細を見る
              </p>
            </div>
          </div>
          <ChevronRight size={18} className="text-panq-on-surface-variant" />
        </button>

        {/* CTA */}
        <div className="mt-[var(--spacing-panq-6)]">
          <Link href={`/checkout?bagId=${bag.id}`}>
            <Button variant="primary" fullWidth>
              購入する →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
