"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAtomValue } from "jotai";

// style components
import { IntroDesc, IntroTitle } from "@/styles/styled/components/PageVisual";

// util components
import ParseDescNewLine from "@/components/util/ParseDescNewLine";

// state
import { pageLoadState } from "@/jotai/load.state";
import { viewportState } from "@/jotai/viewport.state";
import { scrollPageRefState } from "@/jotai/interaction/scroll.state";

// style
import { transTime } from "@/styles/styled/preset/transTime";

// utils
import { ctxScrollTrigger } from "@/util/interactions/presetScrollTrigger";

export default function PageIntro({ title, desc }: IntroTypes) {
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

  const { container: scrollContainer } = useAtomValue(scrollPageRefState);

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
      <IntroTitle className={`${titleHide}`} ref={titleRef}>
        <ParseDescNewLine data={title} />
      </IntroTitle>
      <IntroDesc className={`${descHide}`} ref={descRef}>
        <ParseDescNewLine data={desc} />
      </IntroDesc>
    </>
  );
}
