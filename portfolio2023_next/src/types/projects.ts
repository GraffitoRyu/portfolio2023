export type SummaryType = {
  [index: string]: string | string[];
  title: string[];
  desc: string;
  role: string[];
  period: string[];
};

export type LinkType = {
  [index: string]: string | string[] | undefined;
  code: string;
  name: string;
  url: string;
  hide: undefined | string[];
};
export type ServiceType = {
  [index: string]: string | string[] | LinkType[];
  provider: string;
  platform: string;
  desc: string[];
  link: LinkType[];
};

export type ExpDepthType = {
  [index: string]: string | string[];
  depth1: string;
  depth2: string[];
};
export type ExpType = {
  [index: string]: Array<string | ExpDepthType>;
  stacks: string[];
  desc: Array<string | ExpDepthType>;
};

export type MediaType = {
  [index: string]: string;
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
