"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// style components
import {
  VisualContainer,
  VisualTitle,
  VisualTitleLine,
} from "@/styles/styled/components/PageVisual";

// style
import { transTime } from "@/styles/styled/preset/transTime";

// type
import {
  ScreenSizeTypes,
  ScrollRefStateTypes,
  PageStateTypes,
} from "@/types/state";

// state
import { pageState } from "@/states/page";
import { scrollRefState } from "@/states/scroll";
import { screenSizeState } from "@/states/screen";

// hooks
import { ctxScrollTrigger } from "@/util/presetScrollTrigger";

export default function PageVisual({ title }: { title: string[] }) {
  const { windowWidth, headerHeight } =
    useRecoilValue<ScreenSizeTypes>(screenSizeState);

  const { container: scrollContainer } =
    useRecoilValue<ScrollRefStateTypes>(scrollRefState);
  const [isMobile, setMobile] = useState<boolean>(false);

  const visualRef = useRef<HTMLDivElement | null>(null);
  const visualTitleRef = useRef<HTMLHeadingElement | null>(null);
  const [titleTop, setTitleTop] = useState<number>(0);

  const { loadComplete } = useRecoilValue<PageStateTypes>(pageState);
  const [loaded, setLoaded] = useState<string>("loading");
  const [fixed, setFixed] = useState<string>("");

  useEffect(() => {
    setMobile(windowWidth < 1024);
  }, [windowWidth]);

  useEffect(() => {
    const visualTitle = visualTitleRef.current;
    if (!visualTitle) return;
    setTitleTop(visualTitle.offsetTop);
  }, []);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const scrollTarget = visualTitleRef.current;
    if (!scrollContainer || !scrollTarget) return;

    const visualEl = visualRef.current;
    if (!visualEl) return;

    const triggerStart = titleTop;
    const targetEnd = isMobile
      ? scrollTarget.offsetHeight
      : headerHeight + visualEl.offsetHeight;
    const triggerEnd = isMobile ? headerHeight : "center";

    gsap.registerPlugin(ScrollTrigger);

    const options = {
      opacity: 0,
      ease: "none",
      y: () =>
        isMobile ? 0 : -0.05 * ScrollTrigger.maxScroll(scrollContainer),
      scrollTrigger: {
        trigger: scrollTarget,
        start: `top ${triggerStart}`, // target, viewport
        end: `${targetEnd} ${triggerEnd}`, // target, viewport
        scrub: true, // 스크롤 위치에 따라 실시간으로 대응하여 변하도록 설정
        invalidateOnRefresh: true,
        // markers: true, // 개발용 가이드라인
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

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      normalize: true,
      tweenArr: [
        {
          target: scrollTarget,
          options: [options],
        },
      ],
    });
    return () => ctx.revert();
  }, [scrollContainer, isMobile, headerHeight, titleTop]);

  useEffect(() => {
    if (loadComplete) {
      setLoaded("trans-title loaded");
      setTimeout(() => {
        setLoaded("");
      }, transTime.visual.fadeInUp);
    } else setLoaded("trans-title loading");
  }, [loadComplete]);

  return (
    <VisualContainer ref={visualRef}>
      <VisualTitle ref={visualTitleRef} className={`${loaded} ${fixed}`}>
        <VisualTitleLine className="visual-title stroke-title">
          {title[0]}
        </VisualTitleLine>
        <VisualTitleLine className="visual-title filled-title">
          {title[1]}
        </VisualTitleLine>
      </VisualTitle>
    </VisualContainer>
  );
}
