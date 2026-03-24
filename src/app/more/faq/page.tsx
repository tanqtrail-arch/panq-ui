"use client";

import { ArrowLeft, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "福袋の中身は選べますか？",
    a: "カテゴリ（ハード系・甘い系・お食事系・シンプル系・ミックス）は選べますが、具体的なパンの種類はお店のおまかせです。何が入っているかはお楽しみ！",
  },
  {
    q: "支払い方法は？",
    a: "クレジットカードまたはPayPayでお支払いいただけます。",
  },
  {
    q: "いつ決済されますか？",
    a: "「ご注文の確認」画面で「購入する」をタップした時点で決済が完了します。",
  },
  {
    q: "受取時間に行けなくなりました",
    a: "受取時間内にお越しいただけない場合、ご注文はキャンセルとなります。返金はできませんのでご了承ください。",
  },
  {
    q: "キャンセルはできますか？",
    a: "決済完了後のキャンセル・返金はできません。受取時間や内容をご確認のうえ、ご購入ください。",
  },
  {
    q: "ポイントで福袋を買えますか？",
    a: "ポイントはランク専用です。お買い物の割引には使えません。",
  },
  {
    q: "寄付について詳しく知りたい",
    a: "お買い物1回あたり3.9円がこどもホスピスへの支援に繋がります。",
  },
  {
    q: "パン屋として出品したい",
    a: "「その他」→「パン屋オーナーの方へ」からお申し込みいただけます。",
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[2rem] bg-panq-surface-container-lowest shadow-[var(--shadow-ambient)] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 w-full p-[var(--spacing-panq-4)] cursor-pointer"
      >
        <p className="flex-1 text-left text-[0.875rem] font-semibold text-panq-on-surface">
          {q}
        </p>
        <ChevronDown
          size={18}
          className={`text-panq-on-surface-variant shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-[var(--spacing-panq-4)] pb-[var(--spacing-panq-4)]">
          <p className="text-[0.875rem] leading-relaxed text-panq-on-surface-variant">
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
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
          よくある質問
        </h1>
      </header>

      <div className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-3)] flex flex-col gap-[var(--spacing-panq-2)]">
        {faqs.map((faq) => (
          <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
        ))}
      </div>
    </div>
  );
}