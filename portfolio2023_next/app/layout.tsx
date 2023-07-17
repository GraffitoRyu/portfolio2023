import { ReactNode, Suspense } from "react";

// meta data
export { metadata } from "@/data/meta";

// root components
import ReactQueryContainer from "@/components/roots/ReactQuery";
import RecoilContainer from "@/components/roots/Recoil";
import ThemeColors from "@/components/roots/ThemeColor";

// components
import PageTemplate from "@/components/roots/PageTemplate";
import TransCover from "@/components/pageTransition/TransCover";
import InitPageCover from "@/components/pageInitialize/InitPageCover";
import Cursor from "@/components/cursor/Cursor";

// styles
import { sans, serif_dm } from "@/styles/fonts/fonts"; // error로 사용할 수 없다
import "@/styles/scss/globals.scss";
import StyledComponentsRegistry from "./lib/registry";
import { HTMLThemeStyle, PageContainer } from "@/styles/styled/components/Page";

// hooks
import { PageLoadEvents } from "@/hooks/PageLoadEvents";
import UpdateStateByResize from "@/hooks/UpdateStateByResize";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={`${sans.variable} ${serif_dm.variable}`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@100;300;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <RecoilContainer>
          <ReactQueryContainer>
            <StyledComponentsRegistry>
              <ThemeColors>
                <HTMLThemeStyle />
                <UpdateStateByResize />
                <PageContainer>
                  <PageTemplate>{children}</PageTemplate>
                  <TransCover />
                  <InitPageCover />
                  <Cursor />
                  <Suspense fallback={null}>
                    <PageLoadEvents />
                  </Suspense>
                </PageContainer>
              </ThemeColors>
            </StyledComponentsRegistry>
          </ReactQueryContainer>
        </RecoilContainer>
      </body>
    </html>
  );
}
