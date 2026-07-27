"use client";

import type {
  PortfolioRouteCode,
  PortfolioRoutePath,
  SitemapRouteData,
} from "@graffitoryu/preset-data";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { useSetAtom } from "jotai";

import { pageLoadState } from "@/jotai/load.state";
import { transTime } from "@/styles/styled/preset/transTime";

export const getPortfolioRouteCode = (pathname: string): PortfolioRouteCode =>
  pathname === "/projects" || pathname.startsWith("/projects/")
    ? "projects"
    : "profile";

export const getPortfolioRoutePath = (pathname: string): PortfolioRoutePath =>
  getPortfolioRouteCode(pathname) === "projects" ? "/projects" : "/";

export default function usePortfolioNavigation() {
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
    currentPath: getPortfolioRoutePath(pathname),
    navigate,
  };
}
