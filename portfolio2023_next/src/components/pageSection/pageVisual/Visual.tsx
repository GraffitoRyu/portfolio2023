"use client";

import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";

// style components
import {
  VisualContainer,
  VisualTitle,
  VisualTitleLine,
} from "@/styles/styled/components/PageVisual";

// type
import { ScrollRefStateTypes } from "@/types/state";

// state
import { scrollRefState } from "@/states/scroll";

// hooks
import ctxScrollTrigger from "@/util/presetScrollTrigger";

export default function PageVisual({ title }: { title: string[] }) {
  const { container } = useRecoilValue<ScrollRefStateTypes>(scrollRefState);
  const visualRef = useRef<HTMLDivElement | null>(null);
  const visualTitleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const scrollContainer = container?.current;
    const scrollTarget = visualTitleRef.current;
    if (!scrollContainer || !scrollTarget) return;

    const visualEl = visualRef.current;
    const visualTitleEl = visualTitleRef.current;

    const triggerStart = visualTitleEl
      ? visualTitleEl.getBoundingClientRect().top
      : "center";
    const targetEnd = visualEl
      ? visualEl.getBoundingClientRect().bottom
      : "bottom";

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      target: scrollTarget,
      options: {
        opacity: 0,
        y: "+=500",
        scrollTrigger: {
          trigger: scrollTarget,
          start: `top ${triggerStart}`, // 움직일 요소의 시작, 트리거 영역의 시작
          end: `${targetEnd} center`, // 움직일 요소의 끝, 트리거 영역의 끝
          scrub: true, // 스크롤 위치에 따라 실시간으로 대응하여 변하도록 설정
          // markers: true, // 개발용 가이드라인
        },
      },
    });
    return () => ctx.revert();
  }, [container, visualRef, visualTitleRef]);

  return (
    <VisualContainer ref={visualRef}>
      <VisualTitle ref={visualTitleRef}>
        {title.map((t: string) => (
          <VisualTitleLine
            key={`visualTitle_${Math.floor(Math.random() * 1000)}_${t}`}
          >
            {t}
          </VisualTitleLine>
        ))}
      </VisualTitle>
    </VisualContainer>
  );
}
