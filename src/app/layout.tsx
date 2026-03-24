import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PanQ! — おたのしみパン福袋",
  description: "毎日届くパン屋さんの福袋。390円から、ありがとうの気持ちを届けます。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${plusJakartaSans.variable} ${notoSansJP.variable}`}
    >
      <body className="min-h-dvh bg-panq-surface text-panq-on-surface font-sans">
        {/* Mobile-first constraint: max 430px centered */}
        <div className="relative mx-auto min-h-dvh max-w-[430px] bg-panq-surface">
          {children}
        </div>
      </body>
    </html>
  );
}
