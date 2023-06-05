// components
import ProjectItem from "./Item";

// style components
import { ProjectListContainer } from "@/styles/styled/components/ProjectList";

// type
import { ProjectsType } from "@/types/projects";

export default async function ProjectList() {
  const listData: ProjectsType[] | undefined =
    (await getProjectsList()) ?? undefined;

  return (
    <ProjectListContainer>
      {listData
        ? listData.map(({ code, summary }: ProjectsType) => (
            <li className="w-full" key={`projectList_${code}`}>
              <ProjectItem code={code} summary={summary} />
            </li>
          ))
        : ""}
    </ProjectListContainer>
  );
}

async function getProjectsList() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/projects.json`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return (
    data?.map((d: ProjectsType) => ({
      code: d.code,
      summary: d.summary,
    })) ?? undefined
  );
}
