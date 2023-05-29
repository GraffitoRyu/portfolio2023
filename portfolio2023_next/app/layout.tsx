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
import { sans, serif } from "@/styles/fonts/fonts";
import StyledComponentsRegistry from "./lib/registry";
import "@/styles/scss/globals.scss";
import { GlobalBodyStyle } from "@/styles/styled/body";
import { Suspense } from "react";
import { NavigationEvents } from "@/components/transCover/TransEnter";
import TransCover from "@/components/transCover/TransCover";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <html lang="ko" className={`${sans.variable} ${serif.variable}`}>
        <body>
          <Recoil>
            <ReactQuery>
              <ThemeColors>
                <GlobalBodyStyle />
                <div className="page-container w-full h-full relative">
                  <PageTemplate>{children}</PageTemplate>
                  {/* <TransCover /> */}
                  <Suspense fallback={null}>
                    <NavigationEvents />
                  </Suspense>
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
