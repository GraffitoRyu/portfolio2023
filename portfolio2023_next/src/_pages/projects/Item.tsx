"use client";

import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";

// components
import SlideTitle from "@/_pages/projects/item/SlideTitle";
import ProjectSummary from "@/_pages/projects/item/Summary";
import BtnIcon from "@/_pages/projects/item/BtnIcon";

// style components
import {
  StyledProjectItemBorder,
  StyledProjectItemContainer,
} from "@/styles/styled/components/ProjectList";

// state
import { scrollPageSectionRefState } from "@/jotai/interaction/scroll.state";
import { pageDetailLoadState } from "@/jotai/load.state";

// hook
import useGSAPAnimation from "@/hooks/interaction/useGSAPAnimation";

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

  const projectList = useAtomValue(scrollPageSectionRefState("projectList"));
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const fadeIn = useCallback(
    (): UseGSAPAnimationScrollTriggerOption => ({
      trigger: triggerRef.current,
      start: "top 80%",
      end: "top 80%",
      onEnter() {
        setHide("");
      },
    }),
    [],
  );

  useGSAPAnimation(
    {
      key: `project/list/item/${code}/fadeIn`,
      elements: [triggerRef.current],
      scrollCreate: fadeIn(),
    },
    [fadeIn],
  );

  const resetScroll = useCallback(
    (): UseGSAPAnimationScrollTriggerOption => ({
      trigger: projectList,
      start: "top bottom",
      end: "top bottom",
      onLeaveBack() {
        setHide("hide");
      },
    }),
    [projectList],
  );

  useGSAPAnimation(
    {
      key: `project/list/item/${code}/reset`,
      elements: [projectList],
      scrollCreate: resetScroll(),
    },
    [fadeIn],
  );

  // 프로젝트 상세 열 때, 호버 상태 초기화
  useEffect(() => {
    if (category) setHover("");
  }, [category]);

  return (
    <StyledProjectItemContainer
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
      <StyledProjectItemBorder $pos="top" />
      <ProjectSummary code={code} summary={summary} />
      <SlideTitle text={summary.title} />
      <BtnIcon />
      {$isLast && <StyledProjectItemBorder $pos="bottom" />}
    </StyledProjectItemContainer>
  );
}
