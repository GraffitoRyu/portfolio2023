import { ReactNode, Suspense } from "react";

// meta data
export { metadata, viewport } from "@/data/metadata";

// root components
import JotaiProvider from "@/components/roots/JotaiProvider";
import ReactQueryContainer from "@/components/roots/ReactQuery";
import ThemeColors from "@/components/roots/ThemeColor";

// analytics
import { Analytics } from "@vercel/analytics/react";

// components
import PageTemplate from "@/components/roots/PageTemplate";
import TransCover from "@/components/pageFrame/pageTransition/TransCover";
import InitPageCover from "@/components/pageFrame/pageInitialize/InitPageCover";
import Cursor from "@/components/cursor/Cursor";

// styles
import { sans, serif, serif_dm } from "@/styles/fonts/fonts";
import "@/styles/scss/globals.scss";
import StyledComponentsRegistry from "../src/components/roots/StyledComponentsRegistry";
import {
  HTMLThemeStyle,
  StyledMainContainer,
} from "@/styles/styled/components/Page";

// hooks
import { PageLoadEvents } from "@/hooks/route/PageLoadEvents";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="ko"
      className={`${sans.variable} ${serif.variable} ${serif_dm.variable}`}
    >
      <body>
        <JotaiProvider>
          <ReactQueryContainer>
            <StyledComponentsRegistry>
              <ThemeColors>
                <HTMLThemeStyle />
                <StyledMainContainer>
                  <PageTemplate>{children}</PageTemplate>
                  <TransCover />
                  <InitPageCover />
                  <Cursor />
                  <Suspense fallback={null}>
                    <PageLoadEvents />
                  </Suspense>
                </StyledMainContainer>
              </ThemeColors>
            </StyledComponentsRegistry>
          </ReactQueryContainer>
        </JotaiProvider>
        <Analytics />
      </body>
    </html>
  );
}
