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
    ${flex({ std: "flex-start", cross: "flex-start" })}
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

export const SectionHeaderContainer = styled.header<{ $headerHeight: number }>`
  ${size({ w: "100%", mb: 120 })}
  @media only screen and (min-width: 1024px) {
    ${({ $headerHeight }) => position({ type: "sticky", top: $headerHeight })}
    ${size({ w: "50%", mb: 160 })}
  }
`;

export const HeaderTitle = styled.h2`
  ${size({ mb: 32 })}
  color: ${({ theme }) => theme.sectionHeader.title};
  ${font({
    size: 48,
    weight: 700,
    height: "1em",
    transform: "capitalize",
  })}
  @media only screen and (min-width: 1024px) {
    ${size({ mb: 80 })}
    font-size: ${rem(32)};
  }
`;

export const HeaderDesc = styled.p`
  color: ${({ theme }) => theme.sectionHeader.desc};
  ${font({
    size: 32,
    height: "1.5em",
  })}
  span {
    word-break: break-all;
  }
  @media only screen and (min-width: 1024px) {
    ${font({
      size: 64,
      weight: 300,
    })}
  }
`;

export const Contents = styled.div`
  ${size({ w: "100%", pt: 0 })}
  @media only screen and (min-width: 1024px) {
    ${size({ pt: 40 + 80 })} // (title line-height) + (title margin-bottom)
    &:not(.full) {
      width: 50%;
    }
  }
`;
