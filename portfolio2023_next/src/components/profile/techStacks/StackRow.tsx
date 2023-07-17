"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

// components
// import StackLevelGauge from "./StackLevel";

// style components
import {
  StackCategory,
  StackFigure,
  StackList,
  StackRowContainer,
} from "@/styles/styled/components/ProfileStacks";

// types
import { StackTypes } from "@/types/profile";
import { ScrollRefStateTypes } from "@/types/state";

// state
import { scrollRefState } from "@/states/scroll";

// util
import { ctxScrollTrigger } from "@/util/presetScrollTrigger";

export default function StackRow({
  title,
  data,
}: {
  title: string;
  data: StackTypes[];
}) {
  const {
    container: scrollContainer,
    stickyHeight,
    stacks: stackSection,
  } = useRecoilValue<ScrollRefStateTypes>(scrollRefState);

  const triggerRef = useRef<HTMLLIElement | null>(null);
  const categoryRef = useRef<HTMLDivElement | null>(null);
  const stacksRef = useRef<HTMLDivElement | null>(null);

  const [stackHide, setStackHide] = useState<string>("hide");

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
              scrollTrigger: {
                ...scrollTrigger,
                onToggle: () => {
                  setStackHide("");
                },
              },
            },
          ],
        },
      ],
    });

    return () => ctx.revert();
  }, [scrollContainer, stickyHeight]);

  // 초기화; 섹션이 뷰포트 아래로 내려갔을 때
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer) return;

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      create: {
        trigger: stackSection,
        start: `top bottom`,
        end: `top bottom`,
        onLeaveBack: () => {
          setStackHide("hide");
        },
      },
    });

    return () => ctx.revert();
  }, [scrollContainer, stackSection, stickyHeight]);

  return (
    <StackRowContainer ref={triggerRef}>
      <StackCategory ref={categoryRef}>
        <h3>{title}</h3>
      </StackCategory>
      <StackList className={`${stackHide}`} ref={stacksRef}>
        {data.map(({ code, name }: StackTypes, i: number) => (
          <StackFigure key={`stackList_${code}_${i}`} $index={i}>
            <figcaption>{name}</figcaption>
            {/* <StackLevelGauge level={level} /> */}
          </StackFigure>
        ))}
      </StackList>
    </StackRowContainer>
  );
}
