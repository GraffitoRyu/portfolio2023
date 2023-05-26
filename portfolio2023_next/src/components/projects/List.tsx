import { ProjectsType } from "@/types/projects";
import ProjectItem from "./Item";

export default async function ProjectList() {
  const listData: ProjectsType[] | [] = (await getProjectsList()) ?? [];

  return (
    <ul>
      {listData?.map(({ code, summary }: ProjectsType) => (
        <ProjectItem key={`projectList_${code}`} summary={summary} />
      ))}
    </ul>
  );
}

async function getProjectsList() {
  const res = await fetch("http://localhost:3000/json/projects.json");
  const data = await res.json();
  return (
    data?.map((d: ProjectsType) => ({
      code: d.code,
      summary: d.summary,
    })) ?? undefined
  );
}
