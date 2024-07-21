import { useParams } from "next/navigation";
import { useLayoutEffect, useMemo, useRef } from "react";
import { useAtomValue } from "jotai";

// style components
import {
  PDHeaderPageName,
  PDHeaderProjectName,
  PDHeaderTitleContainer,
} from "@/styles/styled/components/ProjectDetail";

// state
import { pageDetailLoadState } from "@/jotai/load.state";
import { projectDetailDataState } from "@/jotai/pages/project.detail.state";

// util
import { ctxScrollTrigger } from "@/util/interactions/presetScrollTrigger";
import { scrollDetailRefState } from "@/jotai/interaction/scroll.state";

export default function DetailHeaderTitleContainer() {
  const { category } = useParams();
  const data = useAtomValue<DetailDataCollectionTypes>(projectDetailDataState);

  const { openComplete } = useAtomValue(pageDetailLoadState);
  const {
    container: scrollContainer,
    sectionVisual: scrollTrigger,
    visualTitle: visualTitleRef,
  } = useAtomValue<DetailScrollRefStateTypes>(scrollDetailRefState);
  const titleRef = useRef<HTMLSpanElement>(null);

  const title = useMemo((): string => {
    if (typeof category !== "string" || !data?.[category]) return "";

    const d = data[category];
    return d.summary.title.join(" ");
  }, [category, data]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (openComplete && category) {
      if (!scrollContainer || !scrollTrigger || !visualTitleRef) return;

      const scrollTarget = titleRef.current;
      if (!scrollTarget) return;

      const targetStart =
        visualTitleRef.offsetTop + visualTitleRef.clientHeight;

      const ctx = ctxScrollTrigger({
        container: scrollContainer,
        tweenArr: [
          {
            target: scrollTarget,
            options: [
              {
                opacity: 1,
                scrollTrigger: {
                  trigger: scrollTrigger,
                  start: `${targetStart} ${scrollTarget.offsetTop}`,
                  end: `bottom ${scrollTarget.offsetTop}`,
                  scrub: true,
                  invalidateOnRefresh: true,
                  // markers: true,
                },
              },
            ],
          },
        ],
      });
      return () => ctx.revert();
    }
  }, [category, openComplete, scrollContainer, scrollTrigger, visualTitleRef]);

  return (
    <PDHeaderTitleContainer>
      <PDHeaderPageName>프로젝트</PDHeaderPageName>
      <PDHeaderProjectName ref={titleRef}>{title}</PDHeaderProjectName>
    </PDHeaderTitleContainer>
  );
}
