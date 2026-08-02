import { createFileRoute } from "@tanstack/react-router";
import { PageSection } from "@graffitoryu/ui";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <PageSection className="hero-section">
      <p className="eyebrow">Frontend Developer</p>
      <h1>작은 차이를 설계해 더 나은 경험을 만듭니다.</h1>
      <p className="hero-description">
        Vite 기반 포트폴리오의 공통 shell과 shared UI 연결을 시작했습니다.
      </p>
    </PageSection>
  );
}
