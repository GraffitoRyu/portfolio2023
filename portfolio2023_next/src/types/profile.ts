import { DescDepthTypes } from "./util/parseDesc";

export interface SectionHeaderTypes {
  empty?: boolean;
  title?: string;
  desc?: Array<string | JSX.Element>;
}

export interface CareerTypes {
  [index: string]: string | string[];
  code: string;
  period: string[];
  role: string;
  company: string;
  desc: string;
}

export interface ExperienceTypes {
  [index: string]: string | Array<string | DescDepthTypes>;
  code: string;
  desc: Array<string | DescDepthTypes>;
}
