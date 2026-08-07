"use client";

import { useCallback, useRef } from "react";
import { useAtomValue, useSetAtom } from "jotai";

// style components
import {
  StyledPDVisualTitle,
  StyledPDVisualTitleLine,
} from "@graffitoryu/ui/product/styles/styled/components/ProjectDetail";

// state
import { scrollDetailSectionRefState } from "@graffitoryu/ui/product/jotai/interaction/scroll.state";

// hooks
import useProjectCategoryDetailData from "@graffitoryu/ui/product/hooks/data/useProjectCategoryDetailData";
import useGSAPAnimation from "@graffitoryu/ui/product/hooks/interaction/useGSAPAnimation";

export default function DetailVisualTitle() {
  const { title = [""], openComplete } = useProjectCategoryDetailData();

  const detailContainer = useAtomValue(
    scrollDetailSectionRefState("container"),
  );
  const setVisualTitleRef = useSetAtom(
    scrollDetailSectionRefState("visualTitle"),
  );

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const updateScrollRef = useCallback(
    (node: HTMLHeadingElement | null) => {
      titleRef.current = node;
      setVisualTitleRef(node);
    },
    [setVisualTitleRef],
  );

  useGSAPAnimation(
    {
      key: "projects/detail/visual/title",
      container: detailContainer,
      disabled: !openComplete,
      elements: [titleRef.current],
      options: [
        {
          target: titleRef.current,
          animation: [
            {
              opacity: 0,
              scrollTrigger: {
                trigger: titleRef.current,
                start: `top 30%`,
                end: `top top`,
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
    <StyledPDVisualTitle
      className={openComplete ? "" : "hide"}
      ref={updateScrollRef}
    >
      {title.map((t: string, i: number) => (
        <StyledPDVisualTitleLine key={`projects/detail/title/${i}`} $index={i}>
          {t}
        </StyledPDVisualTitleLine>
      ))}
    </StyledPDVisualTitle>
  );
}
