interface CareerAPIDataType {
  [index: string]: string | CareerSummaryTypes | CareerDetailsTypes | undefined;
  code: string;
  summary: CareerSummaryTypes;
  details: CareerDetailsTypes;
}

interface ExperienceAPIDataTypes {
  [index: string]: string | string[] | number | boolean | undefined;
  code: string;
  title?: string;
  desc: string[];
}

interface StackAPIDataTypes {
  [index: string]: string | number;
  code: string;
  name: string;
  category: string;
  level: number;
}

interface StackKeyAPIDataTypes {
  [index: string]: string;
  code: string;
  name: string;
}
