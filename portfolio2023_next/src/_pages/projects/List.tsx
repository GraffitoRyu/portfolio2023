// components
import ProjectItem from "./Item";

// style components
import {
  ProjectListContainer,
  ProjectListItem,
} from "@/styles/styled/components/ProjectList";

import { useQueryProjectListData } from "@/lib/query";

export default async function ProjectList() {
  const { data: listData } = useQueryProjectListData();

  return (
    <ProjectListContainer>
      {listData?.map(({ code, summary }: ProjectsType, i: number) => (
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
