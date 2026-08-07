"use client";

// components
import ProjectItem from "./Item";

// style components
import {
  StyledProjectListContainer,
  StyledProjectListItem,
} from "@graffitoryu/ui/product/styles/styled/components/ProjectList";

import { useQueryProjectListData } from "@graffitoryu/ui/product/lib/query";

export default function ProjectList() {
  const { data: listData = [] } = useQueryProjectListData();

  return (
    <StyledProjectListContainer>
      {listData.map(({ code, summary }: ProjectsAPIDataType, i: number) => (
        <StyledProjectListItem key={`projects/list/${code}`}>
          <ProjectItem
            code={code}
            summary={summary}
            $isLast={listData.length - 1 === i}
          />
        </StyledProjectListItem>
      ))}
    </StyledProjectListContainer>
  );
}
