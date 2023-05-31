import { DescDepthTypes } from "./parseDesc";

export type CareerTypes = {
  [index: string]: string | string[] | undefined;
  code: string;
  period: string[];
  role: string;
  company: string;
  desc: string;
};

export type ExperienceTypes = {
  [index: string]: string | string[] | Array<string | DescDepthTypes>;
  code: string;
  desc: string[] | Array<string | DescDepthTypes>;
};
