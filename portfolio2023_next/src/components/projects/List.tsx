// components
import ProjectItem from "./Item";

// style components
import { ProjectListContainer } from "@/styles/styled/components/projectList";

// type
import { ProjectsType } from "@/types/projects";

export default async function ProjectList() {
  const listData: ProjectsType[] | undefined =
    (await getProjectsList()) ?? undefined;

  return (
    <ProjectListContainer>
      {listData
        ? listData.map(({ code, summary }: ProjectsType) => (
            <ProjectItem
              key={`projectList_${code}`}
              code={code}
              summary={summary}
            />
          ))
        : ""}
    </ProjectListContainer>
  );
}

async function getProjectsList() {
  const res = await fetch("http://localhost:3000/json/projects.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    data?.map((d: ProjectsType) => ({
      code: d.code,
      summary: d.summary,
    })) ?? undefined
  );
}
