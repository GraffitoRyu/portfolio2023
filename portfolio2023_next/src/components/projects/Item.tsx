"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

// components
import SlideTitle from "@/components/projects/item/SlideTitle";
import ProjectSummary from "@/components/projects/item/Summary";
import BtnIcon from "@/components/projects/item/BtnIcon";

// style components
import {
  ProjectItemBorder,
  ProjectItemContainer,
} from "@/styles/styled/components/ProjectList";

// state
import { scrollRefState } from "@/states/scroll";
import { detailLayoutState } from "@/states/detail";

// type
import { SummaryType } from "@/types/projects";
import { DetailLayoutStateTypes, ScrollRefStateTypes } from "@/types/state";

// util
import { ctxScrollTrigger } from "@/util/presetScrollTrigger";

export default function ProjectItem({
  code,
  summary,
  $isLast,
}: {
  code: string;
  summary: SummaryType;
  $isLast: boolean;
}): JSX.Element {
  const router = useRouter();
  const { category } = useParams();

  const [hide, setHide] = useState<string>("hide");
  const [hover, setHover] = useState<string>("");

  const setDetailLayout =
    useSetRecoilState<DetailLayoutStateTypes>(detailLayoutState);

  const { container: scrollContainer, stickyHeight } =
    useRecoilValue<ScrollRefStateTypes>(scrollRefState);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer) return;

    const trigger = triggerRef.current;
    if (!trigger) return;

    const scrollOptions = [
      {
        target: trigger,
        options: [
          {
            scrollTrigger: {
              trigger,
              start: `top 80%`,
              end: `top 60%`,
              onEnter: () => {
                setHide("");
              },
              onLeaveBack: () => {
                setHide("hide");
              },
            },
          },
        ],
      },
    ];

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      tweenArr: [...scrollOptions],
    });

    return () => ctx.revert();
  }, [scrollContainer, stickyHeight]);

  // 프로젝트 상세 열 때, 호버 상태 초기화
  useEffect(() => {
    if (category) setHover("");
  }, [category]);

  return (
    <ProjectItemContainer
      type="button"
      ref={triggerRef}
      className={`${hide} ${hover}`}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
      onClick={() => {
        setDetailLayout(prev => ({ ...prev, loading: true }));
        router.push(`/projects/${code}`);
      }}
    >
      <ProjectItemBorder $pos="top" />
      <ProjectSummary code={code} summary={summary} />
      <SlideTitle text={summary.title} />
      <BtnIcon />
      {$isLast && <ProjectItemBorder $pos="bottom" />}
    </ProjectItemContainer>
  );
}
