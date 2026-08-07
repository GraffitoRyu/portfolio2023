import { createFileRoute } from "@tanstack/react-router";
import ProfileContainer from "@graffitoryu/ui/product/pages/profile/Container";
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
  return <ProfileContainer />;
}
