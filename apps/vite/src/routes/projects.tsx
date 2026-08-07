import { Outlet, createFileRoute } from "@tanstack/react-router";

import ProjectsContainer from "@graffitoryu/ui/product/pages/projects/Container";
import {
  RouteError,
  RouteNotFound,
  RoutePending,
} from "@/components/RouteStatus";
import { source } from "@/data/source";

export const Route = createFileRoute("/projects")({
  loader: () => source.getProjects(),
  component: ProjectsComponent,
  errorComponent: RouteError,
  pendingComponent: RoutePending,
  notFoundComponent: RouteNotFound,
});

function ProjectsComponent() {
  return (
    <>
      <ProjectsContainer />
      <Outlet />
    </>
  );
}
