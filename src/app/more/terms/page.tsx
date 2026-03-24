import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "第1条（適用）",
    body: "本規約は、株式会社QuEST（以下「当社」）が提供するサービス「PanQ」（以下「本サービス」）の利用に関する条件を、本サービスを利用するすべてのユーザー（以下「ユーザー」）と当社との間で定めるものです。ユーザーは、本サービスを利用することにより、本規約に同意したものとみなされます。",
  },
  {
    title: "第2条（定義）",
    body: "本規約において使用する用語の定義は以下のとおりとします。\n\n「本サービス」とは、当社が運営するパン福袋マーケットプレイス「PanQ」を指します。\n「ユーザー」とは、本サービスを利用するすべての個人を指します。\n「出品者」とは、本サービスを通じて福袋を販売するパン屋店舗を指します。\n「福袋」とは、出品者が本サービスを通じて販売するパンの詰め合わせ商品を指します。",
  },
  {
    title: "第3条（アカウント登録）",
    body: "ユーザーは、LINE認証を通じて本サービスのアカウントを作成できます。ユーザーは、正確な情報を提供し、常に最新の状態に保つものとします。アカウントの管理責任はユーザーに帰属し、第三者による不正利用について当社は責任を負いません。",
  },
  {
    title: "第4条（福袋の購入）",
    body: "ユーザーは、本サービス上で表示される福袋を購入することができます。購入契約は、ユーザーが「購入する」ボタンをタップし、決済が完了した時点で成立します。福袋の具体的な内容は出品者の裁量により決定され、ユーザーは個別のパンの種類を指定することはできません。",
  },
  {
    title: "第5条（決済・価格）",
    body: "本サービスにおける福袋の価格は、STANDARD（390円）およびPREMIUM（990円）の2種類です。決済はクレジットカードまたはPayPayにて行うものとします。価格には消費税が含まれます。",
  },
  {
    title: "第6条（受取）",
    body: "ユーザーは、注文完了後に表示される受取コードを、指定された受取時間内に出品者の店舗で提示することにより、福袋を受け取るものとします。受取時間内に受取が行われなかった場合、注文はキャンセルとなります。",
  },
  {
    title: "第7条（キャンセル・返金）",
    body: "決済完了後のユーザーによるキャンセルおよび返金には対応いたしません。ただし、出品者の都合により福袋の提供が不可能となった場合は、当社の判断により返金処理を行うことがあります。",
  },
  {
    title: "第8条（ポイント）",
    body: "本サービスにおけるポイントは、ランク表示のみを目的としたものであり、金銭的価値を有しません。ポイントを商品購入の割引に使用することはできません。当社は、事前の通知なくポイント制度の内容を変更または終了できるものとします。",
  },
  {
    title: "第9条（寄付）",
    body: "本サービスでの購入1回あたり3.9円が、こどもホスピスへの支援に充てられます。この寄付はユーザーの購入代金に含まれており、追加の負担は発生しません。寄付先および金額は、当社の判断により変更される場合があります。",
  },
  {
    title: "第10条（禁止事項）",
    body: "ユーザーは、以下の行為を行ってはなりません。\n\n・法令または公序良俗に違反する行為\n・当社または第三者の権利を侵害する行為\n・本サービスの運営を妨害する行為\n・不正な手段によりポイントを取得する行為\n・他のユーザーになりすます行為\n・転売目的での購入\n・その他、当社が不適切と判断する行為",
  },
  {
    title: "第11条（サービスの変更・中断・終了）",
    body: "当社は、ユーザーに事前に通知することなく、本サービスの内容を変更し、または本サービスの提供を中断もしくは終了することができるものとします。当社は、これによりユーザーに生じた損害について責任を負いません。",
  },
  {
    title: "第12条（免責事項）",
    body: "当社は、本サービスを通じて販売される福袋の内容・品質について保証するものではありません。福袋の内容に関する責任は出品者に帰属します。当社は、本サービスの利用により生じた損害について、当社に故意または重過失がある場合を除き、責任を負いません。",
  },
  {
    title: "第13条（個人情報の取り扱い）",
    body: "ユーザーの個人情報は、当社のプライバシーポリシーに基づき適切に取り扱います。",
  },
  {
    title: "第14条（規約の変更）",
    body: "当社は、必要と判断した場合には、ユーザーに通知することなく、本規約を変更できるものとします。変更後の利用規約は、本サービス上に掲示された時点で効力を生じるものとします。",
  },
  {
    title: "第15条（準拠法・管轄裁判所）",
    body: "本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
  },
];

export default function TermsPage() {
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
          利用規約
        </h1>
      </header>

      <div className="px-[var(--spacing-panq-3)] mt-[var(--spacing-panq-3)]">
        <p className="text-[0.75rem] text-panq-on-surface-variant text-right">
          制定日: 2026年3月25日
        </p>

        <div className="mt-[var(--spacing-panq-3)] flex flex-col gap-[var(--spacing-panq-3)]">
          {sections.map((section, i) => (
            <div
              key={section.title}
              className={`rounded-[2rem] p-[var(--spacing-panq-4)] ${
                i % 2 === 0
                  ? "bg-panq-surface-container-lowest shadow-[var(--shadow-ambient)]"
                  : "bg-panq-surface-container-low"
              }`}
            >
              <h2 className="text-[0.9375rem] font-bold text-panq-on-surface">
                {section.title}
              </h2>
              <p className="mt-[var(--spacing-panq-2)] text-[0.875rem] leading-relaxed text-panq-on-surface-variant whitespace-pre-line">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-[var(--spacing-panq-5)] text-[0.8125rem] text-panq-on-surface-variant text-center">
          株式会社QuEST
        </p>
      </div>
    </div>
  );
}
