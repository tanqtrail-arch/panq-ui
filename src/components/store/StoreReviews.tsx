import { Star } from "lucide-react";
import type { StoreReview } from "@/lib/store-data";

interface StoreReviewsProps {
  rating: number;
  reviewCount: number;
  reviews: StoreReview[];
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={
            i < count
              ? "fill-panq-tertiary-container text-panq-tertiary-container"
              : "text-panq-outline-variant"
          }
        />
      ))}
    </div>
  );
}

export default function StoreReviews({ rating, reviewCount, reviews }: StoreReviewsProps) {
  return (
    <div>
      {/* Overall rating */}
      <div className="flex items-center gap-3">
        <span className="text-[2rem] font-bold text-panq-on-surface">{rating}</span>
        <div className="flex flex-col gap-0.5">
          <Stars count={Math.round(rating)} />
          <span className="text-[0.6875rem] text-panq-on-surface-variant">
            {reviewCount}件のレビュー
          </span>
        </div>
      </div>

      {/* Review cards */}
      <div className="mt-[var(--spacing-panq-4)] flex flex-col gap-[var(--spacing-panq-3)]">
        {reviews.slice(0, 3).map((review) => (
          <div
            key={review.id}
            className="rounded-[var(--radius-xl)] bg-panq-surface-container-lowest p-[var(--spacing-panq-4)] shadow-[var(--shadow-ambient)]"
          >
            <div className="flex items-center justify-between">
              <span className="text-[0.8125rem] font-semibold text-panq-on-surface">
                {review.userName}
              </span>
              <span className="text-[0.6875rem] text-panq-on-surface-variant">
                {review.date}
              </span>
            </div>
            <div className="mt-1">
              <Stars count={review.rating} />
            </div>
            <p className="mt-2 text-[0.8125rem] leading-relaxed text-panq-on-surface-variant">
              {review.comment}
            </p>
          </div>
        ))}
      </div>

      {/* More link */}
      {reviewCount > 3 && (
        <button className="mt-[var(--spacing-panq-3)] text-[0.8125rem] font-semibold text-panq-primary cursor-pointer">
          もっと見る
        </button>
      )}
    </div>
  );
}
