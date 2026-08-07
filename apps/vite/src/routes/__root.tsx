import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import JotaiProvider from "@graffitoryu/ui/product/components/roots/provider/JotaiProvider";
import ReactQueryProvider from "@graffitoryu/ui/product/components/roots/provider/ReactQueryProvider";
import StyledThemeColorProvider from "@graffitoryu/ui/product/components/roots/provider/StyledThemeColorProvider";
import PageLoadEvents from "@graffitoryu/ui/product/components/roots/lib/PageLoadEvents";
import ViewportSizeObserver from "@graffitoryu/ui/product/components/roots/lib/ViewportSizeObserver";
import TransCover from "@graffitoryu/ui/product/components/pageFrame/pageTransition/TransCover";
import InitPageCover from "@graffitoryu/ui/product/components/pageFrame/pageInitialize/InitPageCover";
import Cursor from "@graffitoryu/ui/product/components/cursor/Cursor";
import {
  HTMLThemeStyle,
  StyledMainContainer,
} from "@graffitoryu/ui/product/styles/styled/components/Page";
import {
  RouteError,
  RouteNotFound,
  RoutePending,
} from "@/components/RouteStatus";
import ProductRuntimeAdapter from "@/ProductRuntimeAdapter";

export const Route = createRootRoute({
  component: RootComponent,
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  pendingComponent: RoutePending,
});

function RootComponent() {
  return (
    <ReactQueryProvider>
      <ProductRuntimeAdapter>
        <JotaiProvider>
          <ViewportSizeObserver />
          <StyledThemeColorProvider>
            <HTMLThemeStyle />
            <StyledMainContainer>
              <PageLoadEvents />
              <Outlet />
              <TransCover />
              <InitPageCover />
              {/* Vite replaces this built-in flag at compile time. */}
              {/* eslint-disable-next-line turbo/no-undeclared-env-vars */}
              {import.meta.env.DEV ? (
                <TanStackRouterDevtools position="bottom-right" />
              ) : null}
            </StyledMainContainer>
            <Cursor />
          </StyledThemeColorProvider>
        </JotaiProvider>
      </ProductRuntimeAdapter>
    </ReactQueryProvider>
  );
}
