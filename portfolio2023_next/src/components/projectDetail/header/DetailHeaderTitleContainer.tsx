import { useParams } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

// style components
import {
  PDHeaderPageName,
  PDHeaderProjectName,
  PDHeaderTitleContainer,
} from "@/styles/styled/components/ProjectDetail";

// types
import {
  DetailLayoutStateTypes,
  DetailScrollRefStateTypes,
} from "@/types/state";
import { DetailTypes } from "@/types/projectDetails";

// state
import { detailData, detailLayoutState } from "@/states/detail";
import { detailScrollRefState } from "@/states/scroll";

// util
import { ctxScrollTrigger } from "@/util/presetScrollTrigger";

export default function DetailHeaderTitleContainer() {
  const { category } = useParams();
  const data = useRecoilValue<DetailTypes>(detailData);
  const [title, setTitle] = useState<string>("");

  const { openComplete } =
    useRecoilValue<DetailLayoutStateTypes>(detailLayoutState);
  const {
    container: scrollContainer,
    visual: scrollTrigger,
    visualTitle: visualTitleRef,
  } = useRecoilValue<DetailScrollRefStateTypes>(detailScrollRefState);
  const titleRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (typeof category !== "string" || !data?.[category]) return;

    const d = data[category];
    if (d?.summary?.title) setTitle(d.summary.title.join(" "));
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
