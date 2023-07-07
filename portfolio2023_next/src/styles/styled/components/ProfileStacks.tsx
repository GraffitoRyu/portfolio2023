"use client";

import styled from "styled-components";

// style
import { flex, font, size } from "../preset/mixins";

// util
import { rem, widthRatio } from "@/util/unit";

function getLevelColor(index: number, level: number): string {
  if (level === 4) return "levelFull";
  if (index <= level) return "levelFill";
  return "levelEmpty";
}

export const StackLevelContainer = styled.ul<{ level: number }>`
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

export const StackLegendContainer = styled.dl`
  ${flex({ std: "flex-start", wrap: "wrap" })}
  ${size({ w: "100%", mb: 80 })}
  opacity: 0;
  @media only screen and (min-width: 1024px) {
    ${size({
      w: `calc(${widthRatio(5, 2)}% + ${rem(40)})`,
      p: [0, 20],
      ml: "auto",
    })}
  }
`;

export const StackLegendTitle = styled.dt`
  ${size({ w: "100%", mb: 40 })};
  color: ${({ theme }) => theme.stacks.legendTitle};
  ${font({
    size: 24,
    weight: 700,
    height: "1em",
  })}
  @media only screen and (min-width: 1024px) {
    ${size({ mb: 40 })}
    ${font({ size: 24 })}
  }
`;

export const StackLegendItem = styled.dd`
  ${size({ w: "fit-content", mr: 64, pb: 40 })}
  &:last-child {
    margin: 0;
  }
  @media only screen and (min-width: 1024px) {
    ${size({ w: "100%", m: [0, 0, 40] })}
  }
`;

export const StackLegendLabel = styled.label`
  color: ${({ theme }) => theme.stacks.legendLabel};
  ${font({
    size: 28,
    weight: 500,
    height: "1em",
  })};
  @media only screen and (min-width: 1024px) {
    ${font({ size: 24 })}
  }
`;

export const StackLegendFigure = styled.figure`
  ${size({ mb: 10, p: [0, 4] })}
`;

export const StackRowContainer = styled.li`
  ${size({ w: "100%", pb: 80 })}
  &:last-child {
    ${size({ pb: 0 })}
  }

  @media only screen and (min-width: 1024px) {
    ${size({ pb: 80 })}
  }
`;

export const StackCategory = styled.div`
  ${size({ w: "100%", mb: 40 })}
  h4 {
    color: ${({ theme }) => theme.stacks.category};
    ${font({
      size: 32,
      weight: 500,
      height: "1em",
    })};
  }
  opacity: 0;

  @media only screen and (min-width: 1024px) {
    ${size({ mb: 24 })}
    h4 {
      ${font({ size: 24 })}
    }
  }
`;

export const StackFigure = styled.figure<{ $index: number }>`
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

  @media only screen and (min-width: 1024px) {
    ${size({ m: [0, 80, 40, 0] })}
    figcaption {
      ${size({ mb: 10 })}
      ${font({ size: 32 })}
    }
  }
`;

export const StackList = styled.div`
  ${flex({ std: "flex-start", wrap: "wrap" })}
  ${size({ w: "100%" })}

  &.hide {
    ${StackFigure} {
      opacity: 0;
    }
  }
  &.hide-back {
    ${StackFigure} {
      opacity: 0;
      transition: opacity 0.4s !important;
    }
  }
`;
