// GNB 버튼 컬러
export interface GnbSitemapBtnTypes {
  basic: string;
  hover: string;
  selected: string;
}

export interface SitemapBtnModeTypes {
  [index: string]: GnbSitemapBtnTypes;
  light: GnbSitemapBtnTypes;
  dark: GnbSitemapBtnTypes;
}

export const gnbSitemapBtn: SitemapBtnModeTypes = {
  light: {
    basic: "#bfbfbf",
    hover: "#5a5a5a",
    selected: "#3a3a3a",
  },
  dark: {
    basic: "#5a5a5a",
    hover: "#fff",
    selected: "#ccc",
  },
};
