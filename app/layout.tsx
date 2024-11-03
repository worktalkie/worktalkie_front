import "@/app/global.css";
import { pretendard } from "@/packages/fonts";
import { Providers } from "@/packages/shared";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WorkTalkie",
  description: "사회 초년생을 위한 AI 통화 연습 서비스",
  themeColor: "#4D4AFE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
