import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
export { metadata } from "@/data/meta";
import PageHeader from "@/components/common/PageHeader";
import "@/styles/globals.scss";
import PageFooter from "@/components/common/PageFooter";

const notosanskr = Noto_Sans_KR({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
const notoserifkr = Noto_Serif_KR({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="">
        <PageHeader />
        {children}
        <PageFooter />
      </body>
    </html>
  );
}
