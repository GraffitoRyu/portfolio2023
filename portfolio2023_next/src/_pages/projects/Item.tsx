"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";

// components
import SlideTitle from "@/_pages/projects/item/SlideTitle";
import ProjectSummary from "@/_pages/projects/item/Summary";
import BtnIcon from "@/_pages/projects/item/BtnIcon";

// style components
import {
  ProjectItemBorder,
  ProjectItemContainer,
} from "@/styles/styled/components/ProjectList";

// state
import { scrollPageRefState } from "@/jotai/interaction/scroll.state";
import { pageDetailLoadState } from "@/jotai/load.state";

// util
import { ctxScrollTrigger } from "@/hooks/interaction/presetScrollTrigger";

export default function ProjectItem({
  code,
  summary,
  $isLast,
}: {
  code: string;
  summary: SummaryType;
  $isLast: boolean;
}) {
  const router = useRouter();
  const { category } = useParams();

  const [hide, setHide] = useState<string>("hide");
  const [hover, setHover] = useState<string>("");

  const setDetailLoad = useSetAtom(pageDetailLoadState);

  const { container: scrollContainer, projectList } =
    useAtomValue<ScrollRefStateTypes>(scrollPageRefState);
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
              start: `top 90%`,
              end: `top 90%`,
              onEnter: () => {
                setHide("");
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
  }, [scrollContainer]);

  // 초기화
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer) return;

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      normalize: true,
      create: {
        trigger: projectList,
        start: `top bottom`,
        end: `top bottom`,
        onLeaveBack: () => {
          setHide("hide");
        },
      },
    });

    return () => ctx.revert();
  }, [projectList, scrollContainer]);

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
        setDetailLoad(prev => ({ ...prev, clicked: true, loading: true }));
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
