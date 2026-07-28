"use client";

import type {
  RouteCode,
  RoutePath,
  SitemapRouteData,
} from "@graffitoryu/preset-data";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { useSetAtom } from "jotai";

import { pageLoadState } from "@/jotai/load.state";
import { transTime } from "@/styles/styled/preset/transTime";

export const getRouteCode = (pathname: string): RouteCode =>
  pathname === "/projects" || pathname.startsWith("/projects/")
    ? "projects"
    : "profile";

export const getRoutePath = (pathname: string): RoutePath =>
  getRouteCode(pathname) === "projects" ? "/projects" : "/";

export default function useNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const setPage = useSetAtom(pageLoadState);

  const navigate = useCallback(
    ({ code, path }: Pick<SitemapRouteData, "code" | "path">) => {
      if (pathname === path) return;

      setPage(prev => ({
        ...prev,
        changePageName: code,
        loaded: false,
        loadComplete: false,
      }));

      setTimeout(() => {
        router.push(path, { scroll: false });
      }, transTime.common.coverUp);
    },
    [pathname, router, setPage],
  );

  return {
    currentPath: getRoutePath(pathname),
    navigate,
  };
}
