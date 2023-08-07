import { ReactNode, Suspense } from "react";

// meta data
export { metadata } from "@/data/meta";

// root components
import ReactQueryContainer from "@/components/roots/ReactQuery";
import RecoilContainer from "@/components/roots/Recoil";
import ThemeColors from "@/components/roots/ThemeColor";

// analytics
import { Analytics } from "@vercel/analytics/react";

// components
import PageTemplate from "@/components/roots/PageTemplate";
import TransCover from "@/components/pageTransition/TransCover";
import InitPageCover from "@/components/pageInitialize/InitPageCover";
import Cursor from "@/components/cursor/Cursor";

// styles
import { sans, serif, serif_dm } from "@/styles/fonts/fonts"; // error로 사용할 수 없다
import "@/styles/scss/globals.scss";
import StyledComponentsRegistry from "./lib/registry";
import { HTMLThemeStyle, PageContainer } from "@/styles/styled/components/Page";

// hooks
import { PageLoadEvents } from "@/hooks/PageLoadEvents";
import UpdateStateByResize from "@/hooks/UpdateStateByResize";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="ko"
      className={`${sans.variable} ${serif.variable} ${serif_dm.variable}`}
    >
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
        <Analytics />
      </body>
    </html>
  );
}
