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

export const career = {
  light: {
    period: "#a0a0a0",
    role: "#5a5a5a",
    company: "#b0b0b0",
    desc: "#a0a0a0",
  },
  dark: {
    period: "#909090",
    role: "#efefef",
    company: "#707070",
    desc: "#a0a0a0",
  },
};
