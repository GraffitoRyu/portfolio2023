import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { sitemap } from "@graffitoryu/preset-data";
import { Footer, Header } from "@graffitoryu/ui";
import type { ReactNode } from "react";
import {
  RouteError,
  RouteNotFound,
  RoutePending,
} from "@/components/RouteStatus";
import AppInteractionBoundary from "@/components/AppInteractionBoundary";

export const Route = createRootRoute({
  component: RootComponent,
  errorComponent: RouteError,
  notFoundComponent: RouteNotFound,
  pendingComponent: RoutePending,
});

const portfolioRoutes = sitemap.portfolio.filter(item => item.kind === "route");

function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        본문으로 건너뛰기
      </a>
      <Header className="site-header">
        <Link className="site-brand" to="/" viewTransition>
          류대현
        </Link>
        <nav aria-label="주요 메뉴">
          {portfolioRoutes.map(route => (
            <Link
              activeOptions={{ exact: route.path === "/" }}
              activeProps={{ "aria-current": "page" }}
              className="nav-link"
              key={route.key}
              to={route.path}
              viewTransition
            >
              {route.name}
            </Link>
          ))}
        </nav>
      </Header>
      <main id="main-content">
        <AppInteractionBoundary>{children}</AppInteractionBoundary>
      </main>
      <Footer className="site-footer">
        <p>© 류대현. Frontend portfolio.</p>
      </Footer>
    </div>
  );
}

function RootComponent() {
  return (
    <AppShell>
      <Outlet />
      {/* Vite replaces this built-in flag at compile time. */}
      {/* eslint-disable-next-line turbo/no-undeclared-env-vars */}
      {import.meta.env.DEV ? (
        <TanStackRouterDevtools position="bottom-right" />
      ) : null}
    </AppShell>
  );
}
