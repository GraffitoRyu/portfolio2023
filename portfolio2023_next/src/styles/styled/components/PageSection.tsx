"use client";

import styled from "styled-components";

// style
import { flex, font, position, size } from "../preset/mixins";

// util
import { rem } from "@/util/unit";

export const PageSectionContainer = styled.section<{
  $wh: number;
  $headerHeight: number;
}>`
  position: relative;
  width: 100%;
  &.side-h-padding {
    ${size({ pl: 80, pr: 80 })}
  }
  &.side-v-padding {
    ${size({ pt: 160, pb: 160 })}
  }
  &.visual-section {
    height: ${({ $wh, $headerHeight }) =>
      $wh !== 0 && $headerHeight !== 0 ? `${$wh - $headerHeight}px` : "100vh"};
    .section-header {
      display: none;
    }
  }
  @media only screen and (min-width: 1024px) {
    &.side-v-padding {
      ${size({ pt: 240, pb: 240 })}
    }
    &.visual-section {
      height: auto;
      flex-wrap: wrap;
      .section-header {
        display: block;
      }
    }
  }
`;

export const SectionHeaderContainer = styled.header<{
  $wh: number;
  $headerHeight: number;
}>`
  ${size({ w: "100%", mb: 120 })}
  @media only screen and (min-width: 1024px) {
    ${({ $headerHeight }) =>
      position({ type: "sticky", top: `${$headerHeight}px` })}
    ${({ $wh, $headerHeight }) =>
      size({ h: `${$wh / 2 - $headerHeight}px`, mb: 0 })}
  }
`;

export const HeaderTitle = styled.h2`
  ${size({ mb: 32 })}
  color: ${({ theme }) => theme.sectionHeader.title};
  ${font({
    size: 48,
    weight: 500,
    spacing: "0.02em",
    height: "1em",
    transform: "capitalize",
    family: `var(--serif-kr)`,
  })}
  @media only screen and (min-width: 1024px) {
    ${size({ mb: 80 })}
    font-size: ${rem(120)};
  }
`;

export const HeaderDesc = styled.p`
  color: ${({ theme }) => theme.sectionHeader.desc};
  ${font({
    size: 32,
    height: "1.25em",
  })}
  span {
    word-break: break-all;
  }
  @media only screen and (min-width: 1024px) {
    ${font({
      size: 32,
      weight: 300,
    })}
  }
`;

export const Contents = styled.div`
  ${size({ w: "100%" })}
  @media only screen and (min-width: 1024px) {
    ${flex({ std: "flex-start", cross: "flex-start" })}
    &:not(.full) {
      ${size({ m: [0, -20] })}
    }
  }
`;

export const SideContents = styled.aside<{ $wh: number }>`
  width: 100%;
  min-height: 1px;
  @media only screen and (min-width: 1024px) {
    ${({ $wh }) => position({ type: "sticky", top: `${$wh / 2}px` })}
    ${size({ w: `41.6667%`, p: [0, 20] })}
    &.intro {
      width: 50%;
    }
    &.full {
      display: none;
    }
  }
`;

export const ContentsMain = styled.div`
  width: 100%;
  @media only screen and (min-width: 1024px) {
    ${size({ w: `58.3333%`, p: [0, 20] })}
    &.intro {
      width: 50%;
    }
    &.full {
      ${size({ w: `100%`, p: 0 })}
    }
  }
`;
