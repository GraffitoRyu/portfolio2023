import {
  Link,
  Outlet,
  createRootRoute,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { Button, Footer, Header, PageSection } from "@graffitoryu/ui";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
  errorComponent: RootErrorComponent,
  pendingComponent: RootPendingComponent,
});

function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        본문으로 건너뛰기
      </a>
      <Header className="site-header">
        <Link className="site-brand" to="/" activeOptions={{ exact: true }}>
          Yoo Yongwoo
        </Link>
        <nav aria-label="주요 메뉴">
          <Link
            className="nav-link"
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ "aria-current": "page" }}
          >
            Home
          </Link>
          <Link
            className="nav-link"
            to="/about"
            activeProps={{ "aria-current": "page" }}
          >
            About
          </Link>
        </nav>
      </Header>
      <main id="main-content">{children}</main>
      <Footer className="site-footer">
        <p>© Yoo Yongwoo. Frontend portfolio.</p>
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

function RootPendingComponent() {
  return (
    <AppShell>
      <PageSection className="status-panel" aria-live="polite">
        <p className="eyebrow">Loading</p>
        <h1>페이지를 준비하고 있습니다.</h1>
      </PageSection>
    </AppShell>
  );
}

function RootErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <AppShell>
      <PageSection className="status-panel" role="alert">
        <p className="eyebrow">Error</p>
        <h1>페이지를 불러오지 못했습니다.</h1>
        <p>{error.message}</p>
        <Button className="retry-button" onClick={reset}>
          다시 시도
        </Button>
      </PageSection>
    </AppShell>
  );
}
