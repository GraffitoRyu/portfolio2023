export type CareerSummaryData = {
  period: string[];
  role: string;
  company: string;
};

export type CareerDetailsData = {
  task: string[];
  stacks: string[];
  projects: string[];
};

export type CareerData = {
  code: string;
  summary: CareerSummaryData;
  details: CareerDetailsData;
};

export type ExperienceData = {
  code: string;
  title?: string;
  desc: string[];
};

export type StackData = {
  code: string;
  name: string;
  category: string;
  level: number;
};

export type StackKeyData = {
  code: string;
  name: string;
};

export type ProjectSummaryData = {
  title: string[];
  desc: string;
  role: string[];
  period: string[];
};

export type ProjectLinkData = {
  code: string;
  name: string;
  url: string;
  hide: string | string[];
};

export type ProjectServiceData = {
  provider: string;
  serviceType: string;
  desc: string[];
  link: ProjectLinkData[];
};

export type ProjectStackData = {
  languages: string[];
  frameworks: string[];
  data: string[];
  collaboration: string[];
};

export type ProjectExperienceData = {
  stacks: ProjectStackData;
  desc: string[];
};

export type ProjectMediaData = {
  referType: string;
  src: string;
  alt: string;
};

export type ProjectSubVisualData = {
  referType: string;
  src: string;
  alt?: string;
  sec?: string;
};

export type ProjectData = {
  code: string;
  summary: ProjectSummaryData;
  service?: ProjectServiceData;
  sub_visual?: ProjectSubVisualData;
  experience?: ProjectExperienceData;
  media?: ProjectMediaData[];
};
