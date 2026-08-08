import { Suspense } from "react";

// meta data
export { metadata, viewport } from "@/data/metadata";

// root components
import JotaiProvider from "@graffitoryu/ui/product/components/roots/provider/JotaiProvider";
import ReactQueryProvider from "@graffitoryu/ui/product/components/roots/provider/ReactQueryProvider";
import StyledComponentsRegistry from "../../src/components/roots/lib/StyledRegistry";
import ProductRuntimeAdapter from "../../src/components/roots/provider/ProductRuntimeAdapter";
import StyledThemeColorProvider from "@graffitoryu/ui/product/components/roots/provider/StyledThemeColorProvider";
import PageLoadEvents from "@graffitoryu/ui/product/components/roots/lib/PageLoadEvents";
import ViewportSizeObserver from "@graffitoryu/ui/product/components/roots/lib/ViewportSizeObserver";

// vercel analytics
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// components
import TransCover from "@graffitoryu/ui/product/components/pageFrame/pageTransition/TransCover";
import InitPageCover from "@graffitoryu/ui/product/components/pageFrame/pageInitialize/InitPageCover";
import Cursor from "@graffitoryu/ui/product/components/cursor/Cursor";

// styles
import { sans, serif, serif_dm } from "@/styles/fonts";
import "@graffitoryu/ui/product/styles/globals.scss";
import {
  HTMLThemeStyle,
  StyledMainContainer,
} from "@graffitoryu/ui/product/styles/styled/components/Page";

/**
 * 레이아웃; 전역 레이아웃
 * @NextLayout
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${sans.variable} ${serif.variable} ${serif_dm.variable}`}
    >
      <body>
        <ReactQueryProvider>
          <ProductRuntimeAdapter>
            <JotaiProvider>
              <ViewportSizeObserver />
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
          </ProductRuntimeAdapter>
        </ReactQueryProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
