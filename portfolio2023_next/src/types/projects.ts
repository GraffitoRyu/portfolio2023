export type SummaryType = {
  title: string;
  desc: string;
  role: string[];
  period: string[];
};

export type LinkType = {
  code: string;
  name: string;
  url: string;
  hide: undefined | string[];
};
export type ServiceType = {
  provider: string;
  platform: string;
  desc: string[];
  link: LinkType[];
};

export type ExpDepthType = {
  depth1: string;
  depth2: string[];
};
export type ExpType = {
  stacks: string[];
  desc: Array<string | ExpDepthType>;
};

export type MediaType = {
  referType: string;
  src: string;
  title: string;
  desc: string;
};

export type ProjectsType = {
  [index: string]: string | SummaryType | ServiceType | ExpType | MediaType;
  code: string;
  summary: SummaryType;
  service: ServiceType;
  experience: ExpType;
  media: MediaType;
};
