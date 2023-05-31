"use client";

import React, { useState } from "react";

// components
import { ProjectItemContainer } from "@/styles/styled/components/projectList";
import SlideTitle from "./item/SlideTitle";
import ProjectButton from "./item/Button";

// type
import { SummaryType } from "@/types/projects";

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
      className={`${hover}`}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
    >
      <ProjectButton code={code} summary={summary} />
      <SlideTitle text={summary.title} />
    </ProjectItemContainer>
  );
}
