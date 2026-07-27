"use client";

import { useMemo, useRef } from "react";
import { useAtomValue } from "jotai";

// components
import DetailMediaContents from "../common/media/Contents";

// style components
import {
  StyledPDSubVisual,
  StyledPDSubVisualSection,
} from "@/styles/styled/components/ProjectDetail";

// hook
import useProjectCategoryDetailData from "@/hooks/data/useProjectCategoryDetailData";

// state
import { scrollDetailSectionRefState } from "@/jotai/interaction/scroll.state";

// util
import useGSAPAnimation from "@/hooks/interaction/useGSAPAnimation";

export default function DetailSubVisual() {
  const { category, data, openComplete } = useProjectCategoryDetailData();

  const detailContainer = useAtomValue(
    scrollDetailSectionRefState("container"),
  );
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const subVisualRef = useRef<HTMLElement | null>(null);

  const img = useMemo(
    () => (typeof data?.sub_visual === "undefined" ? null : data.sub_visual),
    [data?.sub_visual],
  );

  useGSAPAnimation(
    {
      key: "projects/detail/subVisual",
      container: detailContainer,
      disabled: !openComplete,
      elements: [subVisualRef.current, triggerRef.current],
      options: [
        {
          target: subVisualRef.current,
          animation: [
            {
              scale: 0.8,
              scrollTrigger: {
                trigger: triggerRef.current,
                start: `top 70%`,
                end: `bottom 30%`,
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
    <StyledPDSubVisualSection ref={triggerRef}>
      <StyledPDSubVisual ref={subVisualRef}>
        {img?.src ? (
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
