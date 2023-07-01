export interface CareerColorTypes {
  border: string;
  borderHover: string;
  bgHover: string;
  period: string;
  periodHover: string;
  role: string;
  roleHover: string;
  company: string;
  companyHover: string;
  detailTitle: string;
  detailContents: string;
  icon: string;
  iconHover: string;
}

export interface CareerModeTypes {
  [index: string]: CareerColorTypes;
  light: CareerColorTypes;
  dark: CareerColorTypes;
}

export interface ExpColorTypes {
  title: string;
  desc: string;
}

export interface ExpModeTypes {
  [index: string]: ExpColorTypes;
  light: ExpColorTypes;
  dark: ExpColorTypes;
}

export interface StacksColorTypes {
  [index: string]: string;
  legendTitle: string;
  legendLabel: string;
  border: string;
  category: string;
  stackName: string;
  levelFill: string;
  levelEmpty: string;
  levelFull: string;
}

export interface StacksModeType {
  [index: string]: StacksColorTypes;
  light: StacksColorTypes;
  dark: StacksColorTypes;
}
