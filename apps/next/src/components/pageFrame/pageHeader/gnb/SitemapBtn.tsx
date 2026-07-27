"use client";

import type { SitemapRouteData } from "@graffitoryu/preset-data";
import { useState } from "react";

// style components
import { StyledSitemapLink } from "@/styles/styled/components/Gnb";

import usePortfolioNavigation from "@/hooks/navigation/usePortfolioNavigation";

export default function SitemapBtn(route: SitemapRouteData) {
  const { name, path } = route;
  const { currentPath, navigate } = usePortfolioNavigation();
  // 마우스오버 인터렉션 상태 관리
  const [hover, setHover] = useState<string>("");

  return (
    <StyledSitemapLink
      type="button"
      className={`${currentPath === path ? "now" : ""} ${hover}`}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
      onClick={() => navigate(route)}
      aria-label={`포트폴리오 페이지 ${name}로 이동하기`}
    >
      <span>{name}</span>
    </StyledSitemapLink>
  );
}
