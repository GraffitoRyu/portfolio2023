"use client";

import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// components
import StackLevelGauge from "./StackLevel";

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

  const [stackHide, setStackHide] = useState<string>("hide");

  useEffect(() => {
    if (!scrollContainer) return;

    const trigger = triggerRef.current;
    const category = categoryRef.current;
    const stacks = stacksRef.current;
    if (!trigger || !category || !stacks) return;

    const ctx = gsap.context(() => {
      // Scroll Trigger 플러그인 사용 시작
      gsap.registerPlugin(ScrollTrigger);

      // 스크롤 영역 설정
      ScrollTrigger.defaults({
        scroller: scrollContainer,
        invalidateOnRefresh: true,
      });

      const scrollTrigger = {
        trigger,
        start: `top 80%`,
        end: `top 50%`,
        // scrub: true,
      };

      const timeline = gsap.timeline({
        scrollTrigger,
      });
      timeline.to(category, {
        opacity: 1,
        scrollTrigger: Object.assign(scrollTrigger, { scrub: true }),
      });
      timeline.to(stacks, {
        opacity: 1,
        scrollTrigger: Object.assign(scrollTrigger, {
          onEnter: () => {
            setStackHide("");
          },
          onLeaveBack: () => {
            setStackHide("hide-back");
          },
        }),
      });
    });

    return () => ctx.revert();
  }, [scrollContainer, stickyHeight]);

  return (
    <StackRowContainer ref={triggerRef}>
      <StackCategory ref={categoryRef}>
        <h4>{title}</h4>
      </StackCategory>
      <StackList className={`${stackHide}`} ref={stacksRef}>
        {data.map(({ code, name, level }: StackTypes, i: number) => (
          <StackFigure key={`stackList_${code}_${i}`} $index={i}>
            <figcaption>{name}</figcaption>
            <StackLevelGauge level={level} />
          </StackFigure>
        ))}
      </StackList>
    </StackRowContainer>
  );
}
