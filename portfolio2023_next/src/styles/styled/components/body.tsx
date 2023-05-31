"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalBodyStyle = createGlobalStyle`
  html {
    background-color:${({ theme }) => theme.page.bg};
  }
`;
