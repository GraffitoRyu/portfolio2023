// components
import ProjectItem from "./item";

// data
import { projectsData } from "../../data/projects";

export default function projectList() {
  return (
    <ul className="project-list">
      {projectsData.map(d => (
        <ProjectItem data={d.summary} pathQuery={d.pathQuery} key={d.key} />
      ))}
    </ul>
  );
}
