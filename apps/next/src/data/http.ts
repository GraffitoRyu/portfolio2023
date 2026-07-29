import type {
  CareerData,
  DataSource,
  ExperienceData,
  ProjectData,
  ProjectItemData,
  StackData,
  StackKeyData,
} from "@graffitoryu/preset-data";

const getJson = async <TResponse>(route: string): Promise<TResponse> => {
  const response = await fetch(route);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${route}`);
  }

  return response.json();
};

export const remote: DataSource = {
  async getProfile() {
    const [career, experience, stackKeys, stacks] = await Promise.all([
      getJson<CareerData[]>("/api/profile/career"),
      getJson<ExperienceData[]>("/api/profile/experience"),
      getJson<StackKeyData[]>("/api/profile/stacks/key"),
      getJson<StackData[]>("/api/profile/stacks"),
    ]);

    return { career, experience, stackKeys, stacks };
  },
  async getProjects(): Promise<ProjectItemData[]> {
    return getJson("/api/projects");
  },
  async getProject(code): Promise<ProjectData | undefined> {
    const route = `/api/projects/${code}`;
    const response = await fetch(route);

    if (response.status === 404) return undefined;
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status} ${route}`);
    }

    return response.json();
  },
};
