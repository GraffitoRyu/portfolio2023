"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useAtomValue } from "jotai";

// components
// import StackLevelGauge from "./StackLevel";

// style components
import {
  StyledStackCategory,
  StyledStackFigure,
  StyledStackList,
  StyledStackRowContainer,
} from "@/styles/styled/components/ProfileStacks";

// state
import {
  scrollPageHeightState,
  scrollPageSectionRefState,
} from "@/jotai/interaction/scroll.state";

// util
import { ctxScrollTrigger } from "@/hooks/interaction/presetScrollTrigger";

export default function StackRow({
  title,
  data,
}: {
  title: string;
  data: StackAPIDataTypes[];
}) {
  const scrollContainer = useAtomValue(scrollPageSectionRefState("container"));
  const sectionStacks = useAtomValue(
    scrollPageSectionRefState("sectionStacks"),
  );

  const triggerRef = useRef<HTMLLIElement | null>(null);
  const categoryRef = useRef<HTMLDivElement | null>(null);
  const stacksRef = useRef<HTMLDivElement | null>(null);

  const [stackHide, setStackHide] = useState<string>("hide");

  const scrollHeight = useAtomValue(scrollPageHeightState);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer) return;

    const trigger = triggerRef.current;
    const category = categoryRef.current;
    const stacks = stacksRef.current;
    if (!trigger || !category || !stacks) return;

    const scrollTrigger = {
      trigger,
      start: `top 100%`,
      end: `top 60%`,
      scrub: true,
      // markers: true,
      onToggle: () => {
        setStackHide("");
      },
    };

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      normalize: true,
      tweenArr: [
        {
          target: category,
          options: [
            {
              opacity: 1,
              scrollTrigger,
            },
          ],
        },
        {
          target: stacks,
          options: [
            {
              opacity: 1,
              scrollTrigger,
            },
          ],
        },
      ],
    });

    return () => ctx.revert();
  }, [scrollContainer, scrollHeight]);

  // 초기화; 섹션이 뷰포트 아래로 내려갔을 때
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer) return;

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      create: {
        trigger: sectionStacks,
        start: `top bottom`,
        end: `top bottom`,
        onLeaveBack: () => {
          setStackHide("hide");
        },
      },
    });

    return () => ctx.revert();
  }, [scrollContainer, sectionStacks, scrollHeight]);

  return (
    <StyledStackRowContainer ref={triggerRef}>
      <StyledStackCategory ref={categoryRef}>
        <h3>{title}</h3>
      </StyledStackCategory>
      <StyledStackList className={`${stackHide}`} ref={stacksRef}>
        {data
          ? data.map(({ code, name }: StackAPIDataTypes, i: number) => (
              <StyledStackFigure
                key={`profile/techStack/list/${code}/${i}`}
                $index={i}
              >
                <figcaption>{name}</figcaption>
                {/* <StackLevelGauge level={level} /> */}
              </StyledStackFigure>
            ))
          : null}
      </StyledStackList>
    </StyledStackRowContainer>
  );
}
