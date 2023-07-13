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
  serviceType: string;
  desc: string[];
  link: LinkType[];
}

export interface ExpStacksType {
  [index: string]: string[];
  languages: string[];
  frameworks: string[];
  data: string[];
  collaboration: string[];
}

export interface ExpType {
  [index: string]: string[] | ExpStacksType;
  stacks: ExpStacksType;
  desc: string[];
}

export interface MediaType {
  [index: string]: string;
  referType: string;
  src: string;
  alt: string;
}

export interface ProjectsType {
  [index: string]:
    | string
    | SummaryType
    | ServiceType
    | ExpType
    | MediaType
    | MediaType[]
    | undefined;
  code: string;
  summary: SummaryType;
  service?: ServiceType;
  sub_visual?: MediaType;
  experience?: ExpType;
  media?: MediaType[];
}
