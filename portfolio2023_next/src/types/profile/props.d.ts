interface SectionHeaderTypes {
  empty?: boolean;
  title?: string;
  desc?: Array<string | React.ReactNode>;
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
interface CareerItemProps extends CareerAPIDataType {
  last?: boolean;
}

interface CareerDetailProps extends CareerDetailsTypes {
  code: string;
}

interface StackDataTypes {
  [index: string]: StackAPIDataTypes[];
}

interface StackLegendTypes {
  [index: string]: string | number;
  label: string;
  level: number;
}
