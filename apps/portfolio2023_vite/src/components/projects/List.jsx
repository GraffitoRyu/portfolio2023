// components
import ProjectItem from "./Item";

// data
import { projectsData } from "../../data/projects";

export default function ProjectList() {
  return (
    <ul className="project-list">
      {projectsData.map(d => (
        <ProjectItem data={d.summary} pathQuery={d.pathQuery} key={d.key} />
      ))}
    </ul>
  );
}
