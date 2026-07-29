import career from "./career.json";
import experience from "./experience.json";
import projects from "./projects.json";
import stackKeys from "./stack-keys.json";
import stacks from "./stacks.json";

import type {
  CareerData,
  DataSource,
  ExperienceData,
  ProjectData,
  StackData,
  StackKeyData,
} from "@graffitoryu/types";

export const careerData: CareerData[] = career;
export const experienceData: ExperienceData[] = experience;
export const projectsData: ProjectData[] = projects;
export const stackKeysData: StackKeyData[] = stackKeys;
export const stacksData: StackData[] = stacks;

export const local: DataSource = {
  async getProfile() {
    return {
      career: careerData,
      experience: experienceData,
      stackKeys: stackKeysData,
      stacks: stacksData,
    };
  },
  async getProjects() {
    return projectsData.map(({ code, summary }) => ({ code, summary }));
  },
  async getProject(code) {
    return projectsData.find(project => project.code === code);
  },
};
