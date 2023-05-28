export interface IntroTypes {
  bgFrom: string;
  bgTo: string;
  title: string;
  strong: string;
  desc: string;
}

export interface IntroModeTypes {
  [key: string]: IntroTypes;
  light: IntroTypes;
  dark: IntroTypes;
}

export const intro = {
  light: {
    bgFrom: "rgb(255, 255, 255)",
    bgTo: "rgba(255, 255, 255, 0)",
    title: "#707070",
    strong: "#3a3a3a",
    desc: "#909090",
  },
  dark: {
    bgFrom: "rgb(26, 26, 26)",
    bgTo: "rgba(26, 26, 26, 0)",
    title: "#a0a0a0",
    strong: "#fff",
    desc: "#ccc",
  },
};
