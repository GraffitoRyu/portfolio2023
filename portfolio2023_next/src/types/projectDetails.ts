import { ExpDepthType, ProjectsType } from "./projects";

export type DetailTypes = {
  [index: string]: ProjectsType;
};

export interface DetailInfoSummaryTypes {
  code: string;
  title: string;
  contents: string | string[];
  type: string;
}

export interface DetailInfoDescTypes {
  code: string;
  title: string;
  contents: Array<ExpDepthType | string>;
}
