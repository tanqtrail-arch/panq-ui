import { ArrowLeft, Heart, Share2, ChevronDown } from "lucide-react";
import Link from "next/link";
import { getBagById, bags, CATEGORY_LABELS } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import PickupInfo from "@/components/purchase/PickupInfo";
import DonationBanner from "@/components/purchase/DonationBanner";

export function generateStaticParams() {
  return bags.map((bag) => ({ id: bag.id }));
}

function getProductName(price: 390 | 990) {
  return price === 990 ? "PanQ! プレミアム" : "PanQ! 福袋";
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

  const productName = getProductName(bag.price);

  return (
    <div className="min-h-dvh bg-panq-surface pb-[var(--spacing-panq-8)]">
      {/* ====== A-2: Hero image ====== */}
      <div className="relative">
        <div className="aspect-[4/3]">
          <img
            src={bag.imageUrl}
            alt={productName}
            className="h-full w-full object-cover"
          />
        </div>

        {/* A-1: Floating header */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-[var(--spacing-panq-4)] pt-3">
          <Link
            href="/search"
            className="flex h-10 w-10 items-center justify-center rounded-full glass-panel"
          >
            <ArrowLeft size={20} className="text-panq-on-surface" />
          </Link>
          <div className="flex gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full glass-panel cursor-pointer">
              <Heart size={20} className="text-panq-on-surface" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full glass-panel cursor-pointer">
              <Share2 size={20} className="text-panq-on-surface" />
            </button>
          </div>
        </div>

        {/* Price badge */}
        <span className="absolute bottom-4 right-4 artisan-gradient text-white text-[0.875rem] font-bold px-4 py-2 rounded-full premium-glow">
          ¥{bag.price}
        </span>
      </div>

      <div className="px-[var(--spacing-panq-4)]">
        {/* ====== A-3: Product info ====== */}
        <section className="mt-[var(--spacing-panq-5)]">
          <p className="text-[0.75rem] font-medium text-panq-on-surface-variant">
            {bag.storeName}
          </p>
          <h1 className="mt-1 font-serif text-[1.5rem] font-bold leading-tight text-panq-on-surface">
            {productName}
          </h1>
          <p className="mt-[var(--spacing-panq-3)] text-[0.875rem] leading-relaxed text-panq-on-surface-variant">
            職人のこだわりが詰まった厳選パンの福袋。その日の焼き上がりから、
            喜ばれる品をお店が心を込めてお選びします。
            今日だけの特別な出会いをお楽しみください。
          </p>
        </section>

        {/* ====== A-4: What's inside ====== */}
        <section className="mt-[var(--spacing-panq-5)]">
          <details className="group rounded-[var(--radius-xl)] bg-panq-surface-container-low">
            <summary className="flex items-center justify-between p-[var(--spacing-panq-4)] cursor-pointer list-none">
              <h2 className="font-serif text-[1rem] font-bold text-panq-on-surface">
                何が入ってる？
              </h2>
              <ChevronDown
                size={18}
                className="text-panq-on-surface-variant transition-transform duration-200 group-open:rotate-180"
              />
            </summary>
            <div className="px-[var(--spacing-panq-4)] pb-[var(--spacing-panq-4)]">
              <p className="text-[0.8125rem] text-panq-on-surface-variant leading-relaxed">
                {CATEGORY_LABELS[bag.category]}の福袋です。お店自慢のパンから店主がセレクトした詰め合わせをお届けします。
              </p>
              <div className="mt-[var(--spacing-panq-3)] flex flex-wrap gap-2">
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
          </details>
        </section>

        {/* ====== A-5: Pickup info ====== */}
        <section className="mt-[var(--spacing-panq-4)] rounded-[var(--radius-xl)] bg-panq-surface-container-low p-[var(--spacing-panq-4)]">
          <h2 className="font-serif text-[1rem] font-bold text-panq-on-surface mb-[var(--spacing-panq-3)]">
            受取情報
          </h2>
          <PickupInfo
            storeName={bag.storeName}
            address={bag.storeAddress}
            pickupTime={bag.pickupTime}
          />
        </section>

        {/* ====== A-6: CTA ====== */}
        <section className="mt-[var(--spacing-panq-6)]">
          <Link
            href={`/checkout?bagId=${bag.id}`}
            className="
              flex items-center justify-center
              w-full py-4 rounded-full
              artisan-gradient premium-glow
              text-white font-semibold text-[0.9375rem]
              transition-transform duration-150 active:scale-[0.98]
            "
          >
            購入おてつづきへ
          </Link>
          <p className="mt-[var(--spacing-panq-2)] text-center text-[0.6875rem] text-panq-on-surface-variant">
            ¥3.9がこどもホスピスに届きます
          </p>
        </section>
      </div>
    </div>
  );
}
