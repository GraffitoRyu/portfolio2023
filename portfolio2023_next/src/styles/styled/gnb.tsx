import { createGlobalStyle } from "styled-components";

// type
import {
  GnbModeTypes,
  ThemeMenuModeTypes,
  UtilModeTypes,
} from "@/types/themeColors/pageHeader";

// util
import { rem } from "@/util/unit";

// style
import { btnStyle } from "./buttons";
import { maxSize, size } from "./mixins";
import { img } from "./img";

export const gnbMenuColors: GnbModeTypes = {
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

export const utilBtnColors: UtilModeTypes = {
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

export const themeMenuColors: ThemeMenuModeTypes = {
  light: {
    container: "#efefef",
    menu: "#afafaf",
    hover: "#707070",
    selected: "#3a3a3a",
  },
  dark: {
    container: "#3a3a3a",
    menu: "#707070",
    hover: "#bfbfbf",
    selected: "#dfdfdf",
  },
};

// GNB 공통 스타일
export const GnbCommonStyle = createGlobalStyle`
  a, button {
    pointer-events:auto;
  }
  .util-item {
    position:relative;
    &:not(.theme-item) {
      margin-left: ${rem(32)};
    }
  }
  .util-btn {
    ${btnStyle({ width: 48, height: 48, radius: 8 })}
    position:relative;
    figure {
      ${size({ width: 24, height: 24 })}
      font-size:0;
      svg {
        ${img({})}
        ${maxSize({ width: 24, height: 24 })}
      }
    }
  }
`;
