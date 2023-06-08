import { Suspense } from "react";

// meta data
export { metadata } from "@/data/meta";

// root components
import Recoil from "@/components/roots/Recoil";
import ReactQuery from "@/components/roots/ReactQuery";
import ThemeColors from "@/components/roots/ThemeColor";

// components
import PageTemplate from "@/components/roots/PageTemplate";
import Cursor from "@/components/cursor/Cursor";

// styles
import { sans, serif } from "@/styles/fonts/fonts";
import "@/styles/scss/globals.scss";
import StyledComponentsRegistry from "./lib/registry";
import { GlobalBodyStyle } from "@/styles/styled/components/Page";

// hooks
import { PageLoadEvents } from "@/hooks/PageLoadEvents";
import TransCover from "@/components/pageTransition/TransCover";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <Recoil>
          <ReactQuery>
            <StyledComponentsRegistry>
              <ThemeColors>
                <GlobalBodyStyle />
                <main className="page-container w-full h-full fixed">
                  <PageTemplate>{children}</PageTemplate>
                  <TransCover />
                  <Cursor />
                  <Suspense fallback={null}>
                    <PageLoadEvents />
                  </Suspense>
                </main>
              </ThemeColors>
            </StyledComponentsRegistry>
          </ReactQuery>
        </Recoil>
      </body>
    </html>
  );
}
