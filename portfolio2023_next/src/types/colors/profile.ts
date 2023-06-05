export interface CareerColorTypes {
  period: string;
  role: string;
  company: string;
  desc: string;
}

export interface CareerModeTypes {
  [key: string]: CareerColorTypes;
  light: CareerColorTypes;
  dark: CareerColorTypes;
}

export interface ExpColorTypes {
  title: string;
  desc: string;
}

export interface ExpModeTypes {
  [key: string]: ExpColorTypes;
  light: ExpColorTypes;
  dark: ExpColorTypes;
}

export interface ToolsColorTypes {
  text: string;
}

export interface ToolsModeType {
  [key: string]: ToolsColorTypes;
  light: ToolsColorTypes;
  dark: ToolsColorTypes;
}
