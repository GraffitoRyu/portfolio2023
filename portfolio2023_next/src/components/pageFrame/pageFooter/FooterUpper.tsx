"use client";

import { useCallback, useRef } from "react";
import { useAtomValue } from "jotai";

// style components
import {
  StyledFooterHeader,
  StyledFooterTitle,
  StyledFooterTitleLine,
} from "@/styles/styled/components/PageFooter";

// state
import { scrollPageSectionRefState } from "@/jotai/interaction/scroll.state";

// hooks
import useGSAPAnimation from "@/hooks/interaction/useGSAPAnimation";

export default function FooterUpperContainer() {
  const footer = useAtomValue(scrollPageSectionRefState("footer"));
  const footerTitleRef = useRef<HTMLHeadingElement | null>(null);

  const parallax = useCallback(
    (): UseGSAPAnimationHookOptions => ({
      target: footerTitleRef.current,
      direction: "from",
      animation: [
        {
          y: "-100%",
          scrollTrigger: {
            trigger: footer,
            start: "top bottom",
            end: "top top",
            scrub: true,
            // markers: true,
            invalidateOnRefresh: true,
          },
        },
      ],
    }),
    [footer],
  );

  useGSAPAnimation(
    {
      key: "page/footer/upper",
      elements: [footer, footerTitleRef.current],
      options: [parallax()],
    },
    [parallax],
  );

  return (
    <StyledFooterHeader>
      <StyledFooterTitle ref={footerTitleRef}>
        <StyledFooterTitleLine className="stroke-title">{`Let’s work`}</StyledFooterTitleLine>
        <StyledFooterTitleLine className="filled-title">
          together
        </StyledFooterTitleLine>
      </StyledFooterTitle>
    </StyledFooterHeader>
  );
}
