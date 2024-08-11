"use client";

import { useLayoutEffect, useRef } from "react";
import { useAtomValue } from "jotai";

// style components
import {
  StyledSectionHeaderContainer,
  StyledHeaderDesc,
  StyledHeaderTitle,
} from "@/styles/styled/components/PageSection";

// state
import { scrollPageRefState } from "@/jotai/interaction/scroll.state";

// util
import { ctxScrollTrigger } from "@/hooks/interaction/presetScrollTrigger";

export default function SectionHeader({
  empty,
  title,
  desc,
  className,
}: Partial<SectionHeaderPropsTypes>) {
  const { container: scrollContainer } =
    useAtomValue<ScrollRefStateTypes>(scrollPageRefState);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer) return;

    const titleTarget = titleRef.current;
    const descTarget = descRef.current;
    if (!titleTarget || !descTarget) return;

    const stOptions = {
      start: `top 80%`,
      end: `top 30%`,
      invalidateOnRefresh: true,
      scrub: true,
    };

    const gsapOptions = (target: HTMLElement) => ({
      opacity: 1,
      scrollTrigger: { ...stOptions, trigger: target },
    });

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      normalize: true,
      tweenArr: [
        {
          target: titleTarget,
          options: [{ ...gsapOptions(titleTarget) }],
        },
        {
          target: descTarget,
          options: [{ ...gsapOptions(descTarget) }],
        },
      ],
    });
    return () => ctx.revert();
  }, [scrollContainer]);

  return (
    <StyledSectionHeaderContainer
      className={`section-header ${empty ? "empty" : ""} ${
        className ? className : ""
      }`}
    >
      {empty ? (
        ""
      ) : (
        <>
          <StyledHeaderTitle ref={titleRef}>{title}</StyledHeaderTitle>
          <StyledHeaderDesc ref={descRef}>
            {desc?.map((d: string | React.ReactNode, i: number) => (
              <span key={`sectionHeader_${title}_${i}`}>{d}</span>
            ))}
          </StyledHeaderDesc>
        </>
      )}
    </StyledSectionHeaderContainer>
  );
}
