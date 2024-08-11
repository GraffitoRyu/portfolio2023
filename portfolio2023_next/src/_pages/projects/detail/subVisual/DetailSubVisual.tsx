"use client";

import { useParams } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import { useAtomValue } from "jotai";

// components
import DetailMediaContents from "../common/media/DetailMediaContents";

// style components
import {
  StyledPDSubVisual,
  StyledPDSubVisualSection,
} from "@/styles/styled/components/ProjectDetail";

// state
import { projectDetailDataState } from "@/jotai/pages/project.detail.state";

// util
import { ctxScrollTrigger } from "@/hooks/interaction/presetScrollTrigger";
import { scrollDetailRefState } from "@/jotai/interaction/scroll.state";

export default function DetailSubVisual() {
  const { category } = useParams();
  const data = useAtomValue<DetailDataCollectionTypes>(projectDetailDataState);
  const [img, setImg] = useState<MediaType | null>(null);

  const { container: scrollContainer } =
    useAtomValue<DetailScrollRefStateTypes>(scrollDetailRefState);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const subVisualRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (typeof category !== "string" || !data?.[category]) return;

    const imgData = data[category]?.sub_visual;
    if (typeof imgData !== "undefined") setImg(imgData);
    else setImg(null);
  }, [category, data]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer) return;

    const scrollTarget = subVisualRef.current;
    const scrollTrigger = triggerRef.current;
    if (!scrollTarget || !scrollTrigger) return;

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      tweenArr: [
        {
          target: scrollTarget,
          options: [
            {
              scale: 0.8,
              scrollTrigger: {
                trigger: scrollTrigger,
                start: `top 70%`,
                end: `bottom 30%`,
                scrub: true,
                // markers: true,
              },
            },
          ],
        },
      ],
    });

    return () => ctx.revert();
  }, [scrollContainer]);

  return (
    <StyledPDSubVisualSection ref={triggerRef}>
      <StyledPDSubVisual ref={subVisualRef}>
        {img?.sec ? (
          <DetailMediaContents
            referType={img.referType}
            src={img.src}
            alt={typeof category === "string" ? category : "Detail SubVisual"}
          />
        ) : null}
      </StyledPDSubVisual>
    </StyledPDSubVisualSection>
  );
}
