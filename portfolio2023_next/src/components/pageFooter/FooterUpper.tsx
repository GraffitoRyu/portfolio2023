import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";

// style components
import {
  FooterHeader,
  FooterTitle,
} from "@/styles/styled/components/PageFooter";

// types
import { ScrollRefStateTypes } from "@/types/state";

// state
import { scrollRefState } from "@/states/scroll";
import ctxScrollTrigger from "@/util/presetScrollTrigger";

export default function FooterUpperContainer() {
  const { container, footer } =
    useRecoilValue<ScrollRefStateTypes>(scrollRefState);
  const footerHeaderRef = useRef<HTMLElement | null>(null);
  const footerTitleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const scrollTrigger = footer?.current;
    if (!scrollTrigger) return;

    const scrollContainer = container?.current;
    const scrollTarget = footerTitleRef.current;
    if (!scrollContainer || !scrollTarget) return;

    const ftHeader = footerHeaderRef.current;
    const triggerEnd = ftHeader ? ftHeader.offsetTop : "top";

    const ctx = ctxScrollTrigger({
      direction: "from",
      container: scrollContainer,
      target: scrollTarget,
      options: {
        y: "-100%", // transform translate
        scrollTrigger: {
          trigger: scrollTrigger,
          start: "top bottom", // target, trigger
          end: `top ${triggerEnd}`, // target, trigger
          scrub: true,
          // markers: true,
        },
      },
    });

    return () => ctx.revert();
  }, [container, footer, footerHeaderRef, footerTitleRef]);

  return (
    <FooterHeader ref={footerHeaderRef}>
      <FooterTitle ref={footerTitleRef}>
        <span>{`Let's work`}</span>
        <span>together</span>
      </FooterTitle>
    </FooterHeader>
  );
}
