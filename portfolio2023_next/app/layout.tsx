import { Suspense } from "react";

// meta data
export { metadata } from "@/data/meta";

// root components
import Recoil from "@/components/roots/Recoil";
import ReactQuery from "@/components/roots/ReactQuery";
import ThemeColors from "@/components/roots/ThemeColor";

// components
import PageTemplate from "@/components/roots/PageTemplate";
import TransCover from "@/components/pageTransition/TransCover";
import InitPageCover from "@/components/pageInitialize/InitPageCover";
import Cursor from "@/components/cursor/Cursor";

// styles
import { sans, serif } from "@/styles/fonts/fonts"; // error로 사용할 수 없다
import "@/styles/scss/globals.scss";
import StyledComponentsRegistry from "./lib/registry";
import { HTMLThemeStyle } from "@/styles/styled/components/Page";

// hooks
import { PageLoadEvents } from "@/hooks/PageLoadEvents";
import UpdateDeviceState from "@/hooks/UpdateDeviceState";

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
                <HTMLThemeStyle />
                <UpdateDeviceState />
                <main className="page-container w-full h-full fixed">
                  <PageTemplate>{children}</PageTemplate>
                  <TransCover />
                  <InitPageCover />
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
