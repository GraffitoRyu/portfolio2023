"use client";

import { useCallback, useMemo, useState } from "react";

// hooks
import useGSAPAnimation from "../useGSAPAnimation";
import useCheckView from "@/hooks/layout/useCheckView";

// styles
import { easing } from "@/styles/styled/preset/easing";
import { transTime } from "@/styles/styled/preset/transTime";
import { useAtomValue } from "jotai";
import { pageDetailLoadState } from "@/jotai/load.state";

export default function useVisualLowerAnimation(
  titleEl: HTMLElement | null,
  descEl: HTMLElement | null,
) {
  // 커스텀 모바일 뷰 체크
  const { isCustomView } = useCheckView(1024);
  const { category, open } = useAtomValue(pageDetailLoadState);

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
    ): UseGSAPAnimationHookOptions => ({
      optionKey: `page/visual/lower/mobile/init/${key}`,
      target,
      direction: "fromTo",
      animation: [
        { opacity: 0, y: () => "50%" },
        {
          opacity: 1,
          y: () => "0%",
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
      elements: [titleEl, descEl],
      disabled: !isCustomView || open || category !== "",
      isTimeline: true,
      options: [
        mobileInitOption("title", titleEl, 2),
        mobileInitOption("desc", descEl, 3),
      ],
    },
    [isCustomView, open, category, mobileInitOption],
  );

  // 모바일 스크롤 인터랙션 옵션
  const mobileScrollOption = useCallback(
    (trigger: HTMLElement): UseGSAPAnimationHookTweenOption => ({
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

  const isMobileScrollDisabled = useMemo(
    () =>
      !isCustomView ||
      Object.values(isActiveMobileScroll).some(active => !active) ||
      open ||
      category !== "",
    [category, isActiveMobileScroll, isCustomView, open],
  );

  // 모바일 스크롤 인터랙션
  useGSAPAnimation(
    {
      key: "page/visual/lower/mobile/scroll",
      elements: [titleEl, descEl],
      disabled: isMobileScrollDisabled,
      options: [
        {
          optionKey: "page/visual/lower/mobile/scroll/title",
          target: titleEl,
          direction: "fromTo",
          animation: [
            { opacity: 1 },
            mobileScrollOption(titleEl as HTMLElement),
          ],
        },
        {
          optionKey: "page/visual/lower/mobile/scroll/desc",
          target: descEl,
          direction: "fromTo",
          animation: [
            { opacity: 1 },
            mobileScrollOption(descEl as HTMLElement),
          ],
        },
      ],
    },
    [isMobileScrollDisabled, mobileInitOption],
  );

  // 데스크탑 스크롤 인터랙션 옵션
  const fadeInUpDesktop = useCallback(
    (key: string, target: HTMLElement): UseGSAPAnimationHookOptions => ({
      optionKey: key,
      target,
      direction: "fromTo",
      animation: [
        { opacity: 0 },
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
      elements: [titleEl, descEl],
      disabled: isCustomView || open || category !== "",
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
    [isCustomView, open, category, fadeInUpDesktop],
  );
}
