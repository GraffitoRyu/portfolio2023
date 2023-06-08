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
  const footerHeaderRef = useRef<HTMLElement>(null);
  const footerTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!footer?.current) return;

    const foot_top = footerHeaderRef.current
      ? footerHeaderRef.current.offsetTop
      : "top";
    const init_pos = "-100%";

    const ctx = ctxScrollTrigger({
      direction: "from",
      container: container?.current,
      target: footerTitleRef.current,
      options: {
        y: init_pos, // transform translate
        scrollTrigger: {
          trigger: footer.current,
          start: "top bottom", // target, trigger
          end: `top ${foot_top}`, // target, trigger
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
