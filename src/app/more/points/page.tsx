import { ArrowLeft, ShoppingBag, Camera, Users, Gift } from "lucide-react";
import Link from "next/link";

const earnMethods = [
  { icon: ShoppingBag, label: "390円の福袋を購入", points: "+3pt" },
  { icon: ShoppingBag, label: "990円の福袋を購入", points: "+9pt" },
  { icon: Camera, label: "開封投稿", points: "+39pt" },
  { icon: Users, label: "おともだち紹介", points: "+39pt" },
];

const ranks = [
  { pt: "39〜", badge: "サンキュー", title: "パンフレンド", color: "#FFAF71" },
  { pt: "99〜", badge: "ブロンズ", title: "パンラバー", color: "#CD7F32" },
  { pt: "390〜", badge: "シルバー", title: "パンマスター", color: "#C0C0C0" },
  { pt: "990〜", badge: "ゴールド", title: "パンアルチザン", color: "#FFD700" },
  { pt: "3900〜", badge: "プラチナ", title: "パンアンバサダー", color: "#E5E4E2" },
  { pt: "9900〜", badge: "ダイヤモンド", title: "パンレジェンド", color: "#B9F2FF" },
];

const presents = [
  { pt: "990pt達成", gift: "PanQ!職人手作り帆布トートバッグ" },
  { pt: "9900pt達成", gift: "PanQ!限定パン窯セット（陶器プレート+マグ+バターナイフ）" },
];

export default function PointsPage() {
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
          ポイントについて
        </h1>
      </header>

      <div className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-3)]">
        {/* Section 1: What are PanQ Points */}
        <div className="rounded-[2rem] bg-panq-surface-container-lowest p-[var(--spacing-panq-4)] shadow-[var(--shadow-ambient)]">
          <h2 className="text-[1rem] font-bold text-panq-on-surface">
            PanQポイントとは
          </h2>
          <p className="mt-[var(--spacing-panq-2)] text-[0.875rem] leading-relaxed text-panq-on-surface-variant">
            PanQでのお買い物やおともだち紹介でたまるランクポイントです。ランクが上がると特典やプレゼントがもらえます。
          </p>
        </div>

        {/* Section 2: How to earn */}
        <div className="mt-[var(--spacing-panq-4)] rounded-[2rem] bg-panq-surface-container-low p-[var(--spacing-panq-4)]">
          <h2 className="text-[1rem] font-bold text-panq-on-surface">
            ポイントのもらいかた
          </h2>
          <div className="mt-[var(--spacing-panq-3)] flex flex-col gap-[var(--spacing-panq-2)]">
            {earnMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div key={method.label} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panq-surface-container-lowest">
                    <Icon size={16} className="text-panq-primary" />
                  </div>
                  <p className="flex-1 text-[0.875rem] text-panq-on-surface">
                    {method.label}
                  </p>
                  <span className="text-[0.875rem] font-bold text-panq-primary">
                    {method.points}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Ranks */}
        <div className="mt-[var(--spacing-panq-4)]">
          <h2 className="text-[1rem] font-bold text-panq-on-surface px-1">
            ランク＆特典
          </h2>
          <div className="mt-[var(--spacing-panq-3)] flex flex-col gap-[var(--spacing-panq-2)]">
            {ranks.map((rank) => (
              <div
                key={rank.badge}
                className="flex items-center gap-3 rounded-[2rem] bg-panq-surface-container-lowest p-[var(--spacing-panq-4)] shadow-[var(--shadow-ambient)]"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: rank.color }}
                >
                  <span className="text-[0.6875rem] font-bold text-panq-on-surface">
                    {rank.pt.replace("〜", "")}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-[0.875rem] font-semibold text-panq-on-surface">
                    {rank.badge}
                  </p>
                  <p className="text-[0.75rem] text-panq-on-surface-variant">
                    {rank.title}
                  </p>
                </div>
                <span className="text-[0.75rem] text-panq-on-surface-variant shrink-0">
                  {rank.pt}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Presents */}
        <div className="mt-[var(--spacing-panq-4)] rounded-[2rem] bg-panq-tertiary-container p-[var(--spacing-panq-4)]">
          <div className="flex items-center gap-2">
            <Gift size={18} className="text-panq-on-tertiary-container" />
            <h2 className="text-[1rem] font-bold text-panq-on-tertiary-container">
              プレゼント企画
            </h2>
          </div>
          <div className="mt-[var(--spacing-panq-3)] flex flex-col gap-[var(--spacing-panq-3)]">
            {presents.map((p) => (
              <div key={p.pt} className="rounded-[1.5rem] bg-panq-surface-container-lowest p-[var(--spacing-panq-3)]">
                <p className="text-[0.75rem] font-bold text-panq-tertiary">
                  {p.pt}
                </p>
                <p className="mt-1 text-[0.875rem] font-semibold text-panq-on-surface">
                  {p.gift}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="mt-[var(--spacing-panq-4)] text-[0.75rem] text-panq-on-surface-variant text-center">
          ※ ポイントはランク専用です。お買い物の割引には使えません。
        </p>
      </div>
    </div>
  );
}