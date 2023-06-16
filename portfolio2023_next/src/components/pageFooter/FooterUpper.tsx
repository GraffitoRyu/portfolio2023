import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";

// style components
import {
  FooterHeader,
  FooterTitle,
  FooterTitleLine,
} from "@/styles/styled/components/PageFooter";

// types
import { ScrollRefStateTypes } from "@/types/state";

// state
import { scrollRefState } from "@/states/scroll";

// util
import { ctxScrollTrigger } from "@/util/presetScrollTrigger";

export default function FooterUpperContainer() {
  const { container: scrollContainer, footer: scrollTrigger } =
    useRecoilValue<ScrollRefStateTypes>(scrollRefState);
  const footerHeaderRef = useRef<HTMLElement | null>(null);
  const footerTitleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!scrollTrigger) return;

    const scrollTarget = footerTitleRef.current;
    if (!scrollContainer || !scrollTarget) return;

    const ftHeader = footerHeaderRef.current;
    if (!ftHeader) return;

    const ctx = ctxScrollTrigger({
      direction: "from",
      container: scrollContainer,
      target: scrollTarget,
      options: {
        y: "-100%", // transform translate
        scrollTrigger: {
          trigger: scrollTrigger,
          start: "top bottom", // target, trigger
          end: `top ${ftHeader.offsetTop}`, // target, trigger
          scrub: true,
          // markers: true,
        },
      },
    });

    return () => ctx.revert();
  }, [footerHeaderRef, footerTitleRef, scrollContainer, scrollTrigger]);

  return (
    <FooterHeader ref={footerHeaderRef}>
      <FooterTitle ref={footerTitleRef}>
        <FooterTitleLine className="stroke-title">{`Let's work`}</FooterTitleLine>
        <FooterTitleLine className="filled-title">together</FooterTitleLine>
      </FooterTitle>
    </FooterHeader>
  );
}
