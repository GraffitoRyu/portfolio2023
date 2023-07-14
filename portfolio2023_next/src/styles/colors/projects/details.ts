import { DetailModeTypes } from "@/types/colors/projectDetail";

export const details: DetailModeTypes = {
  light: {
    bg: "rgb(255, 255, 255)",
    visualBg: `linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 5%,
      rgba(255, 255, 255, 0.8) 100%
    )`,
    visualTitle: "#3a3a3a",
    visualSubtitle: "#909090",
    infoTitle: "#707070",
    infoDesc: "#5a5a5a",
    expTitle: "#5a5a5a",
    expDesc: "#707070",
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
      rgba(26, 26, 26, 1) 5%,
      rgba(26, 26, 26, 0.6) 100%
    )`,
    visualTitle: "#fff",
    visualSubtitle: "#909090",
    infoTitle: "#909090",
    infoDesc: "#bfbfbf",
    expTitle: "#dfdfdf",
    expDesc: "#909090",
    stackBg: "rgba(255, 255, 255, 0.16)",
    stackBorder: "#707070",
    stackText: "#ccc",
    captionTitle: "#fff",
    captionDesc: "#a0a0a0",
  },
};
