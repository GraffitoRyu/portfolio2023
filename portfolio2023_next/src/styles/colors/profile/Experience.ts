export interface ExpColorTypes {
  title: string;
  desc: string;
}

export interface ExpModeTypes {
  [key: string]: ExpColorTypes;
  light: ExpColorTypes;
  dark: ExpColorTypes;
}

export const experience = {
  light: {
    title: "#5a5a5a",
    desc: "#a0a0a0",
  },
  dark: {
    title: "#fff",
    desc: "#a0a0a0",
  },
};
