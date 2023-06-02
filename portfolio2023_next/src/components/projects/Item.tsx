"use client";

import React, { useState } from "react";

// components
import { ProjectItemContainer } from "@/styles/styled/components/projectList";
import SlideTitle from "@/components/projects/item/SlideTitle";
import ProjectSummary from "@/components/projects/item/Summary";

// type
import { SummaryType } from "@/types/projects";
import BtnIcon from "./item/BtnIcon";

export default function ProjectItem({
  code,
  summary,
}: {
  code: string;
  summary: SummaryType;
}): JSX.Element {
  const [hover, setHover] = useState<string>("");

  return (
    <ProjectItemContainer
      className={hover}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
    >
      <ProjectSummary code={code} summary={summary} />
      <SlideTitle text={summary.title} />
      <BtnIcon />
    </ProjectItemContainer>
  );
}
