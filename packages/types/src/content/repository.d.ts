import type {
  CareerData,
  ExperienceData,
  ProjectData,
  StackData,
  StackKeyData,
} from "./portfolio";

export type PortfolioProfileData = {
  career: CareerData[];
  experience: ExperienceData[];
  stackKeys: StackKeyData[];
  stacks: StackData[];
};

export type ProjectListItemData = Pick<ProjectData, "code" | "summary">;

export interface PortfolioRepository {
  getProfile(): Promise<PortfolioProfileData>;
  getProjects(): Promise<ProjectListItemData[]>;
  getProject(code: string): Promise<ProjectData | undefined>;
}
