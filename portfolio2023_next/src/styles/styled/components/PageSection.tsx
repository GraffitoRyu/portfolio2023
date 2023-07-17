"use client";

import styled from "styled-components";

// style
import { flex, font, position, size } from "../preset/mixins";

// util
import { rem, widthRatio } from "@/util/unit";

export const PageSectionContainer = styled.section<{
  $wh: number;
  $hdHeight: number;
}>`
  transition: none;
  ${size({ w: "100%" })}
  &.side-h-padding {
    ${size({ pl: 80, pr: 80 })}
  }
  &.side-v-padding {
    ${({ $wh }) =>
      size({
        pt: $wh !== 0 ? `${$wh / 4}px` : "25vh",
        pb: $wh !== 0 ? `${$wh / 4}px` : "25vh",
      })}
  }
  &.section-visual {
    ${({ $wh, $hdHeight }) =>
      size({
        h: $wh !== 0 && $hdHeight !== 0 ? `${$wh - $hdHeight}px` : "100vh",
      })}
    .section-header {
      display: none;
    }
  }
  &:not(.section-visual) {
    min-height: ${({ $wh }) => ($wh !== 0 ? `${$wh}px` : "100vh")};
    ${flex({ dir: "column", cross: "flex-start" })};
  }

  &.section-experience {
    ${position({ type: "sticky", top: 0 })}
    transform: none !important;
  }

  @media only screen and (min-width: 1024px) {
    &.side-v-padding {
      ${({ $hdHeight }) =>
        size({
          pt: $hdHeight !== 0 ? `${$hdHeight}px` : 240,
        })}
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

export const SectionHeaderContainer = styled.header`
  ${size({ w: "100%", mb: 200 })}
  &.empty {
    margin: 0;
  }
  @media only screen and (min-width: 1024px) {
    &:not(.empty) {
      ${size({ mb: 120 })}
    }
  }
`;

export const HeaderTitle = styled.h2`
  ${size({ mb: 64 })}
  color: ${({ theme }) => theme.sectionHeader.title};
  ${font({
    size: 120,
    weight: 500,
    spacing: `-0.02em`,
    height: "1em",
    transform: "capitalize",
    family: `var(--serif-dm)`,
  })}
  opacity:0;
  font-style: italic;
  @media only screen and (min-width: 1024px) {
    ${size({ mb: 80 })}
    ${font({ size: 160, weight: 500 })}
  }
`;

export const HeaderDesc = styled.p`
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
    ${position({ type: "relative", z: 10 })}
    ${flex({ start: true })}
    &:not(.full) {
      ${size({ w: `calc(100% + ${rem(40)})`, m: [0, -20] })}
    }
  }
`;

export const SideContents = styled.aside<{ $hdHeight: number }>`
  width: 100%;
  min-height: 1px;
  @media only screen and (min-width: 1024px) {
    ${({ $hdHeight }) =>
      position({
        type: "sticky",
        top: $hdHeight !== 0 ? `${$hdHeight}px` : 240,
      })}
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

export const ContentsMain = styled.div`
  width: 100%;
  @media only screen and (min-width: 1024px) {
    ${size({ w: `${widthRatio(12, 7)}%`, p: [0, 20] })}
    &.intro {
      ${size({ w: "50%", pb: 240 })}
    }
    &.full {
      ${size({ w: `100%`, p: 0 })}
    }
  }
`;
