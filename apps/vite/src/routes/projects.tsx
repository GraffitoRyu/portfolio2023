import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { PageSection } from "@graffitoryu/ui";
import {
  RouteError,
  RouteNotFound,
  RoutePending,
} from "@/components/RouteStatus";

export const Route = createFileRoute("/projects")({
  component: ProjectsComponent,
  errorComponent: RouteError,
  pendingComponent: RoutePending,
  notFoundComponent: RouteNotFound,
});

function ProjectsComponent() {
  return (
    <>
      <PageSection className="content-section">
        <p className="eyebrow">Projects</p>
        <h1>프로젝트 목록 경로를 준비했습니다.</h1>
        <p>
          실제 목록은 V-04에서 연결합니다. 지금은 canonical detail URL을 확인할
          수 있습니다.
        </p>
        <Link
          className="placeholder-link"
          to="/projects/$category"
          params={{ category: "teamsolution" }}
        >
          프로젝트 상세 경로 확인
        </Link>
      </PageSection>
      <Outlet />
    </>
  );
}
