import career from "./career.json";
import experience from "./experience.json";
import projects from "./projects.json";
import stackKeys from "./stack-keys.json";
import stacks from "./stacks.json";

import type {
  CareerData,
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
