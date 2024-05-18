interface SectionHeaderTypes {
  empty?: boolean;
  title?: string;
  desc?: Array<string | JSX.Element>;
  className?: string;
}

interface CareerSummaryTypes {
  [index: string]: string | string[];
  period: string[];
  role: string;
  company: string;
}

interface CareerDetailsTypes {
  [index: string]: string | string[];
  task: string[];
  stacks: string[];
  projects: string[];
}

interface CareerTypes {
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

interface ExperienceTypes {
  [index: string]: string | string[] | number | undefined;
  code: string;
  title?: string;
  desc: string[];
}

interface StackTypes {
  [index: string]: string | number;
  code: string;
  name: string;
  category: string;
  level: number;
}

interface StackKeyTypes {
  [index: string]: string;
  code: string;
  name: string;
}

interface StackDataTypes {
  [index: string]: StackTypes[];
}

interface StackLegendTypes {
  [index: string]: string | number;
  label: string;
  level: number;
}
