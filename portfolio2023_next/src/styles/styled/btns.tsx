"use client";

import { createGlobalStyle } from "styled-components";

// mixin
import { SvgFill, SvgStroke } from "./mixins";

// util
import rem from "@/util/rem";

export const GlobalBtnStyle = createGlobalStyle`
  .btn-box {
    display:flex;
    align-items: center;
    justify-content:center;

    width:${rem(80)};
    height:${rem(80)};
    border-radius:${rem(16)};

    border: ${rem(2)} solid #3a3a3a;
    color: #3a3a3a;
    ${SvgFill("#3a3a3a")}
    ${SvgStroke(rem(1), "#3a3a3a")}
  }
`;
