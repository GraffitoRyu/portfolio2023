// components
import ProjectItem from "./Item";

// style components
import {
  ProjectListContainer,
  ProjectListItem,
} from "@/styles/styled/components/ProjectList";

// type
import { ProjectsType } from "@/types/projects";

// data
import { getSSRData } from "@/util/getData";

export default async function ProjectList() {
  const listData: ProjectsType[] = await getSSRData({
    page: "projects",
    queryName: "type",
    queryValue: "list",
  });

  return (
    <ProjectListContainer>
      {listData.map(({ code, summary }: ProjectsType, i: number) => (
        <ProjectListItem key={`projectList_${code}_${i}`}>
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
