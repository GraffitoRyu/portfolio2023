"use client";

import React, { useLayoutEffect, useRef } from "react";
import { useRecoilValue } from "recoil";

// style components
import {
  SectionHeaderContainer,
  HeaderDesc,
  HeaderTitle,
} from "@/styles/styled/components/PageSection";

// type
import { ScrollRefStateTypes } from "@/types/state";
import { SectionHeaderTypes } from "@/types/profile";

// state
import { scrollRefState } from "@/states/scroll";
import { ctxScrollTrigger } from "@/util/presetScrollTrigger";

export default function SectionHeader({
  empty,
  title,
  desc,
  className,
}: SectionHeaderTypes) {
  const { container: scrollContainer, stickyHeight } =
    useRecoilValue<ScrollRefStateTypes>(scrollRefState);
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
  }, [scrollContainer, stickyHeight]);

  return (
    <SectionHeaderContainer
      className={`section-header ${empty ? "empty" : ""} ${
        className ? className : ""
      }`}
    >
      {empty ? (
        ""
      ) : (
        <>
          <HeaderTitle ref={titleRef}>{title}</HeaderTitle>
          <HeaderDesc ref={descRef}>
            {desc?.map((d: string | JSX.Element, i: number) => (
              <span key={`sectionHeader_${title}_${i}`}>{d}</span>
            ))}
          </HeaderDesc>
        </>
      )}
    </SectionHeaderContainer>
  );
}
