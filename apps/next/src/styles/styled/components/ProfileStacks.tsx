"use client";

import styled from "styled-components";
import { media } from "@graffitoryu/ui";

// style
import { flex, font, size } from "../preset/mixins";

// util
import { rem, widthRatio } from "@/utils/style.util";

function getLevelColor(index: number, level: number): string {
  if (level === 4) return "levelFull";
  if (index <= level) return "levelFill";
  return "levelEmpty";
}

export const StyledStackLevelContainer = styled.ul<{ level: number }>`
  ${flex({ std: "flex-start" })}
  ${size({ w: 108, h: 4, mt: 16 })}
  li {
    ${size({ w: 24, h: "100%", mr: 4 })}
    font-size:0;
    &:nth-child(1) {
      background-color: ${({ theme, level }) =>
        theme.stacks[getLevelColor(0, level)]};
    }
    &:nth-child(2) {
      background-color: ${({ theme, level }) =>
        theme.stacks[getLevelColor(1, level)]};
    }
    &:nth-child(3) {
      background-color: ${({ theme, level }) =>
        theme.stacks[getLevelColor(2, level)]};
    }
    &:nth-child(4) {
      margin-right: 0;
      background-color: ${({ theme, level }) =>
        theme.stacks[getLevelColor(3, level)]};
    }
  }
`;

export const StyledStackLegendContainer = styled.dl`
  ${flex({ std: "flex-start", wrap: "wrap" })}
  ${size({ w: "100%", mb: 80 })}
  opacity: 0;
  @media only screen and ${media.min.desktop} {
    ${size({
      w: `calc(${widthRatio(5, 2)}% + ${rem(40)})`,
      p: [0, 20],
      ml: "auto",
    })}
  }
`;

export const StyledStackLegendTitle = styled.dt`
  ${size({ w: "100%", mb: 40 })};
  color: ${({ theme }) => theme.stacks.legendTitle};
  ${font({
    size: 24,
    weight: 700,
    height: "1em",
  })}
  @media only screen and ${media.min.desktop} {
    ${size({ mb: 40 })}
    ${font({ size: 24 })}
  }
`;

export const StyledStackLegendItem = styled.dd`
  ${size({ w: "fit-content", mr: 64, pb: 40 })}
  &:last-child {
    margin: 0;
  }
  @media only screen and ${media.min.desktop} {
    ${size({ w: "100%", m: [0, 0, 40] })}
  }
`;

export const StyledStackLegendLabel = styled.label`
  color: ${({ theme }) => theme.stacks.legendLabel};
  ${font({
    size: 28,
    weight: 500,
    height: "1em",
  })};
  @media only screen and ${media.min.desktop} {
    ${font({ size: 24 })}
  }
`;

export const StyledStackLegendFigure = styled.figure`
  ${size({ mb: 10, p: [0, 4] })}
`;

export const StyledStackRowContainer = styled.li`
  ${size({ w: "100%", pb: 80 })}
  &:last-child {
    ${size({ pb: 0 })}
  }

  @media only screen and ${media.min.desktop} {
    ${size({ pb: 80 })}
  }
`;

export const StyledStackCategory = styled.div`
  ${size({ w: "100%", mb: 40 })}
  h3 {
    color: ${({ theme }) => theme.stacks.category};
    ${font({
      size: 32,
      weight: 500,
      height: "1em",
    })};
  }
  opacity: 0;

  @media only screen and ${media.min.desktop} {
    ${size({ mb: 24 })}
    h3 {
      ${font({ size: 24 })}
    }
  }
`;

export const StyledStackFigure = styled.figure<{ $index: number }>`
  ${size({ m: [0, 64, 40, 0] })}
  &:last-child {
    margin-right: 0;
  }
  figcaption {
    ${size({ mb: 16 })}
    color: ${({ theme }) => theme.stacks.stackName};
    ${font({
      size: 28,
      weight: 500,
      height: "1em",
      spacing: 0,
    })}
  }
  &:nth-child(${({ $index }) => $index + 1}) {
    transition: opacity 0.4s linear ${({ $index }) => `${$index * 0.12}s`};
  }

  @media only screen and ${media.min.desktop} {
    ${size({ m: [0, 80, 40, 0] })}
    figcaption {
      ${size({ mb: 10 })}
      ${font({ size: 32 })}
    }
  }
`;

export const StyledStackList = styled.div`
  ${flex({ std: "flex-start", wrap: "wrap" })}
  ${size({ w: "100%" })}
  opacity:0;

  &.hide {
    ${StyledStackFigure} {
      opacity: 0;
    }
  }
  &.hide-back {
    ${StyledStackFigure} {
      opacity: 0;
      transition: opacity 0.4s !important;
    }
  }
`;
