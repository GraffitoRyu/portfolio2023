"use client";

import { createGlobalStyle, styled } from "styled-components";

// style
import { position } from "../preset/mixins";

export const HTMLThemeStyle = createGlobalStyle`
  html {
    background-color: ${({ theme }) => theme.page.bg};
    *::selection {
      color: ${({ theme }) => theme.page.selectionText};
      background-color: ${({ theme }) => theme.page.selectionBg};
    }
  }
`;

export const StyledScrollContainer = styled.div<{ $wh: number }>`
  ${position({ type: "fixed", top: 0, left: 0, z: 0 })}
  width: 100%;
  height: ${({ $wh }) => ($wh !== 0 ? `${$wh}px` : `100%`)};
  overflow: hidden auto;
  overscroll-behavior-y: none;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const StickyContainer = styled.div`
  position: relative;
  width: 100%;
`;
