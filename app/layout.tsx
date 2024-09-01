import "@/app/global.css";
import { pretendard } from "@/packages";
import { Providers } from "@/packages/shared";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WorkTalkie",
  description: "사회 초년생을 위한 AI 통화 연습 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
