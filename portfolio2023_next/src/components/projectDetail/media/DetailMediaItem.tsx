"use client";

import { useLayoutEffect, useRef } from "react";
import { useRecoilValue } from "recoil";

// components
import DetailMediaContents from "../common/media/DetailMediaContents";

// style components
import {
  PDMediaFigure,
  PDMediaItem,
} from "@/styles/styled/components/ProjectDetail";

// types
import { MediaType } from "@/types/projects";
import { DetailScrollRefStateTypes, ScreenSizeTypes } from "@/types/state";

// state
import { screenSizeState } from "@/states/screen";
import { detailScrollRefState } from "@/states/scroll";

// util
import { ctxScrollTrigger } from "@/util/presetScrollTrigger";

export default function DetailMediaItem({ data }: { data: MediaType }) {
  const { windowWidth } = useRecoilValue<ScreenSizeTypes>(screenSizeState);
  const { container: scrollContainer, scrollHeight } =
    useRecoilValue<DetailScrollRefStateTypes>(detailScrollRefState);
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
  }, [scrollContainer, scrollHeight, windowWidth]);

  return (
    <PDMediaItem>
      <PDMediaFigure ref={figureRef}>
        <DetailMediaContents
          referType={data.referType}
          src={data.src}
          alt={data.alt}
        />
      </PDMediaFigure>
    </PDMediaItem>
  );
}
