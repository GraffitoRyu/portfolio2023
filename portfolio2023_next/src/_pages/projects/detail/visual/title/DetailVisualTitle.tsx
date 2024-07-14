"use client";

import { useParams } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useAtomValue } from "jotai";

// style components
import {
  PDVisualTitle,
  PDVisualTitleLine,
} from "@/styles/styled/components/ProjectDetail";

// state
import { pageDetailLoadState } from "@/jotai/load.state";
import { projectDetailDataState } from "@/jotai/pages/project.detail.state";

// util
import { ctxScrollTrigger } from "@/util/interactions/presetScrollTrigger";

export default function DetailVisualTitle() {
  const { category } = useParams();
  const data = useAtomValue<DetailTypes>(projectDetailDataState);
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
    useAtomValue<PageDetailLoadStateTypes>(pageDetailLoadState);
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
