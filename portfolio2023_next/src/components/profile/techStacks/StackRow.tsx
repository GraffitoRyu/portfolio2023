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
  const { container: scrollContainer, stickyHeight } =
    useRecoilValue<ScrollRefStateTypes>(scrollRefState);

  const triggerRef = useRef<HTMLLIElement | null>(null);
  const categoryRef = useRef<HTMLDivElement | null>(null);
  const stacksRef = useRef<HTMLDivElement | null>(null);
  const stackTimer = useRef<NodeJS.Timeout | null>(null);

  const [stackHide, setStackHide] = useState<string>("hide");

  useLayoutEffect(() => {
    if (stackTimer.current) {
      clearTimeout(stackTimer.current);
      stackTimer.current = null;
      setStackHide("hide");
    }

    if (typeof window === "undefined") return;

    if (!scrollContainer) return;

    const trigger = triggerRef.current;
    const category = categoryRef.current;
    const stacks = stacksRef.current;
    if (!trigger || !category || !stacks) return;

    const scrollTrigger = {
      trigger,
      start: `top 80%`,
      end: `top 50%`,
      scrub: true,
    };

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      timeline: true,
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
                onEnter: () => {
                  if (stackTimer.current) {
                    clearTimeout(stackTimer.current);
                    stackTimer.current = null;
                    setStackHide("hide");
                  }
                  setStackHide("");
                },
                onLeaveBack: () => {
                  setStackHide("hide-back");
                  stackTimer.current = setTimeout(() => {
                    setStackHide("hide");
                  }, 400);
                },
              },
            },
          ],
        },
      ],
    });

    return () => ctx.revert();
  }, [scrollContainer, stickyHeight]);

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
