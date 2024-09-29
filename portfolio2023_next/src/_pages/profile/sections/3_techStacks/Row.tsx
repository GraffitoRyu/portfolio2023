"use client";

import { useCallback, useRef, useState } from "react";
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
import { scrollPageSectionRefState } from "@/jotai/interaction/scroll.state";

// hooks
import useGSAPAnimation from "@/hooks/interaction/useGSAPAnimation";

export default function StackRow({
  code: categoryCode,
  title,
  data,
}: {
  code: string;
  title: string;
  data: StackAPIDataTypes[];
}) {
  const sectionStacks = useAtomValue(
    scrollPageSectionRefState("sectionStacks"),
  );

  const triggerRef = useRef<HTMLLIElement | null>(null);
  const categoryRef = useRef<HTMLDivElement | null>(null);
  const stacksRef = useRef<HTMLDivElement | null>(null);

  const [hide, setHide] = useState<boolean>(true);

  const fadeInOption = useCallback(
    (target: HTMLElement): UseGSAPAnimationHookOptions => ({
      target,
      animation: [
        {
          opacity: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 100%",
            end: "top 60%",
            scrub: true,
            onToggle: () => {
              setHide(false);
            },
          },
        },
      ],
    }),
    [],
  );

  // 스크롤 인터렉션
  useGSAPAnimation(
    {
      key: `profile/techStack/row/${categoryCode}/scroll`,
      elements: [triggerRef.current, categoryRef.current, stacksRef.current],
      options: [
        fadeInOption(categoryRef.current as HTMLElement),
        fadeInOption(stacksRef.current as HTMLElement),
      ],
    },
    [categoryCode, fadeInOption],
  );

  // 인터랙션 초기화
  useGSAPAnimation(
    {
      key: `profile/techStack/row/${categoryCode}/scroll/reset`,
      elements: [sectionStacks],
      scrollCreate: [
        {
          trigger: sectionStacks,
          start: () => "top bottom",
          end: () => "top bottom",
          onLeaveBack: () => {
            setHide(true);
          },
        },
      ],
    },
    [categoryCode],
  );

  return (
    <StyledStackRowContainer ref={triggerRef}>
      <StyledStackCategory ref={categoryRef}>
        <h3>{title}</h3>
      </StyledStackCategory>
      <StyledStackList className={hide ? "hide" : ""} ref={stacksRef}>
        {data
          ? data.map(
              ({ code: stackItemCode, name }: StackAPIDataTypes, i: number) => (
                <StyledStackFigure
                  key={`profile/techStack/list/${stackItemCode}`}
                  $index={i}
                >
                  <figcaption>{name}</figcaption>
                  {/* <StackLevelGauge level={level} /> */}
                </StyledStackFigure>
              ),
            )
          : null}
      </StyledStackList>
    </StyledStackRowContainer>
  );
}
