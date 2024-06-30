import { ReactNode, Suspense } from "react";

// meta data
export { metadata, viewport } from "@/data/metadata";

// root components
import JotaiProvider from "@/components/roots/provider/JotaiProvider";
import ReactQueryProvider from "@/components/roots/provider/ReactQueryProvider";
import StyledComponentsRegistry from "../src/components/roots/lib/StyledRegistry";
import StyledThemeColorProvider from "@/components/roots/provider/StyledThemeColorProvider";
import PageLoadEvents from "@/components/roots/lib/PageLoadEvents";

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
import {
  HTMLThemeStyle,
  StyledMainContainer,
} from "@/styles/styled/components/Page";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="ko"
      className={`${sans.variable} ${serif.variable} ${serif_dm.variable}`}
    >
      <body>
        <JotaiProvider>
          <ReactQueryProvider>
            <StyledComponentsRegistry>
              <StyledThemeColorProvider>
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
              </StyledThemeColorProvider>
            </StyledComponentsRegistry>
          </ReactQueryProvider>
        </JotaiProvider>
        <Analytics />
      </body>
    </html>
  );
}
