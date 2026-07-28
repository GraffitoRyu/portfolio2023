import type {
  CareerData,
  ExperienceData,
  ProjectData,
  StackData,
  StackKeyData,
} from "./portfolio";

export type ProfileData = {
  career: CareerData[];
  experience: ExperienceData[];
  stackKeys: StackKeyData[];
  stacks: StackData[];
};

export type ProjectItemData = Pick<ProjectData, "code" | "summary">;

export interface DataSource {
  getProfile(): Promise<ProfileData>;
  getProjects(): Promise<ProjectItemData[]>;
  getProject(code: string): Promise<ProjectData | undefined>;
}
