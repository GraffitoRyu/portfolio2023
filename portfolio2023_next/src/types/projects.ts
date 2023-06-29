export interface SummaryType {
  [index: string]: string | string[];
  title: string[];
  desc: string;
  role: string[];
  period: string[];
}

export interface LinkType {
  [index: string]: string | string[] | undefined;
  code: string;
  name: string;
  url: string;
  hide: undefined | string[];
}
export interface ServiceType {
  [index: string]: string | string[] | LinkType[];
  provider: string;
  platform: string;
  desc: string[];
  link: LinkType[];
}

export interface ExpDepthType {
  [index: string]: string | string[];
  depth1: string;
  depth2: string[];
}
export interface ExpType {
  [index: string]: Array<string | ExpDepthType>;
  stacks: string[];
  desc: Array<string | ExpDepthType>;
}

export interface MediaType {
  [index: string]: string;
  referType: string;
  src: string;
  title: string;
  desc: string;
}

export interface ProjectsType {
  [index: string]:
    | string
    | SummaryType
    | ServiceType
    | ExpType
    | MediaType[]
    | undefined;
  code: string;
  summary: SummaryType;
  service?: ServiceType;
  experience?: ExpType;
  media?: MediaType[];
}
