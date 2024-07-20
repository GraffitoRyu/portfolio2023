"use client";

// components
import ProjectItem from "./Item";

// style components
import {
  ProjectListContainer,
  ProjectListItem,
} from "@/styles/styled/components/ProjectList";

import { useQueryProjectListData } from "@/lib/query.lib";

export default function ProjectList() {
  const { data: listData } = useQueryProjectListData();

  return (
    <ProjectListContainer>
      {listData?.map(({ code, summary }: ProjectsAPIDataType, i: number) => (
        <ProjectListItem key={`project/list/${code}`}>
          <ProjectItem
            code={code}
            summary={summary}
            $isLast={listData.length - 1 === i}
          />
        </ProjectListItem>
      ))}
    </ProjectListContainer>
  );
}
