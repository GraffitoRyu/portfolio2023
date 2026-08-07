"use client";

import { createGlobalStyle, styled } from "styled-components";
import { zIndex } from "@graffitoryu/ui";

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

export const StyledMainContainer = styled.main`
  ${position({ type: "relative", z: zIndex.content })}
  ${size({ w: "100%" })}
  min-height: 100%;
`;

export const StyledScrollContainer = styled.div`
  ${position({ type: "relative", z: zIndex.base })}
  ${size({ w: "100%" })}
  min-height: 100vh;
  overflow-x: clip;
`;

export const StyledStickyContainer = styled.div`
  position: relative;
  width: 100%;
`;
