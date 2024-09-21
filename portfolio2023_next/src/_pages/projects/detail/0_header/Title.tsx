import { useLayoutEffect, useMemo, useRef } from "react";
import { useAtomValue } from "jotai";

// style components
import {
  StyledPDHeaderPageName,
  StyledPDHeaderProjectName,
  StyledPDHeaderTitleContainer,
} from "@/styles/styled/components/ProjectDetail";

// state
import { pageDetailLoadState } from "@/jotai/load.state";

// util
import { ctxScrollTrigger } from "@/hooks/interaction/presetScrollTrigger";
import { scrollDetailRefState } from "@/jotai/interaction/scroll.state";
import useProjectCategoryDetailData from "@/hooks/data/useProjectCategoryDetailData";

export default function DetailHeaderTitle() {
  const { title: titleArr } = useProjectCategoryDetailData();

  const { openComplete } = useAtomValue(pageDetailLoadState);
  const {
    container: scrollContainer,
    sectionVisual: scrollTrigger,
    visualTitle: visualTitleRef,
  } = useAtomValue<DetailScrollRefStateTypes>(scrollDetailRefState);
  const titleRef = useRef<HTMLSpanElement>(null);

  const title = useMemo(
    (): string => (titleArr ? titleArr.join("") : ""),
    [titleArr],
  );

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (openComplete) {
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
  }, [openComplete, scrollContainer, scrollTrigger, visualTitleRef]);

  return (
    <StyledPDHeaderTitleContainer>
      <StyledPDHeaderPageName>프로젝트</StyledPDHeaderPageName>
      <StyledPDHeaderProjectName ref={titleRef}>
        {title}
      </StyledPDHeaderProjectName>
    </StyledPDHeaderTitleContainer>
  );
}
