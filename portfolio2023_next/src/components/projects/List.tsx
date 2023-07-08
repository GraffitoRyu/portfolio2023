// components
import ProjectItem from "./Item";

// style components
import { ProjectListContainer } from "@/styles/styled/components/ProjectList";

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
      {listData.map(({ code, summary }: ProjectsType) => (
        <li className="w-full" key={`projectList_${code}`}>
          <ProjectItem code={code} summary={summary} />
        </li>
      ))}
    </ProjectListContainer>
  );
}
