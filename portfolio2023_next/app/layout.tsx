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

// fonts
export const sans = Noto_Sans_KR({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--sans-kr",
  display: "swap",
});
export const serif = Noto_Serif_KR({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--serif-kr",
  display: "swap",
});

// styles
import StyledComponentsRegistry from "./lib/registry";
import "@/styles/scss/globals.scss";
import { GlobalBodyStyle } from "@/styles/styled/body";
import PageHeader from "@/components/pageHeader/PageHeader";

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
            <StyledComponentsRegistry>
              <GlobalBodyStyle />
              <div className="page-container relative">
                <PageHeader />
                <PageTemplate>{children}</PageTemplate>
                <Cursor />
              </div>
            </StyledComponentsRegistry>
          </ReactQuery>
        </Recoil>
      </body>
    </html>
  );
}
