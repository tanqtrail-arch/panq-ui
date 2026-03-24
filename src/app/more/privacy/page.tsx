import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "1. 事業者情報",
    body: "事業者名: 株式会社QuEST（QuEST Inc.）\n所在地: 〒145-0071 東京都大田区田園調布2丁目40-8\nサービス名: PanQ",
  },
  {
    title: "2. 取得する個人情報",
    body: "当社は、本サービスの提供にあたり、以下の個人情報を取得します。\n\n・LINEアカウント情報（ユーザーID、表示名、プロフィール画像）\n・氏名、メールアドレス（アカウント連携時）\n・購入履歴および受取履歴\n・位置情報（店舗検索時、ユーザーの許可がある場合のみ）\n・お問い合わせ内容\n・アクセスログ、Cookie情報、端末情報",
  },
  {
    title: "3. 利用目的",
    body: "取得した個人情報は、以下の目的で利用します。\n\n・本サービスの提供、運営、維持および改善\n・ユーザー認証およびアカウント管理\n・福袋の購入処理および受取確認\n・ポイント・ランクの管理\n・ユーザーへの通知・お知らせの配信\n・お問い合わせへの対応\n・利用状況の分析およびサービス改善\n・不正利用の防止",
  },
  {
    title: "4. 第三者提供",
    body: "当社は、以下の場合を除き、ユーザーの個人情報を第三者に提供しません。\n\n・ユーザーの同意がある場合\n・法令に基づく場合\n・人の生命、身体または財産の保護のために必要がある場合\n・業務委託先に対して、利用目的の達成に必要な範囲で提供する場合（この場合、適切な監督を行います）",
  },
  {
    title: "5. 業務委託先",
    body: "当社は、本サービスの運営にあたり、以下の業務を外部に委託する場合があります。\n\n・決済処理（クレジットカード会社、PayPay株式会社）\n・サーバー・インフラ運用（Cloudflare, Inc.）\n・メッセージ配信（LINEヤフー株式会社）\n\n委託先に対しては、個人情報の適切な管理を求め、必要な監督を行います。",
  },
  {
    title: "6. 安全管理措置",
    body: "当社は、個人情報の漏洩、滅失または毀損の防止のため、以下の安全管理措置を講じます。\n\n・通信の暗号化（SSL/TLS）\n・アクセス権限の管理\n・サーバーのセキュリティ対策\n・従業者への個人情報保護教育",
  },
  {
    title: "7. Cookieの使用",
    body: "本サービスでは、ユーザー体験の向上およびサービス改善のためにCookieを使用します。ユーザーはブラウザの設定によりCookieの受け入れを拒否できますが、その場合、本サービスの一部機能が利用できなくなる場合があります。",
  },
  {
    title: "8. 個人情報の開示・訂正・削除",
    body: "ユーザーは、当社が保有する自己の個人情報について、開示、訂正、削除を請求することができます。ご請求は、LINEアカウント（@PanQ）よりお問い合わせください。本人確認のうえ、合理的な期間内に対応いたします。",
  },
  {
    title: "9. プライバシーポリシーの変更",
    body: "当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、本サービス上に掲示された時点で効力を生じるものとします。",
  },
  {
    title: "10. お問い合わせ",
    body: "個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。\n\n株式会社QuEST\n〒145-0071 東京都大田区田園調布2丁目40-8\nLINEアカウント: @PanQ",
  },
];

export default function PrivacyPage() {
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
          プライバシーポリシー
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
