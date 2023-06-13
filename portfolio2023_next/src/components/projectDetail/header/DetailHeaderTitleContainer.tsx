import { useSearchParams } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

// style components
import {
  PDHeaderPageName,
  PDHeaderProjectName,
  PDHeaderTitleContainer,
} from "@/styles/styled/components/ProjectDetail";

// types
import { DetailTypes } from "@/types/projectDetails";

// state
import { detailData, detailLayoutState } from "@/states/detail";
import {
  DetailLayoutStateTypes,
  DetailScrollRefStateTypes,
} from "@/types/state";
import { detailScrollRefState } from "@/states/scroll";
import ctxScrollTrigger from "@/util/presetScrollTrigger";

export default function DetailHeaderTitleContainer() {
  const params = useSearchParams();
  const code = params.get("code");
  const data = useRecoilValue<DetailTypes>(detailData);
  const [title, setTitle] = useState<string>("");

  const { openComplete } =
    useRecoilValue<DetailLayoutStateTypes>(detailLayoutState);
  const detailScrollRef =
    useRecoilValue<DetailScrollRefStateTypes>(detailScrollRefState);
  const titleRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!code) return;

    const d = data[code];
    if (d?.summary?.title) setTitle(d.summary.title.join(" "));
  }, [code, data]);

  useEffect(() => {
    if (openComplete && code) {
      const scrollContainer = detailScrollRef.container?.current;
      const scrollTrigger = detailScrollRef.visual?.current;
      const visualTitleRef = detailScrollRef.visualTitle?.current;

      if (!scrollContainer || !scrollTrigger || !visualTitleRef) return;

      const scrollTarget = titleRef.current;
      if (!scrollTarget) return;

      const ctx = ctxScrollTrigger({
        container: scrollContainer,
        target: scrollTarget,
        options: {
          opacity: 1,
          scrollTrigger: {
            trigger: scrollTrigger,
            start: `${visualTitleRef.offsetTop} ${scrollTarget.offsetTop}`, // trigger, target
            end: `${visualTitleRef.offsetTop + scrollTarget.clientHeight} ${
              scrollTarget.offsetTop
            }`, // trigger, target
            scrub: true,
            // markers: true,
          },
        },
      });
      return () => ctx.revert();
    }
  }, [
    code,
    detailScrollRef.container,
    detailScrollRef.visual,
    detailScrollRef.visualTitle,
    openComplete,
  ]);

  return (
    <PDHeaderTitleContainer>
      <PDHeaderPageName>프로젝트</PDHeaderPageName>
      <PDHeaderProjectName ref={titleRef}>{title}</PDHeaderProjectName>
    </PDHeaderTitleContainer>
  );
}
