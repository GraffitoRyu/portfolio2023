// meta data
export { metadata } from "@/data/meta";

// common template
import PageTemplate from "@/components/_templates/PageTemplate";

// components
import Recoil from "@/components/roots/Recoil";
import ReactQuery from "@/components/roots/ReactQuery";
import ThemeColors from "@/components/roots/ThemeColor";
import Cursor from "@/components/cursor/Cursor";

// styles
import StyledComponentsRegistry from "./lib/registry";
import "@/styles/scss/globals.scss";
import { GlobalBodyStyle } from "@/styles/styled/body";
import dynamic from "next/dynamic";
import { sans, serif } from "@/styles/fonts/fonts";

const TransCover = dynamic(() => import("@/components/transCover/TransCover"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <html lang="ko" className={`${sans.variable} ${serif.variable}`}>
        <head></head>
        <body>
          <Recoil>
            <ReactQuery>
              <ThemeColors>
                <GlobalBodyStyle />
                <div className="page-container w-full h-full relative">
                  <PageTemplate>{children}</PageTemplate>
                  {/* <TransCover /> */}
                  <Cursor />
                </div>
              </ThemeColors>
            </ReactQuery>
          </Recoil>
        </body>
      </html>
    </StyledComponentsRegistry>
  );
}
