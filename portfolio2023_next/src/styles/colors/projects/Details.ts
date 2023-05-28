export interface DetailsColorTypes {
  bg: string;
  visualBg: string;
  visualTitle: string;
  visualSubtitle: string;
  infoTitle: string;
  infoDesc: string;
  stackBg: string;
  stackBorder: string;
  stackText: string;
  captionTitle: string;
  captionDesc: string;
}

export interface DetailsModeTypes {
  [key: string]: DetailsColorTypes;
  light: DetailsColorTypes;
  dark: DetailsColorTypes;
}

export const details = {
  light: {
    bg: "rgb(202, 208, 215)",
    visualBg: `linear-gradient(
      0deg,
      rgba(202, 208, 215, 1) 40%,
      rgba(202, 208, 215, 0.6) 100%
    )`,
    visualTitle: "#3a3a3a",
    visualSubtitle: "#707070",
    infoTitle: "#909090",
    infoDesc: "#5a5a5a",
    stackBg: "rgba(255,255,255,0.24)",
    stackBorder: "#a0a0a0",
    stackText: "#5a5a5a",
    captionTitle: "#1a1a1a",
    captionDesc: "#5a5a5a",
  },
  dark: {
    bg: "rgb(26,26,26)",
    visualBg: `linear-gradient(
      0deg,
      rgba(26, 26, 26, 1) 40%,
      rgba(26, 26, 26, 0.6) 100%
    )`,
    visualTitle: "#fff",
    visualSubtitle: "#ccc",
    infoTitle: "#707070",
    infoDesc: "#a0a0a0",
    stackBg: "rgba(255, 255, 255, 0.16)",
    stackBorder: "#707070",
    stackText: "#ccc",
    captionTitle: "#fff",
    captionDesc: "#a0a0a0",
  },
};
