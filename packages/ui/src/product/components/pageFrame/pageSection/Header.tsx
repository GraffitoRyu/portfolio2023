"use client";

import { useCallback, useRef } from "react";

// style components
import {
  StyledSectionHeaderContainer,
  StyledHeaderDesc,
  StyledHeaderTitle,
} from "@graffitoryu/ui/product/styles/styled/components/PageSection";

// hook
import useGSAPAnimation from "@graffitoryu/ui/product/hooks/interaction/useGSAPAnimation";

/**
 * 페이지 본문 공통 요소; Section Header
 * @component
 * @param {SectionHeaderProps} props
 * @param {boolean} props.empty
 * @param {string} props.title
 * @param {Array<string | React.ReactNode>} props.desc
 * @param {string} [props.className]
 */
export default function PageSectionHeader({
  empty,
  title,
  desc,
  className,
}: Partial<SectionHeaderProps>) {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);

  const fadeInOption = useCallback(
    (target: HTMLElement): UseGSAPAnimationHookOptions => ({
      target,
      animation: [
        {
          opacity: 1,
          scrollTrigger: {
            trigger: target,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        },
      ],
    }),
    [],
  );

  useGSAPAnimation(
    {
      key: `page/section/header/${title}`,
      disabled: empty,
      elements: [titleRef.current, descRef.current],
      options: [
        fadeInOption(titleRef.current as HTMLElement),
        fadeInOption(descRef.current as HTMLElement),
      ],
    },
    [empty, title, fadeInOption],
  );

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
          <StyledHeaderTitle ref={titleRef}>{title || ""}</StyledHeaderTitle>
          <StyledHeaderDesc ref={descRef}>
            {desc?.map((d: string | React.ReactNode, i: number) => (
              <span key={`page/section/header/${title}/${i}`}>{d}</span>
            ))}
          </StyledHeaderDesc>
        </>
      )}
    </StyledSectionHeaderContainer>
  );
}
