import { createFileRoute, notFound } from "@tanstack/react-router";

import ProjectDetailPage from "@/components/ProjectDetailPage";
import {
  RouteError,
  RouteNotFound,
  RoutePending,
} from "@/components/RouteStatus";
import { source } from "@/data/source";

export const Route = createFileRoute("/projects/$category")({
  loader: async ({ params }) => {
    const project = await source.getProject(params.category);
    if (!project) throw notFound();
    return project;
  },
  component: ProjectDetailRouteComponent,
  errorComponent: RouteError,
  pendingComponent: RoutePending,
  notFoundComponent: RouteNotFound,
});

function ProjectDetailRouteComponent() {
  const project = Route.useLoaderData();

  return <ProjectDetailPage project={project} />;
}
