import { ProjectsType } from "./projects";

export type DetailTypes = {
  [index: string]: ProjectsType;
};

export interface DetailInfoSummaryTypes {
  code: string;
  title: string;
  contents: string | string[];
  type: string;
}
