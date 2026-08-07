"use client";

import { useRef } from "react";

// style components
import {
  StyledIntroDesc,
  StyledIntroTitle,
} from "@graffitoryu/ui/product/styles/styled/components/PageVisual";

// hooks
import useVisualLowerAnimation from "@graffitoryu/ui/product/hooks/interaction/sectionVisual/useVisualLowerAnimation";

// utils
import { convertArrayToJsx } from "@graffitoryu/utils";

/**
 * 페이지 본문 공통 요소; Intro
 * @component
 * @param {PageSectionIntroTypes} props
 * @param {string} props.category
 * @param {(string | React.ReactNode)[]} props.title
 * @param {(string | React.ReactNode)[]} props.desc
 */
export default function PageVisualLower({
  category,
  title,
  desc,
}: PageSectionIntroTypes) {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);

  useVisualLowerAnimation(titleRef.current, descRef.current);

  return (
    <>
      <StyledIntroTitle ref={titleRef} className="init">
        {convertArrayToJsx(title, { key: `${category}/intro/title` })}
      </StyledIntroTitle>
      <StyledIntroDesc ref={descRef} className="init">
        {convertArrayToJsx(desc, { key: `${category}/intro/desc` })}
      </StyledIntroDesc>
    </>
  );
}
