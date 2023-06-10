"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { useSetRecoilState } from "recoil";

// components
import { ProjectItemContainer } from "@/styles/styled/components/ProjectList";
import SlideTitle from "@/components/projects/item/SlideTitle";
import ProjectSummary from "@/components/projects/item/Summary";
import BtnIcon from "@/components/projects/item/BtnIcon";

// type
import { SummaryType } from "@/types/projects";
import { DetailLayoutStateTypes } from "@/types/state";

// state
import { detailLayoutState } from "@/states/detail";

export default function ProjectItem({
  code,
  summary,
}: {
  code: string;
  summary: SummaryType;
}): JSX.Element {
  const router = useRouter();
  const [hover, setHover] = useState<string>("");
  const setDetailLayout =
    useSetRecoilState<DetailLayoutStateTypes>(detailLayoutState);

  return (
    <ProjectItemContainer
      type="button"
      className={hover}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
      onClick={(e: SyntheticEvent) => {
        e.preventDefault();
        setDetailLayout(prev => ({ ...prev, open: true }));
        router.push(`/projects/${code}`);
      }}
    >
      <ProjectSummary code={code} summary={summary} />
      <SlideTitle text={summary.title} />
      <BtnIcon />
    </ProjectItemContainer>
  );
}
