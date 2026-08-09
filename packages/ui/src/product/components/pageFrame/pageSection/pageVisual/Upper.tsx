"use client";

import { useEffect, useRef, useState } from "react";
import { useAtomValue } from "jotai";

// style components
import {
  StyledVisualContainer,
  StyledVisualTitle,
  StyledVisualTitleLine,
} from "@graffitoryu/ui/product/styles/styled/components/PageVisual";

// state
import { pageLoadState } from "@graffitoryu/ui/product/jotai/load.state";
import { useProductRuntime } from "@graffitoryu/ui/product/runtime/ProductRuntime";

// style
import { transTime } from "@graffitoryu/ui/product/styles/styled/preset/transTime";

// hooks
import useVisualUpperAnimation from "@graffitoryu/ui/product/hooks/interaction/sectionVisual/useVisualUpperAnimation";

const visualRevealAdvance = 500;

/**
 * 페이지 본문 공통 요소; Section Visual
 * @component
 * @param {SectionHeaderProps} props
 * @param {string[]} props.title
 */
export default function PageVisualUpper({ title }: { title: string[] }) {
  /** --- 페이지 진입 상태관리 시작 --- */
  const { initComplete, loaded, loadComplete } = useAtomValue(pageLoadState);
  const { pathname } = useProductRuntime();
  const [revealedPathname, setRevealedPathname] = useState<string | null>(null);

  useEffect(() => {
    if (!loaded) return;

    const delay = loadComplete
      ? 0
      : (initComplete
          ? transTime.common.coverUp - 150
          : transTime.common.initComplete + transTime.common.loadComplete) -
        visualRevealAdvance;
    const timer = setTimeout(() => setRevealedPathname(pathname), delay);

    return () => clearTimeout(timer);
  }, [initComplete, loadComplete, loaded, pathname]);

  const visualClassName =
    revealedPathname === pathname ? "trans-title" : "trans-title loading";
  /** --- 페이지 진입 상태관리 끝 --- */

  const visualRef = useRef<HTMLDivElement | null>(null);
  const visualTitleRef = useRef<HTMLHeadingElement | null>(null);

  useVisualUpperAnimation(visualRef.current, visualTitleRef.current);

  return (
    <StyledVisualContainer ref={visualRef}>
      <StyledVisualTitle ref={visualTitleRef} className={visualClassName}>
        <StyledVisualTitleLine className="visual-title stroke-title">
          {title[0]}
        </StyledVisualTitleLine>
        <StyledVisualTitleLine className="visual-title filled-title">
          {title[1]}
        </StyledVisualTitleLine>
      </StyledVisualTitle>
    </StyledVisualContainer>
  );
}
