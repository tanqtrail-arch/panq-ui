import Link from "next/link";
import { MapPin } from "lucide-react";

export default function RequestBanner() {
  return (
    <div
      className="
        flex flex-col items-center gap-[var(--spacing-panq-3)]
        p-[var(--spacing-panq-5)] rounded-[var(--radius-xl)]
        bg-panq-surface-container-low text-center
      "
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-panq-primary-fixed">
        <MapPin size={22} className="text-panq-primary" />
      </div>
      <h3 className="font-serif text-[1rem] font-bold text-panq-on-surface">
        お近くにPanQ!パン屋がない？
      </h3>
      <p className="text-[0.8125rem] text-panq-on-surface-variant leading-relaxed">
        リクエストを送って、あなたの街にPanQ!を
      </p>
      <Link
        href="/more/about"
        className="
          inline-flex items-center justify-center
          rounded-full px-6 py-2.5
          border border-panq-outline-variant/30
          text-[0.8125rem] font-semibold text-panq-primary
          transition-transform duration-150 active:scale-[0.98]
        "
      >
        パン屋をリクエスト
      </Link>
    </div>
  );
}
