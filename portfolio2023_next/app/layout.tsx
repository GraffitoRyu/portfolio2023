// meta data
export { metadata } from "@/data/meta";

// fonts
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";

// common template
import PageTemplate from "@/templates/PageTemplate";

// components
import ReactQuery from "@/components/roots/ReactQuery";
import Recoil from "@/components/roots/Recoil";
import Cursor from "@/components/cursor/Cursor";

// styles
import "@/styles/globals.scss";

export const sans = Noto_Sans_KR({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
export const serif = Noto_Serif_KR({
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
      <body>
        <Recoil>
          <ReactQuery>
            <PageTemplate>{children}</PageTemplate>
            <Cursor />
          </ReactQuery>
        </Recoil>
      </body>
    </html>
  );
}
