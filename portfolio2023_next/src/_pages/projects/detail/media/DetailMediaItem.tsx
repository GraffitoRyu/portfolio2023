"use client";

import { Suspense, useLayoutEffect, useRef } from "react";
import { useAtomValue } from "jotai";

// components
import DetailMediaContents from "../common/media/DetailMediaContents";

// style components
import {
  StyledPDMediaFigure,
  StyledPDMediaItem,
} from "@/styles/styled/components/ProjectDetail";

// state
import { viewportState } from "@/jotai/viewport.state";

// util
import { ctxScrollTrigger } from "@/hooks/interaction/presetScrollTrigger";
import { scrollDetailRefState } from "@/jotai/interaction/scroll.state";

export default function DetailMediaItem({ data }: { data: MediaType }) {
  const { windowWidth } = useAtomValue(viewportState);
  const { container: scrollContainer } =
    useAtomValue<DetailScrollRefStateTypes>(scrollDetailRefState);
  const figureRef = useRef<HTMLElement | null>(null);

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
                end: `start ${windowWidth < 640 ? `60%` : `30%`}`,
                scrub: true,
              },
            },
          ],
        },
      ],
    });

    return () => ctx.revert();
  }, [scrollContainer, windowWidth]);

  return (
    <StyledPDMediaItem>
      <StyledPDMediaFigure ref={figureRef}>
        <Suspense fallback={<span>Loading...</span>}>
          <DetailMediaContents
            referType={data.referType}
            src={data.src}
            alt={data.alt}
          />
        </Suspense>
      </StyledPDMediaFigure>
    </StyledPDMediaItem>
  );
}
