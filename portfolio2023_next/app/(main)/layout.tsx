import { Suspense } from "react";

// meta data
export { metadata, viewport } from "@/data/metadata";

// root components
import JotaiProvider from "@/components/roots/provider/JotaiProvider";
import ReactQueryProvider from "@/components/roots/provider/ReactQueryProvider";
import StyledComponentsRegistry from "../../src/components/roots/lib/StyledRegistry";
import StyledThemeColorProvider from "@/components/roots/provider/StyledThemeColorProvider";
import PageLoadEvents from "@/components/roots/lib/PageLoadEvents";
import ViewportDeviceChecker from "@/components/roots/lib/ViewportDeviceChecker";

// analytics
import { Analytics } from "@vercel/analytics/react";

// components
import TransCover from "@/components/pageFrame/pageTransition/TransCover";
import InitPageCover from "@/components/pageFrame/pageInitialize/InitPageCover";
import Cursor from "@/components/cursor/Cursor";

// styles
import { sans, serif, serif_dm } from "@/styles/fonts";
import "@/styles/scss/globals.scss";
import {
  HTMLThemeStyle,
  StyledMainContainer,
} from "@/styles/styled/components/Page";

// state
import { getServerState } from "@/jotai/server/util.server";

/**
 * 레이아웃; 전역 레이아웃
 * @NextLayout
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = getServerState<SystemLanguageType>("systemLocale", "ko");

  return (
    <html
      lang={locale}
      className={`${sans.variable} ${serif.variable} ${serif_dm.variable}`}
    >
      <body>
        <ReactQueryProvider>
          <JotaiProvider>
            <ViewportDeviceChecker />
            <StyledComponentsRegistry>
              <StyledThemeColorProvider>
                <HTMLThemeStyle />
                <StyledMainContainer>
                  <Suspense fallback={null}>
                    <PageLoadEvents />
                  </Suspense>
                  {children}
                  <TransCover />
                  <InitPageCover />
                </StyledMainContainer>
                <Cursor />
              </StyledThemeColorProvider>
            </StyledComponentsRegistry>
          </JotaiProvider>
        </ReactQueryProvider>
        <Analytics />
      </body>
    </html>
  );
}
