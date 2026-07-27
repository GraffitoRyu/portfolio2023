import type {
  ProjectData,
  ProjectExperienceData,
  ProjectLinkData,
  ProjectMediaData,
  ProjectServiceData,
  ProjectStackData,
  ProjectSummaryData,
} from "@graffitoryu/preset-data";

declare global {
  type ProjectsAPIDataType = ProjectData;
  type SummaryType = ProjectSummaryData;
  type LinkType = ProjectLinkData;
  type ServiceType = ProjectServiceData;
  type ExpStacksType = ProjectStackData;
  type ExpType = ProjectExperienceData;
  type MediaType = ProjectMediaData;
}

export {};
