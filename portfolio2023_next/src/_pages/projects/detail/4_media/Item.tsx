"use client";

import { useCallback, useRef } from "react";
import { useAtomValue } from "jotai";

// components
import DetailMediaContents from "../common/media/Contents";

// style components
import {
  StyledPDMediaFigure,
  StyledPDMediaItem,
} from "@/styles/styled/components/ProjectDetail";

// state
import { scrollDetailSectionRefState } from "@/jotai/interaction/scroll.state";

// hooks
import useCheckView from "@/hooks/layout/useCheckView";
import useGSAPAnimation from "@/hooks/interaction/useGSAPAnimation";

export default function DetailMediaItem({
  data,
  openComplete,
}: {
  data: MediaType;
  openComplete: boolean;
}) {
  const { isCustomView } = useCheckView(640);

  const detailContainer = useAtomValue(
    scrollDetailSectionRefState("container"),
  );
  const figureRef = useRef<HTMLElement | null>(null);

  const triggerEnd = useCallback(
    () => `start ${isCustomView ? `60%` : `30%`}`,
    [isCustomView],
  );

  useGSAPAnimation(
    {
      key: "projects/detail/media",
      container: detailContainer,
      disabled: !openComplete,
      elements: [figureRef.current],
      options: [
        {
          target: figureRef.current,
          animation: [
            {
              opacity: 1,
              scale: 1,
              scrollTrigger: {
                trigger: figureRef.current,
                start: "start 90%",
                end: triggerEnd,
                scrub: true,
              },
            },
          ],
        },
      ],
    },
    [openComplete, data, triggerEnd],
  );

  return (
    <StyledPDMediaItem>
      <StyledPDMediaFigure ref={figureRef}>
        <DetailMediaContents
          referType={data.referType}
          src={data.src}
          alt={data.alt}
        />
      </StyledPDMediaFigure>
    </StyledPDMediaItem>
  );
}
