import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAtomValue } from "jotai";

// style components
import {
  StyledFooterHeader,
  StyledFooterTitle,
  StyledFooterTitleLine,
} from "@/styles/styled/components/PageFooter";

// state
import { scrollPageRefState } from "@/jotai/interaction/scroll.state";

// util
import { ctxScrollTrigger } from "@/hooks/interaction/presetScrollTrigger";

export default function FooterUpperContainer() {
  const { container: scrollContainer, footer: scrollTrigger } =
    useAtomValue<ScrollRefStateTypes>(scrollPageRefState);
  const footerTitleRef = useRef<HTMLHeadingElement | null>(null);
  const [footerPos, setFooterPos] = useState<number>(0);

  useEffect(() => {
    if (!scrollTrigger) return;
    if (scrollTrigger.offsetTop != footerPos)
      setFooterPos(scrollTrigger.offsetTop);
  }, [footerPos, scrollTrigger]);

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
                invalidateOnRefresh: true,
              },
            },
          ],
        },
      ],
    });

    return () => ctx.revert();
  }, [footerPos, footerTitleRef, scrollContainer, scrollTrigger]);

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
