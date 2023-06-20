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

export interface StackTypes {
  [index: string]: string | number;
  code: string;
  name: string;
  category: string;
  level: number;
}

export interface StackKeyTypes {
  [index: string]: string;
  code: string;
  name: string;
}

export interface StackDataTypes {
  [index: string]: StackTypes[];
}

export interface StackLegendTypes {
  [index: string]: string | number;
  label: string;
  level: number;
}
