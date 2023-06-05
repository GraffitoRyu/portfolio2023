import { DescDepthTypes } from "./util/parseDesc";

export type SectionHeaderTypes = {
  empty?: boolean;
  title?: string;
  desc?: Array<string | JSX.Element>;
};

export type CareerTypes = {
  [index: string]: string | string[];
  code: string;
  period: string[];
  role: string;
  company: string;
  desc: string;
};

export type ExperienceTypes = {
  [index: string]: string | Array<string | DescDepthTypes>;
  code: string;
  desc: Array<string | DescDepthTypes>;
};
