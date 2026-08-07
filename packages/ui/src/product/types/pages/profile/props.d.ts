interface CareerSummaryProps extends CareerSummaryTypes {
  code: string;
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

interface ExpItemProps extends ExperienceAPIDataTypes {
  isActive: boolean;
  $totalLength: number;
}

type SummaryProps = {
  itemType: string;
  title: string;
  contents: string[];
};
