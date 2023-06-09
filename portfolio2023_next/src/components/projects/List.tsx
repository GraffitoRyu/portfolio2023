// components
import ProjectItem from "./Item";

// style components
import { ProjectListContainer } from "@/styles/styled/components/ProjectList";

// type
import { ProjectsType } from "@/types/projects";

export default async function ProjectList() {
  const listData: ProjectsType[] = await getProjectsList();

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

async function getProjectsList() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/projects.json`
  );
  if (!res.ok) throw new Error("Failed to fetch project list Data");
  const data = await res.json();
  return data?.map((d: ProjectsType) => ({
    code: d.code,
    summary: d.summary,
  }));
}
