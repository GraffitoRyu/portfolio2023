"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useAtomValue } from "jotai";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// style components
import {
  StyledVisualContainer,
  StyledVisualTitle,
  StyledVisualTitleLine,
} from "@/styles/styled/components/PageVisual";

// style
import { transTime } from "@/styles/styled/preset/transTime";

// state
import { pageLoadState } from "@/jotai/load.state";
import { scrollPageSectionRefState } from "@/jotai/interaction/scroll.state";

// hooks
import useCheckView from "@/hooks/layout/useCheckView";
import useScrollAnimation from "@/hooks/interaction/useScrollAnimation";

/**
 * 페이지 본문 공통 요소; Section Visual
 * @component
 * @param {SectionHeaderProps} props
 * @param {string[]} props.title
 */
export default function PageVisual({ title }: { title: string[] }) {
  const { loadComplete } = useAtomValue(pageLoadState);
  const [loaded, setLoaded] = useState<string>("loading");
  const [fixed, setFixed] = useState<string>("");

  useEffect(() => {
    if (loadComplete) {
      setLoaded("trans-title loaded");
      setTimeout(() => {
        setLoaded("");
      }, transTime.visual.fadeInUp);
    } else setLoaded("trans-title loading");
  }, [loadComplete]);

  const scrollContainer = useAtomValue(scrollPageSectionRefState("container"));
  const visualRef = useRef<HTMLDivElement | null>(null);
  const visualTitleRef = useRef<HTMLHeadingElement | null>(null);

  const { isCustomMobileView } = useCheckView(1024);

  const parallaxSpeed = useCallback(
    () =>
      isCustomMobileView
        ? 0
        : -0.05 * ScrollTrigger.maxScroll(scrollContainer as HTMLElement),
    [isCustomMobileView, scrollContainer],
  );

  const triggerStart = useCallback(
    (): number => visualTitleRef.current?.offsetTop || 0,
    [],
  );
  const triggerEnd = useCallback(
    () => (isCustomMobileView ? 0 : "center"),
    [isCustomMobileView],
  );

  const targetEnd = useCallback(
    () =>
      isCustomMobileView
        ? visualTitleRef.current?.offsetHeight || 0
        : visualRef.current?.offsetHeight || 0,
    [isCustomMobileView],
  );

  const parallax = useCallback((): ScrollTriggerAnimationOptions => {
    return {
      opacity: 0,
      y: () => parallaxSpeed(),
      scrollTrigger: {
        trigger: visualTitleRef.current,
        start: () => `top ${triggerStart()}`, // target, viewport
        end: () => `${targetEnd()} ${triggerEnd()}`, // target, viewport
        scrub: true, // 스크롤 위치에 따라 실시간으로 대응하여 변하도록 설정
        markers: true, // 개발용 가이드라인
        onEnter: () => {
          setFixed("fixed-parallax");
        },
        onEnterBack: () => {
          setFixed("fixed-parallax");
        },
        onLeave: () => {
          setFixed("");
        },
      },
    };
  }, [parallaxSpeed, targetEnd, triggerEnd, triggerStart]);

  useScrollAnimation(
    {
      elements: [scrollContainer, visualRef.current, visualTitleRef.current],
      options: [
        {
          target: visualTitleRef.current,
          animation: [parallax()],
        },
      ],
    },
    [parallax],
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
