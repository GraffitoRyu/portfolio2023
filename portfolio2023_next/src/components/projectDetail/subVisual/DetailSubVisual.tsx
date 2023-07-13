"use client";

import { useParams } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

// components
import DetailMediaContents from "../common/media/DetailMediaContents";

// style components
import {
  PDSubVisual,
  PDSubVisualSection,
} from "@/styles/styled/components/ProjectDetail";

// state
import { detailData } from "@/states/detail";

// type
import { DetailTypes } from "@/types/projectDetails";
import { SubVisualType } from "@/types/projects";
import { detailScrollRefState } from "@/states/scroll";
import { DetailScrollRefStateTypes } from "@/types/state";
import { ctxScrollTrigger } from "@/util/presetScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function DetailSubVisual() {
  const { category } = useParams();
  const data = useRecoilValue<DetailTypes>(detailData);
  const [img, setImg] = useState<SubVisualType | null>(null);

  const { container: scrollContainer, scrollHeight } =
    useRecoilValue<DetailScrollRefStateTypes>(detailScrollRefState);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const subVisualRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const imgData = category ? data[category]?.sub_visual : undefined;
    if (typeof imgData !== "undefined") setImg(imgData);
    else setImg(null);
  }, [category, data]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer) return;

    const scrollTarget = subVisualRef.current;
    const scrollTrigger = triggerRef.current;
    if (!scrollTarget || !scrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

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
  }, [scrollContainer, scrollHeight]);

  return (
    <PDSubVisualSection ref={triggerRef}>
      <PDSubVisual ref={subVisualRef}>
        {img ? (
          <DetailMediaContents
            referType={img.referType}
            src={img.src}
            alt={category}
          />
        ) : null}
      </PDSubVisual>
    </PDSubVisualSection>
  );
}
