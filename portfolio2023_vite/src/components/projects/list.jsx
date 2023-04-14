// components
import ProjectItem from "./item";

// data
import { projectsData } from "../../data/projects";

export default function projectList() {
  return (
    <ul className="project-list">
      {projectsData.map(d => (
        <ProjectItem data={d} key={d.key} />
      ))}
    </ul>
  );
}
