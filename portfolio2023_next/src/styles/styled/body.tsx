"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalBodyStyle = createGlobalStyle`
  html {
    background-color:#fff;
    &.dark-theme {
      background-color: #141414;
    }
  }
`;
