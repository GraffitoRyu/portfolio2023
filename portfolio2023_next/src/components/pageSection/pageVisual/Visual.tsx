"use client";

import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

// style components
import {
  VisualContainer,
  VisualTitle,
  VisualTitleLine,
} from "@/styles/styled/components/PageVisual";

// style
import { transTime } from "@/styles/styled/preset/transTime";

// type
import { ScrollRefStateTypes, pageStateTypes } from "@/types/state";

// state
import { pageState } from "@/states/page";
import { scrollRefState } from "@/states/scroll";

// hooks
import { ctxScrollTrigger } from "@/util/presetScrollTrigger";

export default function PageVisual({ title }: { title: string[] }) {
  const { container: scrollContainer } =
    useRecoilValue<ScrollRefStateTypes>(scrollRefState);
  const visualRef = useRef<HTMLDivElement | null>(null);
  const visualTitleRef = useRef<HTMLHeadingElement | null>(null);

  const { loadComplete } = useRecoilValue<pageStateTypes>(pageState);
  const [loaded, setLoaded] = useState<string>("loading");

  const [wh, setWh] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") setWh(window.innerHeight);
  }, []);

  useEffect(() => {
    const scrollTarget = visualTitleRef.current;
    if (!scrollContainer || !scrollTarget) return;

    const visualEl = visualRef.current;
    if (!visualEl) return;

    const triggerStart = scrollTarget.getBoundingClientRect().top;
    const targetEnd = visualEl.getBoundingClientRect().bottom;

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      target: scrollTarget,
      normalize: true,
      options: {
        opacity: 0,
        y: `+=${scrollTarget.clientHeight * 2}`,
        scrollTrigger: {
          trigger: scrollTarget,
          start: `top ${triggerStart}`, // 움직일 요소의 시작, 트리거 영역의 시작
          end: `${targetEnd} center`, // 움직일 요소의 끝, 트리거 영역의 끝
          scrub: true, // 스크롤 위치에 따라 실시간으로 대응하여 변하도록 설정
          invalidateOnRefresh: true,
          markers: true, // 개발용 가이드라인
        },
      },
    });
    return () => ctx.revert();
  }, [scrollContainer]);

  useEffect(() => {
    if (loadComplete) {
      setLoaded("trans-title loaded");
      setTimeout(() => {
        setLoaded("");
      }, transTime.visual.fadeInUp);
    } else setLoaded("trans-title loading");
  }, [loadComplete]);

  return (
    <VisualContainer ref={visualRef} $wh={wh}>
      <VisualTitle ref={visualTitleRef} className={`${loaded}`}>
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
