"use client";

import { useParams } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useRecoilState, useRecoilValue } from "recoil";

// style components
import {
  PDVisualTitle,
  PDVisualTitleLine,
} from "@/styles/styled/components/ProjectDetail";

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

export default function DetailVisualTitle() {
  const { category } = useParams();
  const data = useRecoilValue<DetailTypes>(detailData);
  const [title, setTitle] = useState<string[]>([""]);

  const [{ container: scrollContainer, scrollHeight }, setDetailScrollRef] =
    useRecoilState<DetailScrollRefStateTypes>(detailScrollRefState);

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const updateScrollRef = useCallback(
    (node: HTMLHeadingElement | null) => {
      titleRef.current = node;
      setDetailScrollRef(prev => ({ ...prev, visualTitle: node }));
    },
    [setDetailScrollRef],
  );

  const { openComplete } =
    useRecoilValue<DetailLayoutStateTypes>(detailLayoutState);
  const [hide, setHide] = useState<string>("hide");

  useLayoutEffect(() => {
    if (
      typeof category === "string" &&
      data?.[category]?.summary?.title?.length > 0
    ) {
      setTitle(data[category].summary.title);
    } else {
      setTitle([]);
    }
  }, [category, data]);

  useEffect(() => {
    setHide(openComplete ? "" : "hide");
  }, [openComplete]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer) return;

    const scrollTarget = titleRef.current;
    if (!scrollTarget) return;

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      tweenArr: [
        {
          target: scrollTarget,
          options: [
            {
              opacity: 0,
              scrollTrigger: {
                trigger: scrollTarget,
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
  }, [scrollContainer, scrollHeight]);

  return (
    <PDVisualTitle className={`${hide}`} ref={updateScrollRef}>
      {title.map((t: string, i: number) => (
        <PDVisualTitleLine key={`detailTitle_${t}_${i}`} $index={i}>
          {t}
        </PDVisualTitleLine>
      ))}
    </PDVisualTitle>
  );
}
