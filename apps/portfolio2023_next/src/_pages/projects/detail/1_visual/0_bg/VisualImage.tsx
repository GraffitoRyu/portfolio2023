"use client";

import Image from "next/image";
import { useRef } from "react";
import { useAtomValue } from "jotai";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// style components
import {
  StyledPDVisualImage,
  StyledPDVisualImageContainer,
  StyledPDVisualImageCover,
} from "@/styles/styled/components/ProjectDetail";

// state
import { pageDetailLoadState } from "@/jotai/load.state";
import { scrollDetailSectionRefState } from "@/jotai/interaction/scroll.state";

// hooks
import useGSAPAnimation from "@/hooks/interaction/useGSAPAnimation";

export default function DetailVisualImage() {
  const { category, openComplete } = useAtomValue(pageDetailLoadState);

  const detailContainer = useAtomValue(
    scrollDetailSectionRefState("container"),
  );

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const imgCoverRef = useRef<HTMLDivElement | null>(null);

  useGSAPAnimation(
    {
      key: "projects/detail/visual/bg",
      container: detailContainer,
      disabled: !openComplete,
      elements: [triggerRef.current, imgRef.current, imgCoverRef.current],
      options: [
        {
          target: imgRef.current,
          animation: [
            {
              y: () =>
                -0.05 * ScrollTrigger.maxScroll(detailContainer as HTMLElement),
              scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            },
          ],
        },
      ],
    },
    [openComplete],
  );

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
