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

export interface SubVisualType {
  [index: string]: string;
  referType: string;
  src: string;
}

export interface MediaType extends SubVisualType {
  title: string;
  desc: string;
}

export interface ProjectsType {
  [index: string]:
    | string
    | SummaryType
    | ServiceType
    | SubVisualType
    | ExpType
    | MediaType[]
    | undefined;
  code: string;
  summary: SummaryType;
  service?: ServiceType;
  sub_visual?: SubVisualType;
  experience?: ExpType;
  media?: MediaType[];
}
