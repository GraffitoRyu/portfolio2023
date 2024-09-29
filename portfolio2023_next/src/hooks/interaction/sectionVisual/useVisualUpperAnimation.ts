"use client";

import { useCallback, useMemo } from "react";
import { useAtomValue } from "jotai";

// hooks
import useCheckView from "../../layout/useCheckView";
import useGSAPAnimation from "../useGSAPAnimation";

// states
import { pageDetailLoadState } from "@/jotai/load.state";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function useVisualUpperAnimation(
  sectionEl: HTMLElement | null,
  titleEl: HTMLElement | null,
) {
  // 모바일 뷰 커스텀 체크
  const { isCustomView, windowWidth, viewportCenter } = useCheckView(1024);
  // 스크롤 영역

  const { category, open } = useAtomValue(pageDetailLoadState);

  const start = useCallback(
    // target, viewport
    () => (isCustomView ? `${viewportCenter} center` : "bottom bottom"),
    [isCustomView, viewportCenter],
  );

  const end = useMemo(
    // target, viewport
    () => (isCustomView ? "center top" : "bottom top"),
    [isCustomView],
  );

  // 페럴렉스 효과 인터랙션 옵션
  const parallax = useMemo(
    (): UseGSAPAnimationHookTweenOption[] => [
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        ...(isCustomView
          ? {}
          : {
              y: () => "150%",
              ease: "none",
            }),
        scrollTrigger: {
          trigger: sectionEl,
          start,
          end,
          scrub: true, // 스크롤 위치에 따라 실시간으로 대응하여 변하도록 설정
          // markers: true, // 개발용 가이드라인
          onUpdate: () => {
            ScrollTrigger.clearScrollMemory();
          },
        },
      },
    ],
    [end, isCustomView, sectionEl, start],
  );

  // 스크롤 인터랙션
  useGSAPAnimation(
    {
      key: "page/visual/upper",
      disabled: open || category !== "",
      elements: [sectionEl, titleEl],
      options: [
        {
          optionKey: "page/visual/upper",
          target: titleEl,
          direction: "fromTo",
          animation: parallax,
        },
      ],
    },
    [parallax, open, category, windowWidth],
  );

  // return { fixed };
}
