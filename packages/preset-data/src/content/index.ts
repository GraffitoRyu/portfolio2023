import careerFixture from "./career.json";
import experienceFixture from "./experience.json";
import projectsFixture from "./projects.json";
import stackKeysFixture from "./stack-keys.json";
import stacksFixture from "./stacks.json";

import type {
  CareerData,
  ExperienceData,
  ProjectData,
  StackData,
  StackKeyData,
} from "@graffitoryu/types";

export const careerData: CareerData[] = careerFixture;
export const experienceData: ExperienceData[] = experienceFixture;
export const projectsData: ProjectData[] = projectsFixture;
export const stackKeysData: StackKeyData[] = stackKeysFixture;
export const stacksData: StackData[] = stacksFixture;
