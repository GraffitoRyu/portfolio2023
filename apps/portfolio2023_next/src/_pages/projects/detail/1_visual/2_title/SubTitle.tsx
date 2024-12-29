"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useAtomValue } from "jotai";

// style components
import { StyledPDVisualSubtitle } from "@/styles/styled/components/ProjectDetail";

// hook
import useProjectCategoryDetailData from "@/hooks/data/useProjectCategoryDetailData";

// state
import { scrollDetailSectionRefState } from "@/jotai/interaction/scroll.state";

// hooks
import useGSAPAnimation from "@/hooks/interaction/useGSAPAnimation";

export default function DetailVisualSubTitle() {
  const { data, title, openComplete } = useProjectCategoryDetailData();

  const detailContainer = useAtomValue(
    scrollDetailSectionRefState("container"),
  );
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  const desc = useMemo(
    () => (data?.summary?.desc ? data.summary.desc : ""),
    [data],
  );

  const delayIndex = useMemo(() => (title ? title.length : 0), [title]);

  const isHide = useMemo(() => !openComplete, [openComplete]);
  const [isInit, setInit] = useState<boolean>(true);

  useEffect(() => {
    if (!openComplete) {
      if (isInit !== true) setInit(true);
      return;
    }

    if (isInit === false) return;

    const DELAY = delayIndex * 200 + 1600;
    setTimeout(() => {
      setInit(false);
    }, DELAY);
  }, [delayIndex, isInit, openComplete]);

  useGSAPAnimation(
    {
      key: "projects/detail/visual/subtitle",
      container: detailContainer,
      disabled: !openComplete || isInit,
      elements: [subtitleRef.current],
      options: [
        {
          target: subtitleRef.current,
          animation: [
            {
              opacity: 0,
              scrollTrigger: {
                trigger: subtitleRef.current,
                start: "top 30%",
                end: "top top",
                scrub: true,
              },
            },
          ],
        },
      ],
    },
    [isInit, openComplete],
  );

  return (
    <StyledPDVisualSubtitle
      className={`${isHide ? "hide" : ""} ${isInit ? "init-hide" : ""}`}
      $index={delayIndex}
      ref={subtitleRef}
    >
      {desc}
    </StyledPDVisualSubtitle>
  );
}
