import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button, PageSection } from "@graffitoryu/ui";

export function RoutePending() {
  return (
    <PageSection className="status-panel" aria-live="polite">
      <p className="eyebrow">Loading</p>
      <h1>페이지를 준비하고 있습니다.</h1>
    </PageSection>
  );
}

export function RouteError({ error, reset }: ErrorComponentProps) {
  return (
    <PageSection className="status-panel" role="alert">
      <p className="eyebrow">Error</p>
      <h1>페이지를 불러오지 못했습니다.</h1>
      <p>{error.message}</p>
      <Button className="retry-button" onClick={reset}>
        다시 시도
      </Button>
    </PageSection>
  );
}

export function RouteNotFound() {
  return (
    <PageSection className="status-panel">
      <p className="eyebrow">404</p>
      <h1>요청한 페이지를 찾을 수 없습니다.</h1>
      <Link className="status-link" to="/">
        프로필로 돌아가기
      </Link>
    </PageSection>
  );
}
