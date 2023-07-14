"use client";

import { useParams } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

// style components
import { PDVisualSubtitle } from "@/styles/styled/components/ProjectDetail";

// state
import { detailScrollRefState } from "@/states/scroll";
import { detailData, detailLayoutState } from "@/states/detail";

// type
import { DetailTypes } from "@/types/projectDetails";
import {
  DetailLayoutStateTypes,
  DetailScrollRefStateTypes,
} from "@/types/state";

// util
import { ctxScrollTrigger } from "@/util/presetScrollTrigger";

export default function DetailVisualSubtitle() {
  const { category } = useParams();
  const data = useRecoilValue<DetailTypes>(detailData);
  const [desc, setDesc] = useState<string>("");

  const { openComplete } =
    useRecoilValue<DetailLayoutStateTypes>(detailLayoutState);
  const [delayIndex, setDelayIndex] = useState<number>(0);
  const [hide, setHide] = useState<string>("init-hide hide");

  const { container: scrollContainer, scrollHeight } =
    useRecoilValue<DetailScrollRefStateTypes>(detailScrollRefState);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    if (category && data[category]?.summary?.desc) {
      setDesc(data[category].summary.desc);
      const titleLength = data[category].summary.title?.length ?? 0;
      setDelayIndex(titleLength);
    } else {
      setDesc("");
      setDelayIndex(0);
    }
  }, [category, data]);

  useEffect(() => {
    if (openComplete) {
      setHide("init-hide");
      setTimeout(() => {
        setHide("");
      }, delayIndex * 200 + 1600);
    } else setHide("init-hide hide");
  }, [openComplete]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer) return;

    const subtitle = subtitleRef.current;
    if (!subtitle) return;

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      tweenArr: [
        {
          target: subtitle,
          options: [
            {
              opacity: 0,
              scrollTrigger: {
                trigger: subtitle,
                start: `top 30%`,
                end: `top top`,
                scrub: true,
              },
            },
          ],
        },
      ],
    });

    return () => ctx.revert();
  }, [scrollHeight]);

  return (
    <PDVisualSubtitle
      className={`${hide}`}
      $index={delayIndex}
      ref={subtitleRef}
    >
      {desc}
    </PDVisualSubtitle>
  );
}
