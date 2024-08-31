import { useLayoutEffect, useRef } from "react";
import { useAtomValue } from "jotai";

// style components
import {
  StyledFooterHeader,
  StyledFooterTitle,
  StyledFooterTitleLine,
} from "@/styles/styled/components/PageFooter";

// state
import {
  scrollPageHeightState,
  scrollPageSectionRefState,
} from "@/jotai/interaction/scroll.state";

// util
import { ctxScrollTrigger } from "@/hooks/interaction/presetScrollTrigger";

export default function FooterUpperContainer() {
  const scrollContainer = useAtomValue(scrollPageSectionRefState("container"));
  const scrollTrigger = useAtomValue(scrollPageSectionRefState("footer"));

  const scrollHeight = useAtomValue(scrollPageHeightState);

  const footerTitleRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer || !scrollTrigger) return;

    const scrollTarget = footerTitleRef.current;
    if (!scrollTarget) return;

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      normalize: true,
      tweenArr: [
        {
          direction: "from",
          target: scrollTarget,
          options: [
            {
              y: "-100%", // transform translate
              scrollTrigger: {
                trigger: scrollTrigger,
                start: `top bottom`, // target, view
                end: `top top`, // target, view
                scrub: true,
                // markers: true,
                invalidateOnRefresh: true,
              },
            },
          ],
        },
      ],
    });

    return () => ctx.revert();
  }, [scrollHeight, footerTitleRef, scrollContainer, scrollTrigger]);

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
