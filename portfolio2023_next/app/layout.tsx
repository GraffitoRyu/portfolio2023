import { Suspense } from "react";

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
// import { sans, serif } from "@/styles/fonts/fonts";
import StyledComponentsRegistry from "./lib/registry";
import "@/styles/scss/globals.scss";
import { GlobalBodyStyle } from "@/styles/styled/body";

// util components
import { PageLoadEvents } from "@/hooks/PageLoadEvents";
// import TransCover from "@/components/pageTransition/TransCover";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <html lang="ko">
        {/* <html lang="ko" className={`${sans.variable} ${serif.variable}`}> */}
        <head>
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&family=Noto+Serif+KR:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <Recoil>
            <ReactQuery>
              <ThemeColors>
                <GlobalBodyStyle />
                <main className="page-container w-full h-full relative">
                  <PageTemplate>{children}</PageTemplate>
                  <Suspense fallback={null}>
                    <PageLoadEvents />
                  </Suspense>
                  <Cursor />
                </main>
              </ThemeColors>
            </ReactQuery>
          </Recoil>
        </body>
      </html>
    </StyledComponentsRegistry>
  );
}
