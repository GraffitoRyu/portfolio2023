import { useEffect, useRef, useState } from "react";
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
  const {
    container: scrollContainer,
    footer: scrollTrigger,
    stickyHeight,
  } = useRecoilValue<ScrollRefStateTypes>(scrollRefState);
  const footerTitleRef = useRef<HTMLHeadingElement | null>(null);
  const [footerPos, setFooterPos] = useState<number>(0);

  useEffect(() => {
    if (!scrollTrigger) return;
    if (scrollTrigger.offsetTop != footerPos)
      setFooterPos(scrollTrigger.offsetTop);
  }, [footerPos, scrollTrigger]);

  useEffect(() => {
    if (!scrollContainer || !scrollTrigger) return;

    const scrollTarget = footerTitleRef.current;
    if (!scrollTarget) return;

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      tweenArr: [
        {
          direction: "from",
          target: scrollTarget,
          options: [
            {
              y: "-100%", // transform translate
              scrollTrigger: {
                trigger: scrollTrigger,
                start: `top bottom`, // target, trigger
                end: `top top`, // target, trigger
                scrub: true,
                invalidateOnRefresh: true,
              },
            },
          ],
        },
      ],
    });

    return () => ctx.revert();
  }, [footerPos, footerTitleRef, scrollContainer, scrollTrigger, stickyHeight]);

  return (
    <FooterHeader>
      <FooterTitle ref={footerTitleRef}>
        <FooterTitleLine className="stroke-title">{`Let's work`}</FooterTitleLine>
        <FooterTitleLine className="filled-title">together</FooterTitleLine>
      </FooterTitle>
    </FooterHeader>
  );
}
