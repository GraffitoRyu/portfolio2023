"use client";

import { useCallback, useState } from "react";
import { useAtomValue } from "jotai";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// hooks
import useCheckView from "../../layout/useCheckView";
import useGSAPAnimation from "../useGSAPAnimation";

// states
import { scrollPageSectionRefState } from "@/jotai/interaction/scroll.state";

export default function useVisualUpperAnimation(
  sectionEl: HTMLElement | null,
  titleEl: HTMLElement | null,
) {
  // 모바일 뷰 커스텀 체크
  const { isCustomView } = useCheckView(1024);
  // 스크롤 영역
  const scrollContainer = useAtomValue(scrollPageSectionRefState("container"));

  // trigger start 위치 업데이트
  const triggerStart = useCallback(
    (): number => titleEl?.offsetTop || 0,
    [titleEl?.offsetTop],
  );
  // trigger end 위치 업데이트
  const triggerEnd = useCallback(
    () => (isCustomView ? 0 : "center"),
    [isCustomView],
  );
  // target end 위치 업데이트
  const targetEnd = useCallback(
    () =>
      isCustomView ? titleEl?.offsetHeight || 0 : sectionEl?.offsetHeight || 0,
    [isCustomView, sectionEl?.offsetHeight, titleEl?.offsetHeight],
  );

  // 페럴렉스 효과 속도 업데이트
  const parallaxSpeed = useCallback(
    () =>
      isCustomView
        ? 0
        : -0.03 * ScrollTrigger.maxScroll(scrollContainer as HTMLElement),
    [isCustomView, scrollContainer],
  );

  // 페럴렉스 효과 적용을 위한 클래스
  const [fixed, setFixed] = useState<string>("");
  const onScrollFixed = useCallback((isEntered: boolean) => {
    setFixed(isEntered ? "fixed-parallax" : "");
  }, []);

  // 페럴렉스 효과 인터랙션 옵션
  const parallax = useCallback(
    (): UseGSAPAnimationHookTweenOption => ({
      opacity: 0,
      y: parallaxSpeed,
      scrollTrigger: {
        trigger: titleEl,
        start: () => `top ${triggerStart()}`, // target, viewport
        end: () => `${targetEnd()} ${triggerEnd()}`, // target, viewport
        scrub: true, // 스크롤 위치에 따라 실시간으로 대응하여 변하도록 설정
        // markers: true, // 개발용 가이드라인
        onEnter: () => onScrollFixed(true),
        onEnterBack: () => onScrollFixed(true),
        onLeave: () => onScrollFixed(false),
      },
    }),
    [
      onScrollFixed,
      parallaxSpeed,
      targetEnd,
      titleEl,
      triggerEnd,
      triggerStart,
    ],
  );

  // 스크롤 인터랙션
  useGSAPAnimation(
    {
      key: "page/visual/upper",
      elements: [sectionEl, titleEl],
      options: [
        {
          optionKey: "page/visual/upper",
          target: titleEl,
          animation: [parallax()],
        },
      ],
    },
    [parallax],
  );

  return { fixed };
}
