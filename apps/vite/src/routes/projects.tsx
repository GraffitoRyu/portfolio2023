import { Outlet, createFileRoute } from "@tanstack/react-router";

import ProjectsPage from "@/components/ProjectsPage";
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
  const projects = Route.useLoaderData();

  return (
    <>
      <ProjectsPage projects={projects} />
      <Outlet />
    </>
  );
}
