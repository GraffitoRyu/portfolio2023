"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAtomValue } from "jotai";

// style components
import {
  StyledIntroDesc,
  StyledIntroTitle,
} from "@/styles/styled/components/PageVisual";

// state
import { pageLoadState } from "@/jotai/load.state";
import { viewportState } from "@/jotai/viewport.state";
import { scrollPageSectionRefState } from "@/jotai/interaction/scroll.state";

// style
import { transTime } from "@/styles/styled/preset/transTime";

// utils
import { ctxScrollTrigger } from "@/hooks/interaction/presetScrollTrigger";
import { convertArrayToJsx } from "@/utils/data/convert.util";

/**
 * 페이지 본문 공통 요소; Intro
 * @component
 * @param {PageSectionIntroTypes} props
 * @param {string} props.category
 * @param {(string | React.ReactNode)[]} props.title
 * @param {(string | React.ReactNode)[]} props.desc
 */
export default function PageIntro({
  category,
  title,
  desc,
}: PageSectionIntroTypes) {
  const { init, loadComplete } = useAtomValue(pageLoadState);
  const { windowWidth } = useAtomValue(viewportState);

  const [titleHide, setTitleHide] = useState<string>(
    windowWidth < 1024 ? "init-hide hide" : "",
  );
  const [descHide, setDescHide] = useState<string>(
    windowWidth < 1024 ? "init-hide hide" : "",
  );

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);

  const scrollContainer = useAtomValue(scrollPageSectionRefState("container"));

  useEffect(() => {
    if (windowWidth >= 1024) return;

    if (loadComplete) {
      // visual title 등장 후 활성화

      setTimeout(() => {
        // 인트로 타이틀 등장
        setTitleHide("init-hide");
        setTimeout(() => {
          setTitleHide("");
        }, transTime.visual.intro);

        // 인트로 설명글 등장
        setTimeout(() => {
          setDescHide("init-hide");
          setTimeout(() => {
            setDescHide("");
          }, transTime.visual.intro);
        }, transTime.visual.intro / 4);
      }, transTime.visual.fadeInUp / 2);
    }
  }, [init, loadComplete, windowWidth]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (windowWidth < 1024) return;

    // 모바일 전용 텍스트 효과 제거
    setTitleHide("");
    setDescHide("");

    if (!scrollContainer) return;

    const titleTarget = titleRef.current;
    const descTarget = descRef.current;
    if (!titleTarget || !descTarget) return;

    const stOptions = {
      start: `top 80%`, // target, trigger
      end: `top 30%`, // target, trigger
      scrub: true,
    };

    const gsapOptions = (target: HTMLElement) => ({
      opacity: 1,
      scrollTrigger: { ...stOptions, trigger: target },
    });

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      normalize: true,
      timeline: true,
      tweenArr: [
        { target: titleTarget, options: [{ ...gsapOptions(titleTarget) }] },
        { target: descTarget, options: [{ ...gsapOptions(descTarget) }] },
      ],
    });

    return () => ctx.revert();
  }, [scrollContainer, windowWidth]);

  return (
    <>
      <StyledIntroTitle className={`${titleHide}`} ref={titleRef}>
        {convertArrayToJsx(title, { key: `${category}/intro/title` })}
      </StyledIntroTitle>
      <StyledIntroDesc className={`${descHide}`} ref={descRef}>
        {convertArrayToJsx(desc, { key: `${category}/intro/desc` })}
      </StyledIntroDesc>
    </>
  );
}
