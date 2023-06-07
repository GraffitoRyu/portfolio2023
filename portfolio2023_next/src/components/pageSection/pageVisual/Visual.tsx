"use client";

import { useEffect, useState, useRef } from "react";
import { useRecoilValue } from "recoil";

// style components
import {
  VisualContainer,
  VisualTitle,
  VisualTitleLine,
} from "@/styles/styled/components/PageVisual";

// type
import { ScrollStateTypes } from "@/types/state";

// state
import { scrollState } from "@/states/scroll";

// hooks
import ctxScrollTrigger from "@/hooks/presetScrollTrigger";

type ScrollTriggerCustomTypes = {
  target: number | string;
  area: number | string;
};

export default function PageVisual({ title }: { title: string[] }) {
  const { container } = useRecoilValue<ScrollStateTypes>(scrollState);
  const visualRef = useRef<HTMLDivElement>(null);
  const visualTitleRef = useRef<HTMLHeadingElement>(null);
  const [scrollStart, setScrollStart] = useState<ScrollTriggerCustomTypes>({
    area: "center",
    target: "top",
  });
  const [scrollEnd, setScrollEnd] = useState<ScrollTriggerCustomTypes>({
    area: "center",
    target: "bottom",
  });

  const triggerStart = `${scrollStart.target} ${scrollStart.area}`;
  const triggerEnd = `${scrollEnd.target} ${scrollEnd.area}`;

  useEffect(() => {
    if (visualRef.current) {
      const v = visualRef.current;
      const v_btm = v.getBoundingClientRect().bottom;
      setScrollEnd(prev => ({ ...prev, target: v_btm }));
    }
  }, [visualRef]);

  useEffect(() => {
    if (visualTitleRef.current) {
      const t = visualTitleRef.current;
      const t_top = t.getBoundingClientRect().top;
      setScrollStart(prev => ({ ...prev, area: t_top }));
    }
  }, [visualTitleRef]);

  useEffect(() => {
    const ctx = ctxScrollTrigger({
      container: container?.current,
      target: visualTitleRef.current,
      options: {
        opacity: 0,
        y: "+=500",
        scrollTrigger: {
          trigger: visualTitleRef.current,
          start: triggerStart, // 움직일 요소의 시작, 트리거 영역의 시작
          end: triggerEnd, // 움직일 요소의 끝, 트리거 영역의 끝
          scrub: true, // 스크롤 위치에 따라 실시간으로 대응하여 변하도록 설정
          // markers: true, // 개발용 가이드라인
        },
      },
    });
    return () => ctx.revert();
  }, [container, triggerEnd, triggerStart]);

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
