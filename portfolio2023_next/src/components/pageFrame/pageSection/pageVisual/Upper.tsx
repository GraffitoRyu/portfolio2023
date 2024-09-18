"use client";

import { useMemo, useRef } from "react";
import { useAtomValue } from "jotai";

// style components
import {
  StyledVisualContainer,
  StyledVisualTitle,
  StyledVisualTitleLine,
} from "@/styles/styled/components/PageVisual";

// state
import { pageLoadState } from "@/jotai/load.state";

// hooks
import useVisualUpperAnimation from "@/hooks/interaction/sectionVisual/useVisualUpperAnimation";

/**
 * 페이지 본문 공통 요소; Section Visual
 * @component
 * @param {SectionHeaderProps} props
 * @param {string[]} props.title
 */
export default function PageVisualUpper({ title }: { title: string[] }) {
  /** --- 페이지 진입 상태관리 시작 --- */
  const { loadComplete } = useAtomValue(pageLoadState);
  const loaded = useMemo(
    () => (loadComplete ? "trans-title" : "trans-title loading"),
    [loadComplete],
  );
  /** --- 페이지 진입 상태관리 끝 --- */

  const visualRef = useRef<HTMLDivElement | null>(null);
  const visualTitleRef = useRef<HTMLHeadingElement | null>(null);

  const { fixed } = useVisualUpperAnimation(
    visualRef.current,
    visualTitleRef.current,
    loadComplete,
  );

  return (
    <StyledVisualContainer ref={visualRef}>
      <StyledVisualTitle ref={visualTitleRef} className={`${loaded} ${fixed}`}>
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
