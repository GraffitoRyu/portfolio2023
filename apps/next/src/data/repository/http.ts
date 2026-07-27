import type {
  CareerData,
  ExperienceData,
  ProjectData,
  StackData,
  StackKeyData,
} from "@graffitoryu/preset-data";

const getJson = async <TResponse>(route: string): Promise<TResponse> =>
  await (await fetch(route)).json();

export const getProfileCareerData = async (): Promise<CareerData[]> =>
  getJson("/api/profile/career");

export const getProfileExperienceData = async (): Promise<ExperienceData[]> =>
  getJson("/api/profile/experience");

export const getProfileStackKeysList = async (): Promise<StackKeyData[]> =>
  getJson("/api/profile/stacks/key");

export const getProfileStacksData = async (): Promise<StackData[]> =>
  getJson("/api/profile/stacks");

export const getProjectsData = async (): Promise<ProjectData[]> =>
  getJson("/api/projects");

export const getProjectsDetailData = async (
  code: string,
): Promise<ProjectData | undefined> => getJson(`/api/projects/${code}`);
