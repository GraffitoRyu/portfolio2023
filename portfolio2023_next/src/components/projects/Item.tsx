"use client";

import { useEffect, useState } from "react";

// components
import { ProjectItemContainer } from "@/styles/styled/components/ProjectList";
import SlideTitle from "@/components/projects/item/SlideTitle";
import ProjectSummary from "@/components/projects/item/Summary";
import BtnIcon from "@/components/projects/item/BtnIcon";

// type
import { SummaryType } from "@/types/projects";
import { useSearchParams } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { detailLayoutState } from "@/states/detail";
import { DetailLayoutStateTypes } from "@/types/state";

export default function ProjectItem({
  code,
  summary,
}: {
  code: string;
  summary: SummaryType;
}): JSX.Element {
  const [hover, setHover] = useState<string>("");
  const params = useSearchParams();
  const viewCode = params.get("code");
  const setOpen = useSetRecoilState<DetailLayoutStateTypes>(detailLayoutState);

  useEffect(() => {
    if (viewCode) setHover("");
  }, [viewCode]);

  return (
    <ProjectItemContainer
      href={`/projects?code=${code}`}
      className={hover}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
      onClick={() => setOpen(prev => ({ ...prev, open: true }))}
    >
      <ProjectSummary code={code} summary={summary} />
      <SlideTitle text={summary.title} />
      <BtnIcon />
    </ProjectItemContainer>
  );
}
