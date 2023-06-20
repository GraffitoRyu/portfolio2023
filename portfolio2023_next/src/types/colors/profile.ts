export interface CareerColorTypes {
  period: string;
  role: string;
  company: string;
  desc: string;
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
