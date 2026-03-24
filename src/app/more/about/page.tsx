import { ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";

const features = [
  "390円のSTANDARDと990円のPREMIUMの福袋",
  "お店自慢のこだわりパンが詰まった福袋",
  "何が入っているかはお楽しみ！",
  "お買い物1回あたり3.9円がこどもホスピスへの支援に繋がります",
];

export default function AboutPage() {
  return (
    <div className="min-h-dvh bg-panq-surface pb-[var(--spacing-panq-8)]">
      {/* Header */}
      <header className="sticky top-0 z-40 flex items-center gap-3 px-[var(--spacing-panq-3)] py-3 bg-panq-surface">
        <Link
          href="/more"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-panq-surface-container-low"
        >
          <ArrowLeft size={20} className="text-panq-on-surface" />
        </Link>
        <h1 className="text-[1.125rem] font-bold text-panq-on-surface">
          PanQ について
        </h1>
      </header>

      <div className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-3)]">
        {/* Intro */}
        <div className="rounded-[2rem] bg-panq-surface-container-lowest p-[var(--spacing-panq-5)] shadow-[var(--shadow-ambient)] text-center">
          <h2 className="text-[1.25rem] font-bold text-panq-on-surface">
            PanQ!
          </h2>
          <p className="mt-[var(--spacing-panq-3)] text-[0.875rem] leading-relaxed text-panq-on-surface-variant">
            PanQは、街のパン屋さんと出会える
            <br />
            おたのしみ福袋マーケットプレイスです。
          </p>
        </div>

        {/* Features */}
        <div className="mt-[var(--spacing-panq-4)] rounded-[2rem] bg-panq-surface-container-low p-[var(--spacing-panq-4)]">
          <h2 className="text-[1rem] font-bold text-panq-on-surface">
            サービスの特徴
          </h2>
          <ul className="mt-[var(--spacing-panq-3)] flex flex-col gap-[var(--spacing-panq-2)]">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-[0.875rem] leading-relaxed text-panq-on-surface-variant"
              >
                <span className="text-panq-primary mt-0.5 shrink-0">・</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="mt-[var(--spacing-panq-4)] rounded-[2rem] bg-panq-surface-container-lowest p-[var(--spacing-panq-4)] shadow-[var(--shadow-ambient)]">
          <h2 className="text-[1rem] font-bold text-panq-on-surface">
            運営会社
          </h2>
          <div className="mt-[var(--spacing-panq-3)] flex flex-col gap-[var(--spacing-panq-1)]">
            <p className="text-[0.875rem] font-semibold text-panq-on-surface">
              株式会社QuEST（QuEST Inc.）
            </p>
            <p className="text-[0.8125rem] text-panq-on-surface-variant">
              〒145-0071 東京都大田区田園調布2丁目40-8
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-[var(--spacing-panq-4)] rounded-[2rem] bg-panq-surface-container-low p-[var(--spacing-panq-4)]">
          <h2 className="text-[1rem] font-bold text-panq-on-surface">
            お問い合わせ
          </h2>
          <div className="mt-[var(--spacing-panq-3)] flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panq-surface-container-lowest">
              <MessageCircle size={18} className="text-panq-primary" />
            </div>
            <div>
              <p className="text-[0.875rem] font-semibold text-panq-on-surface">
                LINEアカウント
              </p>
              <p className="text-[0.8125rem] text-panq-on-surface-variant">
                @PanQ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
