"use client";

import type {
  RouteCode,
  RoutePath,
  SitemapRouteData,
} from "@graffitoryu/preset-data";
import { useCallback } from "react";
import { useSetAtom } from "jotai";
import { useProductRuntime } from "@graffitoryu/ui/product/runtime/ProductRuntime";

import { pageLoadState } from "@graffitoryu/ui/product/jotai/load.state";
import { transTime } from "@graffitoryu/ui/product/styles/styled/preset/transTime";

export const getRouteCode = (pathname: string): RouteCode =>
  pathname === "/projects" || pathname.startsWith("/projects/")
    ? "projects"
    : "profile";

export const getRoutePath = (pathname: string): RoutePath =>
  getRouteCode(pathname) === "projects" ? "/projects" : "/";

export default function useNavigation() {
  const { pathname, push } = useProductRuntime();
  const setPage = useSetAtom(pageLoadState);

  const navigate = useCallback(
    ({ code, path }: Pick<SitemapRouteData, "code" | "path">) => {
      if (pathname === path) return;

      setPage(prev => ({
        ...prev,
        changePageName: code,
        loaded: false,
      }));

      setTimeout(() => {
        setPage(prev => ({ ...prev, loadComplete: false }));
        push(path);
      }, transTime.common.coverUp);
    },
    [pathname, push, setPage],
  );

  return {
    currentPath: getRoutePath(pathname),
    navigate,
  };
}
