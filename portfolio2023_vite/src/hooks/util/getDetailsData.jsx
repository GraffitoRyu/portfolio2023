import { projectsData } from "../../data/projects";

export default function getDetailsData(category) {
  if (!category) return undefined;
  return projectsData.find(d => d.pathQuery === category) ?? undefined;
}
