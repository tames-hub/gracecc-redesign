import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "은혜의교회 | Scars into Stars",
  description: "예수님의 온전한 제자되어, 상처가 별이되는 은혜의 공동체",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-800 antialiased">{children}</body>
    </html>
  );
}
