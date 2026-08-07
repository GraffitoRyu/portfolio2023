"use client";

import { useRef } from "react";
import { useAtomValue } from "jotai";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { assets } from "@graffitoryu/preset-data";

// style components
import {
  StyledPDVisualImage,
  StyledPDVisualImageContainer,
  StyledPDVisualImageCover,
} from "@graffitoryu/ui/product/styles/styled/components/ProjectDetail";

// state
import { pageDetailLoadState } from "@graffitoryu/ui/product/jotai/load.state";
import { scrollDetailSectionRefState } from "@graffitoryu/ui/product/jotai/interaction/scroll.state";

// hooks
import useGSAPAnimation from "@graffitoryu/ui/product/hooks/interaction/useGSAPAnimation";
import { ProductImage } from "@graffitoryu/ui/product/runtime/ProductRuntime";

export default function DetailVisualImage() {
  const { category, openComplete } = useAtomValue(pageDetailLoadState);

  const detailContainer = useAtomValue(
    scrollDetailSectionRefState("container"),
  );

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const imgCoverRef = useRef<HTMLDivElement | null>(null);
  const projectAssets =
    category && category in assets.public.projects
      ? assets.public.projects[category as keyof typeof assets.public.projects]
      : null;

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
      {category && projectAssets ? (
        <StyledPDVisualImage ref={imgRef}>
          <ProductImage
            src={projectAssets.intro}
            alt={typeof category === "string" ? category : "Detail Visual"}
            fill={true}
            placeholder="blur"
            blurDataURL={projectAssets.intro}
          />
        </StyledPDVisualImage>
      ) : null}
      <StyledPDVisualImageCover ref={imgCoverRef} />
    </StyledPDVisualImageContainer>
  );
}
