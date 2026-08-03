import { Link, createFileRoute } from "@tanstack/react-router";
import { PageSection } from "@graffitoryu/ui";
import {
  RouteError,
  RouteNotFound,
  RoutePending,
} from "@/components/RouteStatus";

export const Route = createFileRoute("/projects/$category")({
  component: ProjectDetailRouteComponent,
  errorComponent: RouteError,
  pendingComponent: RoutePending,
  notFoundComponent: RouteNotFound,
});

function ProjectDetailRouteComponent() {
  const { category } = Route.useParams();

  return (
    <PageSection className="detail-route" aria-labelledby="detail-route-title">
      <p className="eyebrow">Project detail route</p>
      <h2 id="detail-route-title">{category}</h2>
      <p>실제 프로젝트 상세 화면과 데이터 조회는 V-04에서 연결합니다.</p>
      <Link className="placeholder-link" to="/projects">
        프로젝트 목록으로 닫기
      </Link>
    </PageSection>
  );
}
