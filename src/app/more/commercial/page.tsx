import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const rows = [
  { label: "事業者名", value: "株式会社QuEST（QuEST Inc.）" },
  { label: "代表者", value: "代表取締役" },
  { label: "所在地", value: "〒145-0071 東京都大田区田園調布2丁目40-8" },
  { label: "お問い合わせ", value: "LINEアカウント: @PanQ\n※お問い合わせはLINEよりお願いいたします" },
  { label: "販売価格", value: "STANDARD福袋: 390円（税込）\nPREMIUM福袋: 990円（税込）\n※各商品ページに表示された価格に基づきます" },
  { label: "販売価格以外の必要料金", value: "なし\n※インターネット接続に必要な通信費はユーザー負担となります" },
  { label: "支払方法", value: "クレジットカード、PayPay" },
  { label: "支払時期", value: "「購入する」ボタンをタップした時点で即時決済" },
  { label: "商品の引渡し時期", value: "各商品ページに表示された受取時間内に、出品店舗にてお受け取りください" },
  { label: "返品・キャンセル", value: "決済完了後の返品・キャンセル・返金はできません。\nただし、出品者の都合により商品の提供が不可能となった場合は、当社の判断により返金処理を行うことがあります。" },
  { label: "動作環境", value: "LINEアプリがインストールされたスマートフォン\n対応OS: iOS 15以降、Android 10以降\n対応ブラウザ: LINEアプリ内ブラウザ" },
  { label: "特別な販売条件", value: "福袋の具体的な内容（パンの種類・個数）は出品者の裁量により決定されます。ユーザーが個別のパンの種類を指定することはできません。" },
];

export default function CommercialPage() {
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
          特定商取引法に基づく表記
        </h1>
      </header>

      <div className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-3)]">
        <div className="flex flex-col gap-[var(--spacing-panq-3)]">
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`rounded-[2rem] p-[var(--spacing-panq-4)] ${
                i % 2 === 0
                  ? "bg-panq-surface-container-lowest shadow-[var(--shadow-ambient)]"
                  : "bg-panq-surface-container-low"
              }`}
            >
              <p className="text-[0.75rem] font-semibold uppercase tracking-wider text-panq-on-surface-variant">
                {row.label}
              </p>
              <p className="mt-[var(--spacing-panq-2)] text-[0.875rem] leading-relaxed text-panq-on-surface whitespace-pre-line">
                {row.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
