"use client";

import styled from "styled-components";

// style
import { flex, font, size } from "../preset/mixins";

// util
import { rem } from "@/util/unit";

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
  ${size({ w: "100%", mb: 40 })}
`;

export const StackLegendTitle = styled.dt`
  ${size({ w: "100%", mb: 40 })};
  color: ${({ theme }) => theme.stacks.legendTitle};
`;

export const StackLegendItem = styled.dd`
  ${size({ mr: 40 })}
  &:last-child {
    margin: 0;
  }
`;

export const StackLegendLabel = styled.label`
  color: ${({ theme }) => theme.stacks.legendLabel};
  ${font({
    size: 24,
    weight: 500,
    height: "1em",
  })};
`;

export const StackLegendFigure = styled.figure`
  margin-top: ${rem(10)};
`;

export const StackRowContainer = styled.li`
  ${size({ w: "100%", p: [32, 0, 48] })}
  border-top: ${rem(2)} solid ${({ theme }) => theme.stacks.border};
`;

export const StackCategory = styled.div`
  width: 100%;
  margin-bottom: ${rem(40)};
  h4 {
    color: ${({ theme }) => theme.stacks.category};
    ${font({
      size: 24,
      weight: 500,
      height: "1em",
    })};
  }
`;

export const StackList = styled.div`
  ${flex({ std: "flex-start", wrap: "wrap" })}
`;

export const StackFigure = styled.figure`
  ${size({ m: [0, 80, 20, 0] })}
  &:last-child {
    margin-right: 0;
  }
  figcaption {
    color: ${({ theme }) => theme.stacks.stackName};
    ${font({
      size: 32,
      weight: 500,
      height: "1em",
    })}
  }
`;
