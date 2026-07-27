"use client";

import styled from "styled-components";
import {
  mediaQueryTokens,
  typographyTokens,
  zIndexTokens,
} from "@graffitoryu/ui";

// style
import { flex, font, position, size } from "../preset/mixins";

// util
import { rem, widthRatio } from "@/utils/style.util";

export const StyledPageSectionContainer = styled.section`
  transition: none;
  ${size({ w: "100%" })}
  &.side-h-padding {
    ${size({ pl: 80, pr: 80 })}
  }
  &.side-v-padding {
    ${size({ pt: `calc(100vh / 4)`, pb: `calc(100vh / 4)` })}
  }
  &.section-visual {
    ${size({ h: `calc(100vh - var(--header-height))` })}
    .section-header {
      display: none;
    }
  }
  &:not(.section-visual) {
    min-height: 100vh;
    ${flex({ dir: "column", cross: "flex-start" })};
  }

  &.section-experience {
    ${position({ type: "sticky", top: 0 })}
    transform: none !important;
  }

  @media only screen and ${mediaQueryTokens.min.desktop} {
    &.side-v-padding {
      ${size({ pt: `var(--header-height)` })}
    }
    &.section-visual {
      height: auto;
      flex-wrap: wrap;
      .section-header {
        display: block;
      }
    }
  }
`;

export const StyledSectionHeaderContainer = styled.header`
  ${size({ w: "100%", mb: 200 })}
  &.empty {
    margin: 0;
  }
  @media only screen and ${mediaQueryTokens.min.desktop} {
    &:not(.empty) {
      ${size({ mb: 120 })}
    }
  }
`;

export const StyledHeaderTitle = styled.h2`
  ${size({ mb: 64 })}
  color: ${({ theme }) => theme.sectionHeader.title};
  ${font({
    size: 120,
    weight: 500,
    spacing: `-0.02em`,
    height: "1em",
    transform: "capitalize",
    family: typographyTokens.family.serifDisplay,
  })}
  opacity:0;
  font-style: italic;
  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${size({ mb: 80 })}
    ${font({ size: 160, weight: 500 })}
  }
`;

export const StyledHeaderDesc = styled.p`
  color: ${({ theme }) => theme.sectionHeader.desc};
  ${font({
    size: 32,
    height: "1.5em",
  })}
  span {
    display: block;
    word-break: break-all;
  }
  opacity: 0;
  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${font({
      size: 32,
      weight: 300,
    })}
  }
`;

export const StyledSectionContents = styled.div`
  ${size({ w: "100%" })}
  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${position({ type: "relative", z: zIndexTokens.content })}
    ${flex({ start: true })}
    &:not(.full) {
      ${size({ w: `calc(100% + ${rem(40)})`, m: [0, -20] })}
    }
  }
`;

export const StyledSectionSideContents = styled.aside`
  width: 100%;
  min-height: 1px;
  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${position({ type: "sticky", top: `var(--header-height)` })}
    flex:1;
    ${size({ p: [0, 20] })}
    &.intro {
      width: 50%;
    }
    &.full {
      display: none;
    }
  }
`;

export const StyledSectionContentsMain = styled.div`
  width: 100%;
  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${size({ w: `${widthRatio(12, 7)}%`, p: [0, 20] })}
    &.intro {
      ${size({ w: "50%", pb: 240 })}
    }
    &.full {
      ${size({ w: `100%`, p: 0 })}
    }
  }
`;
