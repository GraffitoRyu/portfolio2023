"use client";

import { createGlobalStyle, styled } from "styled-components";

// style
import { position, size } from "../preset/mixins";

export const HTMLThemeStyle = createGlobalStyle`
  html {
    background-color: ${({ theme }) => theme.page.bg};
    *::selection {
      color: ${({ theme }) => theme.page.selectionText};
      background-color: ${({ theme }) => theme.page.selectionBg};
    }
  }
`;

export const PageContainer = styled.main`
  ${position({ type: "fixed", z: 10 })}
  ${size({ w: "100%", h: "100%" })}
`;

export const StyledScrollContainer = styled.div`
  ${position({ type: "fixed", top: 0, left: 0, z: 0 })}
  ${size({ w: "100%", h: `var(--wh)` })}
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
