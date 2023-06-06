"use client";

import styled, { createGlobalStyle } from "styled-components";

export const GlobalBodyStyle = createGlobalStyle`
  html {
    background-color:${({ theme }) => theme.page.bg};
  }
`;

export const StyledScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const StickyContainer = styled.div`
  position: relative;
  width: 100%;
`;
