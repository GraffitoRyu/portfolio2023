"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

// components
import { ProjectItemContainer } from "@/styles/styled/components/ProjectList";
import SlideTitle from "@/components/projects/item/SlideTitle";
import ProjectSummary from "@/components/projects/item/Summary";
import BtnIcon from "@/components/projects/item/BtnIcon";

// state
import { detailLayoutState } from "@/states/detail";

// type
import { SummaryType } from "@/types/projects";
import { DetailLayoutStateTypes } from "@/types/state";

export default function ProjectItem({
  code,
  summary,
}: {
  code: string;
  summary: SummaryType;
}): JSX.Element {
  const router = useRouter();
  const { category } = useParams();

  const [hover, setHover] = useState<string>("");

  const setDetailLayout =
    useSetRecoilState<DetailLayoutStateTypes>(detailLayoutState);

  // 프로젝트 상세 열 때, 호버 상태 초기화
  useEffect(() => {
    if (category) setHover("");
  }, [category]);

  return (
    <ProjectItemContainer
      type="button"
      className={hover}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
      onClick={() => {
        setDetailLayout(prev => ({ ...prev, loading: true }));
        router.push(`/projects/${code}`);
      }}
    >
      <ProjectSummary code={code} summary={summary} />
      <SlideTitle text={summary.title} />
      <BtnIcon />
    </ProjectItemContainer>
  );
}
