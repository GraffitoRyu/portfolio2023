export interface SectionHeaderTypes {
  empty?: boolean;
  title?: string;
  desc?: Array<string | JSX.Element>;
  className?: string;
}

export interface CareerSummaryTypes {
  [index: string]: string | string[];
  period: string[];
  role: string;
  company: string;
}

export interface CareerDetailsTypes {
  [index: string]: string[];
  task: string[];
  stacks: string[];
  projects: string[];
}

export interface CareerTypes {
  [index: string]:
    | string
    | CareerSummaryTypes
    | CareerDetailsTypes
    | boolean
    | undefined;
  code: string;
  summary: CareerSummaryTypes;
  details: CareerDetailsTypes;
}

export interface ExperienceTypes {
  [index: string]: string | string[] | number | undefined;
  code: string;
  title?: string;
  desc: string[];
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
