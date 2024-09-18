"use client";

import { useCallback, useState } from "react";
import { useAtomValue } from "jotai";

// hooks
import useCheckView from "@/hooks/layout/useCheckView";
import useGSAPAnimation from "../useGSAPAnimation";

// states
import { pageLoadState } from "@/jotai/load.state";
import { scrollPageSectionRefState } from "@/jotai/interaction/scroll.state";

// styles
import { easing } from "@/styles/styled/preset/easing";
import { transTime } from "@/styles/styled/preset/transTime";

export default function useVisualLowerAnimation(
  titleEl: HTMLElement | null,
  descEl: HTMLElement | null,
) {
  // 페이지 진입상태 모니터링
  const { init, loadComplete } = useAtomValue(pageLoadState);
  // 커스텀 모바일 뷰 체크
  const { isCustomMobileView } = useCheckView(1024);
  // 스크롤 기준
  const scrollContainer = useAtomValue(scrollPageSectionRefState("container"));

  // 모바일 뷰에서 등장모션 완료 여부
  const [isActiveMobileScroll, setActiveMobileScroll] = useState<{
    [key: string]: boolean;
  }>({
    title: false,
    desc: false,
  });

  // 모바일 진입 인터랙션 옵션
  const mobileInitOption = useCallback(
    (
      key: string,
      target: HTMLElement | null,
      delayIndex: number,
    ): ScrollTriggerTweenArrayOptions => ({
      optionKey: `page/visual/lower/mobile/init/${key}`,
      target,
      direction: "fromTo",
      animation: [
        { opacity: 0, y: "50%" },
        {
          opacity: 1,
          y: "0%",
          delay: ((transTime.visual.upper / 4) * delayIndex) / 1000,
          duration: transTime.visual.lower / 1000,
          ease: easing.quart,
          onComplete: () => {
            if (target === null) return;
            target.classList.remove("init");
            target.removeAttribute("style");
            setActiveMobileScroll(prev => ({ ...prev, [key]: true }));
          },
        },
      ],
    }),
    [],
  );

  // 모바일 진입 인터랙션
  useGSAPAnimation(
    {
      key: "page/visual/lower/mobile/init",
      elements: [scrollContainer, titleEl, descEl],
      disabled: !loadComplete || !isCustomMobileView,
      isTimeline: true,
      options: [
        mobileInitOption("title", titleEl, 2),
        mobileInitOption("desc", descEl, 3),
      ],
    },
    [init, loadComplete, isCustomMobileView, mobileInitOption],
  );

  // 모바일 스크롤 인터랙션 옵션
  const mobileScrollOption = useCallback(
    (trigger: HTMLElement): ScrollTriggerAnimationOptions => ({
      opacity: 0,
      scrollTrigger: {
        trigger,
        start: () => "top 30%",
        end: () => "bottom 0%",
        scrub: true,
        // markers: true,
      },
    }),
    [],
  );

  // 모바일 스크롤 인터랙션
  useGSAPAnimation(
    {
      key: "page/visual/lower/mobile/scroll",
      elements: [scrollContainer, titleEl, descEl],
      disabled:
        !loadComplete ||
        !isCustomMobileView ||
        Object.values(isActiveMobileScroll).some(active => !active),
      options: [
        {
          optionKey: "page/visual/lower/mobile/scroll/title",
          target: titleEl,
          animation: [mobileScrollOption(titleEl as HTMLElement)],
        },
        {
          optionKey: "page/visual/lower/mobile/scroll/desc",
          target: descEl,
          animation: [mobileScrollOption(descEl as HTMLElement)],
        },
      ],
    },
    [
      init,
      loadComplete,
      isCustomMobileView,
      mobileInitOption,
      ...Object.values(isActiveMobileScroll),
    ],
  );

  // 데스크탑 스크롤 인터랙션 옵션
  const fadeInUpDesktop = useCallback(
    (key: string, target: HTMLElement): ScrollTriggerTweenArrayOptions => ({
      optionKey: key,
      target,
      animation: [
        {
          opacity: 1,
          scrollTrigger: {
            trigger: target,
            start: "top 80%",
            end: "top  30%",
            scrub: true,
          },
        },
      ],
    }),
    [],
  );

  // 데스크탑 스크롤 인터랙션
  useGSAPAnimation(
    {
      key: "page/visual/lower/desktop",
      elements: [scrollContainer, titleEl, descEl],
      disabled: !loadComplete || isCustomMobileView,
      options: [
        fadeInUpDesktop(
          "page/visual/lower/desktop/title",
          titleEl as HTMLElement,
        ),
        fadeInUpDesktop(
          "page/visual/lower/desktop/desc",
          descEl as HTMLElement,
        ),
      ],
    },
    [init, loadComplete, isCustomMobileView, fadeInUpDesktop],
  );
}
