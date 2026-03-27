import { Heart } from "lucide-react";

interface DonationBannerProps {
  amount?: number;
}

export default function DonationBanner({ amount = 3.9 }: DonationBannerProps) {
  return (
    <div
      className="
        relative overflow-hidden
        flex items-center gap-3
        p-[var(--spacing-panq-4)] rounded-[var(--radius-xl)]
        bg-panq-primary-fixed
      "
    >
      {/* Organic shape background decoration */}
      <div className="absolute -right-4 -top-4 h-20 w-20 organic-shape bg-panq-primary-fixed-dim/30" />

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panq-surface-container-lowest">
        <Heart size={18} className="fill-panq-primary text-panq-primary" />
      </div>
      <div className="flex-1 relative">
        <p className="text-[0.8125rem] font-bold text-panq-on-primary-fixed">
          この購入で¥{amount}がこどもホスピスに届きます
        </p>
      </div>
    </div>
  );
}
