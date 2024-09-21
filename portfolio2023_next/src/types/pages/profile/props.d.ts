interface CareerSummaryTypes {
  [index: string]: string | string[];
  period: string[];
  role: string;
  company: string;
}

interface CareerSummaryProps extends CareerSummaryTypes {
  code: string;
}

interface CareerDetailsTypes {
  [index: string]: string | string[];
  task: string[];
  stacks: string[];
  projects: string[];
}
interface CareerItemProps extends CareerAPIDataType {
  [index: string]:
    | string
    | CareerSummaryTypes
    | CareerDetailsTypes
    | boolean
    | undefined;
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

interface ExpItemProps extends ExperienceAPIDataTypes {
  isActive: boolean;
  $totalLength: number;
}

type SummaryProps = {
  itemType: string;
  title: string;
  contents: string[];
};
