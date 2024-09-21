"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { useAtomValue } from "jotai";

// components
import DetailMediaContents from "../common/media/Contents";

// style components
import {
  StyledPDMediaFigure,
  StyledPDMediaItem,
} from "@/styles/styled/components/ProjectDetail";

// state
import { viewportState } from "@/jotai/viewport.state";
import {
  scrollDetailHeightState,
  scrollDetailSectionRefState,
} from "@/jotai/interaction/scroll.state";

// util
import { ctxScrollTrigger } from "@/hooks/interaction/presetScrollTrigger";

export default function DetailMediaItem({ data }: { data: MediaType }) {
  const { windowWidth } = useAtomValue(viewportState);
  const scrollContainer = useAtomValue(
    scrollDetailSectionRefState("container"),
  );
  const figureRef = useRef<HTMLElement | null>(null);

  const scrollHeight = useAtomValue(scrollDetailHeightState);

  const triggerEnd = useMemo(
    () => `start ${windowWidth < 640 ? `60%` : `30%`}`,
    [windowWidth],
  );

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer) return;

    const fig = figureRef.current;
    if (!fig) return;

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      tweenArr: [
        {
          target: fig,
          options: [
            {
              opacity: 1,
              scale: 1,
              scrollTrigger: {
                trigger: fig,
                start: `start 90%`,
                end: triggerEnd,
                scrub: true,
              },
            },
          ],
        },
      ],
    });

    return () => ctx.revert();
  }, [scrollContainer, triggerEnd, data, scrollHeight]);

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
