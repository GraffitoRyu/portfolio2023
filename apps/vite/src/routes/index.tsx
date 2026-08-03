import { createFileRoute } from "@tanstack/react-router";
import { PageSection } from "@graffitoryu/ui";
import {
  RouteError,
  RouteNotFound,
  RoutePending,
} from "@/components/RouteStatus";

export const Route = createFileRoute("/")({
  component: HomeComponent,
  errorComponent: RouteError,
  pendingComponent: RoutePending,
  notFoundComponent: RouteNotFound,
});

function HomeComponent() {
  return (
    <PageSection className="hero-section">
      <p className="eyebrow">Frontend Developer</p>
      <h1>작은 차이를 설계해 더 나은 경험을 만듭니다.</h1>
      <p className="hero-description">
        Vite 포트폴리오의 프로필 화면은 V-03에서 이 경로에 연결됩니다.
      </p>
    </PageSection>
  );
}
