import { createFileRoute } from "@tanstack/react-router";
import ProfilePage from "@/components/ProfilePage";
import {
  RouteError,
  RouteNotFound,
  RoutePending,
} from "@/components/RouteStatus";
import { source } from "@/data/source";

export const Route = createFileRoute("/")({
  component: HomeComponent,
  errorComponent: RouteError,
  loader: () => source.getProfile(),
  notFoundComponent: RouteNotFound,
  pendingComponent: RoutePending,
});

function HomeComponent() {
  const profile = Route.useLoaderData();

  return <ProfilePage {...profile} />;
}
