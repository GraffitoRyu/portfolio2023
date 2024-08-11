import { useParams } from "next/navigation";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { useAtomValue } from "jotai";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// style components
import {
  StyledPDVisualImage,
  StyledPDVisualImageContainer,
  StyledPDVisualImageCover,
} from "@/styles/styled/components/ProjectDetail";

// state
import { pageDetailLoadState } from "@/jotai/load.state";
import { scrollDetailRefState } from "@/jotai/interaction/scroll.state";

// util
import { ctxScrollTrigger } from "@/hooks/interaction/presetScrollTrigger";

export default function DetailVisualImage() {
  const { category } = useParams();
  const { open } = useAtomValue(pageDetailLoadState);

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const imgCoverRef = useRef<HTMLDivElement | null>(null);
  const { container: scrollContainer } =
    useAtomValue<DetailScrollRefStateTypes>(scrollDetailRefState);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer) return;

    const scrollTrigger = triggerRef.current;
    const scrollTarget_img = imgRef.current;
    const scrollTarget_cover = imgCoverRef.current;
    if (!scrollTrigger || !scrollTarget_img || !scrollTarget_cover) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      tweenArr: [
        {
          target: scrollTarget_img,
          options: [
            {
              y: () => 0.05 * ScrollTrigger.maxScroll(scrollContainer),
              scrollTrigger: {
                trigger: scrollTrigger,
                start: `top top`,
                end: `bottom top`,
                scrub: true,
                // markers: true,
              },
            },
          ],
        },
      ],
    });

    return () => ctx.revert();
  }, [scrollContainer, open]);

  return (
    <StyledPDVisualImageContainer ref={triggerRef}>
      {category ? (
        <StyledPDVisualImage ref={imgRef}>
          <Image
            src={`/img/details/intro_${category}.jpg`}
            alt={typeof category === "string" ? category : "Detail Visual"}
            fill={true}
            placeholder="blur"
            blurDataURL={`/img/details/intro_${category}.jpg`}
          />
        </StyledPDVisualImage>
      ) : null}
      <StyledPDVisualImageCover ref={imgCoverRef} />
    </StyledPDVisualImageContainer>
  );
}
