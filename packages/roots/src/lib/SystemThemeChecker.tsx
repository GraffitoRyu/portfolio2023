"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { systemThemeState } from "@portfolio/util-jotai";

/**
 * 서비스 테마관리 공급자
 * @component
 * @desc
 * - 최상위 layout에서 관리
 */
export default function SystemThemeChecker({
  serviceType = "farm",
  exceptPaths = [],
}: {
  serviceType?: string;
  exceptPaths?: string[];
}) {
  const systemTheme = useAtomValue(systemThemeState);
  const pathname = usePathname();

  // const locale = useLocale();

  useEffect(() => {
    if (!systemTheme[serviceType] || exceptPaths.includes(pathname)) {
      document.documentElement.classList.remove(`dark-mode`);
      return;
    }
    document.documentElement.classList.remove(`dark-mode`);
    if (systemTheme[serviceType] === "dark")
      document.documentElement.classList.add(
        `${systemTheme[serviceType]}-mode`,
      );
  }, [exceptPaths, pathname, serviceType, systemTheme]);

  return null;
}
