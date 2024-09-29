"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAtom, useAtomValue } from "jotai";

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
  const [{ category }, setDetailLoad] = useAtom(pageDetailLoadState);
  const projectList = useAtomValue(scrollPageSectionRefState("projectList"));

  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const [hide, setHide] = useState<boolean>(true);
  const [hover, setHover] = useState<boolean>(false);

  const fadeIn = useCallback(
    (): UseGSAPAnimationScrollTriggerOption => ({
      trigger: triggerRef.current,
      start: "top 80%",
      end: "top 80%",
      onEnter: () => {
        setHide(false);
      },
    }),
    [],
  );

  useGSAPAnimation(
    {
      key: `project/list/item/${code}/fadeIn`,
      disabled: category !== "",
      elements: [triggerRef.current],
      scrollCreate: fadeIn(),
      log: ["fadeIn"],
    },
    [code, category, fadeIn],
  );

  const resetScroll = useCallback(
    (): UseGSAPAnimationScrollTriggerOption => ({
      trigger: projectList,
      start: "top bottom",
      end: "top bottom",
      onLeaveBack: () => {
        setHide(true);
      },
    }),
    [projectList],
  );

  useGSAPAnimation(
    {
      key: `project/list/item/${code}/reset`,
      disabled: category !== "",
      elements: [projectList],
      scrollCreate: resetScroll(),
      log: ["reset"],
    },
    [code, category, resetScroll],
  );

  // 프로젝트 상세 열 때, 호버 상태 초기화
  useEffect(() => {
    if (category) setHover(false);
  }, [category]);

  const onClickProject = useCallback(() => {
    setDetailLoad(prev => ({ ...prev, clicked: true, loading: true }));
    router.push(`/projects/${code}`, { scroll: false });
  }, [code, router, setDetailLoad]);

  return (
    <StyledProjectItemContainer
      type="button"
      ref={triggerRef}
      className={`${hide ? "hide" : ""} ${hover ? "hover" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClickProject}
    >
      <StyledProjectItemBorder $pos="top" />
      <ProjectSummary code={code} summary={summary} />
      <SlideTitle text={summary.title} />
      <BtnIcon />
      {$isLast && <StyledProjectItemBorder $pos="bottom" />}
    </StyledProjectItemContainer>
  );
}
