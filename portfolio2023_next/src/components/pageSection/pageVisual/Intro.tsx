"use client";

import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// style components
import { IntroDesc, IntroTitle } from "@/styles/styled/components/PageVisual";

// util components
import ParseDescNewLine from "@/components/util/ParseDescNewLine";

// type
import { IntroTypes } from "@/types/section";
import {
  ScreenSizeTypes,
  ScrollRefStateTypes,
  pageStateTypes,
} from "@/types/state";

// state
import { pageState } from "@/states/page";
import { scrollRefState } from "@/states/scroll";
import { screenSizeState } from "@/states/screen";

// style
import { transTime } from "@/styles/styled/preset/transTime";

export default function PageIntro({ title, desc }: IntroTypes) {
  const { init, loadComplete } = useRecoilValue<pageStateTypes>(pageState);
  const { windowWidth } = useRecoilValue<ScreenSizeTypes>(screenSizeState);

  const [titleHide, setTitleHide] = useState<string>(
    windowWidth < 1024 ? "init-hide hide" : ""
  );
  const [descHide, setDescHide] = useState<string>(
    windowWidth < 1024 ? "init-hide hide" : ""
  );

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);

  const { container: scrollContainer } =
    useRecoilValue<ScrollRefStateTypes>(scrollRefState);

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

  useEffect(() => {
    if (windowWidth < 1024) return;

    // 모바일 전용 텍스트 효과 제거
    setTitleHide("");
    setDescHide("");

    if (!scrollContainer) return;

    const titleTarget = titleRef.current;
    const descTarget = descRef.current;
    if (!titleTarget || !descTarget) return;

    const ctx = gsap.context(() => {
      // Scroll Trigger 플러그인 사용 시작
      gsap.registerPlugin(ScrollTrigger);

      // 스크롤 영역 설정
      ScrollTrigger.defaults({
        scroller: scrollContainer,
      });

      const stOptions = {
        start: `top 90%`, // target, trigger
        end: `top 60%`, // target, trigger
        invalidateOnRefresh: true,
        scrub: true,
      };

      const gsapOptions = (target: HTMLElement) => ({
        opacity: 1,
        scrollTrigger: { ...stOptions, trigger: target },
      });

      gsap.to(titleTarget, gsapOptions(titleTarget));
      gsap.to(descTarget, gsapOptions(descTarget));
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
