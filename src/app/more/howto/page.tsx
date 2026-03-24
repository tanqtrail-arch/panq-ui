import { ArrowLeft, Search, ShoppingBag, MapPin, Heart } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: 1,
    title: "えらぶ",
    icon: Search,
    description:
      "お近くのパン屋さんから、気になる福袋をえらびましょう。390円のSTANDARDと990円のPREMIUMの2種類があります。",
  },
  {
    number: 2,
    title: "かう",
    icon: ShoppingBag,
    description:
      "「カートに追加」→「ご注文の確認」で決済。クレジットカードまたはPayPayでお支払いいただけます。",
  },
  {
    number: 3,
    title: "うけとる",
    icon: MapPin,
    description:
      "注文完了後に表示される受取コード（PQ-XXXX）を、受取時間内にお店で見せてください。",
  },
  {
    number: 4,
    title: "たのしむ",
    icon: Heart,
    description:
      "何が入っているかはお楽しみ！お店自慢のパンをお楽しみください。お買い物1回あたり3.9円がこどもホスピスへの支援に繋がります。",
  },
];

export default function HowToPage() {
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
          つかいかた
        </h1>
      </header>

      <div className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-3)] flex flex-col gap-[var(--spacing-panq-4)]">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="rounded-[2rem] bg-panq-surface-container-lowest p-[var(--spacing-panq-4)] shadow-[var(--shadow-ambient)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panq-primary-container">
                  <span className="text-[0.875rem] font-bold text-panq-on-primary-container">
                    {step.number}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon size={18} className="text-panq-primary" />
                  <h2 className="text-[1rem] font-bold text-panq-on-surface">
                    {step.title}
                  </h2>
                </div>
              </div>
              <p className="mt-[var(--spacing-panq-3)] text-[0.875rem] leading-relaxed text-panq-on-surface-variant">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}