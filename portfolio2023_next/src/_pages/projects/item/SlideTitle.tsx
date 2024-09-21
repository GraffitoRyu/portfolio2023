"use client";

import { useMemo, useRef } from "react";

// components
import {
  StyledHoverSlideTitle,
  StyledTitleSpan,
} from "@/styles/styled/components/ProjectList";

export default function SlideTitle({
  className,
  text,
}: {
  className?: string | React.HTMLAttributes<HTMLElement>;
  text: string[];
}) {
  const slideRef = useRef<HTMLHeadingElement | null>(null);
  const titleArr = useMemo(() => new Array(3).fill(text.join(" ")), [text]);

  const slideWidth =
    slideRef.current === null
      ? 0
      : (slideRef.current.children[0] as HTMLSpanElement).offsetWidth;
  const duration = useMemo(() => (slideWidth / 1000) * 3.6, [slideWidth]);

  return (
    <StyledHoverSlideTitle
      className={`${className ? className : ""}`}
      ref={slideRef}
    >
      {titleArr.map((title: string, i: number) => (
        <StyledTitleSpan
          key={`project/list/slideTitle/${text}/${i}`}
          style={{ animationDuration: `${duration}s` }}
        >
          {title}
        </StyledTitleSpan>
      ))}
    </StyledHoverSlideTitle>
  );
}
