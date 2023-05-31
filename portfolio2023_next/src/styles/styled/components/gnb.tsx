import { createGlobalStyle } from "styled-components";

// util
import { rem } from "@/util/unit";

// style
import { btnStyle } from "@/styles/styled/preset/buttons";
import { maxSize, size } from "@/styles/styled/preset/mixins";
import { img } from "@/styles/styled/preset/img";

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
