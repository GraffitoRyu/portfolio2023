import ProjectList from "@/components/projects/List";

export default function Projects() {
  return (
    <>
      <div className="page-section intro-section">
        <h1>프로젝트</h1>
      </div>
      {/* @ts-expect-error Async Server Component */}
      <ProjectList />
    </>
  );
}
