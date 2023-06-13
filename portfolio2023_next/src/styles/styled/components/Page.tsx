"use client";

import styled, { createGlobalStyle } from "styled-components";

// style
import { position } from "../preset/mixins";

export const GlobalBodyStyle = createGlobalStyle`
  html {
    background-color:${({ theme }) => theme.page.bg};
    *::selection {
      color:${({ theme }) => theme.page.selectionText};
      background-color: ${({ theme }) => theme.page.selectionBg};
    }
  }
`;

export const StyledScrollContainer = styled.div`
  ${position({ type: "fixed", top: 0, left: 0, z: 0 })}
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
