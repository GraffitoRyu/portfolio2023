import { createFileRoute, notFound } from "@tanstack/react-router";

import ProjectDetailContainer from "@graffitoryu/ui/product/pages/projects/detail/Container";
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
  return <ProjectDetailContainer />;
}
