"use client";

import type {
  RouteCode,
  RoutePath,
  SitemapRouteData,
} from "@graffitoryu/preset-data";
import { useCallback, useRef } from "react";
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
  // 상세 route 교체로 hook이 unmount되어도 요청된 페이지 이동은 완료한다.
  const navigationTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

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
