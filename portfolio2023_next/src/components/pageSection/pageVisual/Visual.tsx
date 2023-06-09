"use client";

import { useEffect, useState, useRef, useLayoutEffect } from "react";
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
  const [areaStart, setAreaStart] = useState<string | number>("center");
  const [targetEnd, setTargetEnd] = useState<string | number>("bottom");

  useEffect(() => {
    if (visualRef.current) {
      const v = visualRef.current;
      const v_btm = v.getBoundingClientRect().bottom;
      setTargetEnd(v_btm);
    }
  }, [visualRef]);

  useEffect(() => {
    if (visualTitleRef.current) {
      const t = visualTitleRef.current;
      const t_top = t.getBoundingClientRect().top;
      setAreaStart(t_top);
    }
  }, [visualTitleRef]);

  useLayoutEffect(() => {
    const scrollContainer = container?.current;
    const scrollTarget = visualTitleRef.current;
    if (!scrollContainer || !scrollTarget) return;

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      target: scrollTarget,
      options: {
        opacity: 0,
        y: "+=500",
        scrollTrigger: {
          trigger: scrollTarget,
          start: `top ${areaStart}`, // 움직일 요소의 시작, 트리거 영역의 시작
          end: `${targetEnd} center`, // 움직일 요소의 끝, 트리거 영역의 끝
          scrub: true, // 스크롤 위치에 따라 실시간으로 대응하여 변하도록 설정
          // markers: true, // 개발용 가이드라인
        },
      },
    });
    return () => ctx.revert();
  }, [container, visualRef, visualTitleRef, areaStart, targetEnd]);

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
