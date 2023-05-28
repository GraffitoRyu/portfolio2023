// 유틸 버튼 컬러
export interface GnbUtilTypes {
  bg: string;
  bgHover?: string;
  svg: string;
  svgHover: string;
  svgActive: string;
}

export interface GnbUtilModeTypes {
  [index: string]: GnbUtilTypes;
  light: GnbUtilTypes;
  dark: GnbUtilTypes;
}

export const gnbUtilBtn: GnbUtilModeTypes = {
  light: {
    bg: "#efefef",
    svg: "#707070",
    svgHover: "#5a5a5a",
    svgActive: "#1a1a1a",
  },
  dark: {
    bg: "#3a3a3a",
    svg: "#707070",
    svgHover: "#ccc",
    svgActive: "#fff",
  },
};
