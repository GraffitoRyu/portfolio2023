import { useParams } from "next/navigation";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { useAtomValue } from "jotai";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// style components
import {
  PDVisualImage,
  PDVisualImageContainer,
  PDVisualImageCover,
} from "@/styles/styled/components/ProjectDetail";

// state
import { detailScrollRefState } from "@/states/scroll";
import { pageDetailLoadState } from "@/jotai/pages/load";

// util
import { ctxScrollTrigger } from "@/util/interactions/presetScrollTrigger";

export default function DetailVisualImage() {
  const { category } = useParams();
  const { open } = useAtomValue(pageDetailLoadState);

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const imgCoverRef = useRef<HTMLDivElement | null>(null);
  const { container: scrollContainer, scrollHeight } =
    useRecoilValue<DetailScrollRefStateTypes>(detailScrollRefState);

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
  }, [scrollContainer, scrollHeight, open]);

  return (
    <PDVisualImageContainer ref={triggerRef}>
      {category ? (
        <PDVisualImage ref={imgRef}>
          <Image
            src={`/img/details/intro_${category}.jpg`}
            alt={typeof category === "string" ? category : "Detail Visual"}
            fill={true}
            placeholder="blur"
            blurDataURL={`/img/details/intro_${category}.jpg`}
          />
        </PDVisualImage>
      ) : null}
      <PDVisualImageCover ref={imgCoverRef} />
    </PDVisualImageContainer>
  );
}
