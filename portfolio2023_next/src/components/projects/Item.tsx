"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// components
import { ProjectItemContainer } from "@/styles/styled/components/ProjectList";
import SlideTitle from "@/components/projects/item/SlideTitle";
import ProjectSummary from "@/components/projects/item/Summary";
import BtnIcon from "@/components/projects/item/BtnIcon";

// type
import { SummaryType } from "@/types/projects";

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
        router.push(`/projects/${code}`);
      }}
    >
      <ProjectSummary code={code} summary={summary} />
      <SlideTitle text={summary.title} />
      <BtnIcon />
    </ProjectItemContainer>
  );
}
