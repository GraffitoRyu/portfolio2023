"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { ProjectCard } from "@graffitoryu/ui";

// components
import SlideTitle from "@graffitoryu/ui/product/pages/projects/item/SlideTitle";
import ProjectSummary from "@graffitoryu/ui/product/pages/projects/item/Summary";
import BtnIcon from "@graffitoryu/ui/product/pages/projects/item/BtnIcon";

// style components
import {
  StyledProjectItemBorder,
  StyledProjectItemContainer,
} from "@graffitoryu/ui/product/styles/styled/components/ProjectList";

// state
import { scrollPageSectionRefState } from "@graffitoryu/ui/product/jotai/interaction/scroll.state";
import { pageDetailLoadState } from "@graffitoryu/ui/product/jotai/load.state";

// hook
import useGSAPAnimation from "@graffitoryu/ui/product/hooks/interaction/useGSAPAnimation";
import { useProductRuntime } from "@graffitoryu/ui/product/runtime/ProductRuntime";

export default function ProjectItem({
  code,
  summary,
  $isLast,
}: {
  code: string;
  summary: SummaryType;
  $isLast: boolean;
}) {
  const { push } = useProductRuntime();
  const [{ category }, setDetailLoad] = useAtom(pageDetailLoadState);
  const projectList = useAtomValue(scrollPageSectionRefState("projectList"));

  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const [hide, setHide] = useState<boolean>(true);
  const [hover, setHover] = useState<boolean>(false);

  const onFadeIn = useCallback(() => {
    setHide(false);
  }, []);

  const fadeIn = useCallback(
    (): UseGSAPAnimationScrollTriggerOption => ({
      trigger: triggerRef.current,
      start: "top 80%",
      end: "top 80%",
      onEnter: onFadeIn,
    }),
    [onFadeIn],
  );

  const onReset = useCallback(() => {
    setHide(true);
  }, []);

  const resetScroll = useCallback(
    (): UseGSAPAnimationScrollTriggerOption => ({
      trigger: projectList,
      start: "top bottom",
      end: "top bottom",
      onLeaveBack: onReset,
    }),
    [onReset, projectList],
  );

  useGSAPAnimation(
    {
      key: `project/list/item/${code}`,
      elements: [projectList, triggerRef.current],
      scrollCreate: [fadeIn(), resetScroll()],
    },
    [code, category, fadeIn, resetScroll],
  );

  // 프로젝트 상세 열 때, 호버 상태 초기화
  useEffect(() => {
    if (category) setHover(false);
  }, [category]);

  const onClickProject = useCallback(() => {
    setDetailLoad(prev => ({ ...prev, clicked: true, loading: true }));
    push(`/projects/${code}`);
  }, [code, push, setDetailLoad]);

  return (
    <StyledProjectItemContainer
      as={ProjectCard}
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
