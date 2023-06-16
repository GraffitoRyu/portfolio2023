"use client";

import { useEffect, useRef } from "react";

// style components
import { IntroDesc, IntroTitle } from "@/styles/styled/components/PageVisual";

// util components
import ParseDescNewLine from "@/components/util/ParseDescNewLine";

// type
import { IntroTypes } from "@/types/section";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRecoilValue } from "recoil";
import { scrollRefState } from "@/states/scroll";
import { ScrollRefStateTypes } from "@/types/state";

export default function PageIntro({ title, desc }: IntroTypes) {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);

  const { container: scrollContainer } =
    useRecoilValue<ScrollRefStateTypes>(scrollRefState);

  useEffect(() => {
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

      const stOptions = (
        target: HTMLHeadingElement | HTMLParagraphElement
      ) => ({
        trigger: target,
        start: `top 90%`, // target, trigger
        end: `top 90%`, // target, trigger
      });

      gsap.from(titleTarget, {
        opacity: 0,
        scrollTrigger: stOptions(titleTarget),
      });
      gsap.from(descTarget, {
        opacity: 0,
        delay: 0.16,
        scrollTrigger: stOptions(descTarget),
      });
    });

    return () => ctx.revert();
  }, [scrollContainer]);

  return (
    <>
      <IntroTitle ref={titleRef}>
        <ParseDescNewLine data={title} />
      </IntroTitle>
      <IntroDesc ref={descRef}>
        <ParseDescNewLine data={desc} />
      </IntroDesc>
    </>
  );
}
