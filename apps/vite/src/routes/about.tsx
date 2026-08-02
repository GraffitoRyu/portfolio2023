import { createFileRoute } from "@tanstack/react-router";
import { PageSection } from "@graffitoryu/ui";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <PageSection className="content-section">
      <p className="eyebrow">About</p>
      <h1>공통 기반 위에서 포트폴리오를 확장합니다.</h1>
      <p>
        이 화면은 Vite app shell의 navigation과 root outlet을 확인하기 위한 최소
        경로입니다.
      </p>
    </PageSection>
  );
}
