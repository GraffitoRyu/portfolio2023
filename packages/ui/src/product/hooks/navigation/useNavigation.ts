"use client";

import type {
  RouteCode,
  RoutePath,
  SitemapRouteData,
} from "@graffitoryu/preset-data";
import { useCallback, useEffect, useRef } from "react";
import { useAtom } from "jotai";
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
  const [{ loaded }, setPage] = useAtom(pageLoadState);
  const navigationTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(
    () => () => {
      if (navigationTimer.current !== undefined)
        clearTimeout(navigationTimer.current);
    },
    [],
  );

  const navigate = useCallback(
    ({ code, path }: Pick<SitemapRouteData, "code" | "path">) => {
      if (pathname === path || !loaded || navigationTimer.current !== undefined)
        return;

      setPage(prev => ({
        ...prev,
        changePageName: code,
        loaded: false,
      }));

      navigationTimer.current = setTimeout(() => {
        navigationTimer.current = undefined;
        window.scrollTo(0, 0);
        setPage(prev => ({ ...prev, loadComplete: false }));
        push(path);
      }, transTime.common.coverUp);
    },
    [loaded, pathname, push, setPage],
  );

  return {
    currentPath: getRoutePath(pathname),
    navigate,
  };
}
