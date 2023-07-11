"use client";

import styled from "styled-components";

// util
import { rem, widthRatio } from "@/util/unit";
import { flex, font, size } from "../preset/mixins";

export const ExpScrollContainer = styled.div`
  ${size({ w: "100%", h: "100%" })}
`;

export const ExpList = styled.ul<{ $length: number }>`
  ${flex({ start: true })}
  ${({ $length }) =>
    size({
      w: `calc(${widthRatio(12, 11) * ($length !== 0 ? $length : 5)}% + ${rem(
        40
      )})`,
      h: "100%",
      m: [0, -20],
    })}
  opacity: 0;

  @media only screen and (min-width: 1024px) {
    ${({ $length }) =>
      size({
        w: `calc(${widthRatio(7, 5) * ($length !== 0 ? $length : 5)}% + ${rem(
          40
        )})`,
      })}
  }
`;

export const ExpItem = styled.li<{ $totalLength: number }>`
  ${({ $totalLength }) =>
    size({
      w: `${widthRatio(5 * ($totalLength !== 0 ? $totalLength : 25), 5)}%`,
      h: "100%",
      p: [0, 100, 0, 20],
    })}

  opacity: 0.4;
  transition: opacity 0.4s;
  &.on {
    opacity: 1;
  }
  @media only screen and (min-width: 1024px) {
    ${size({ p: [0, 20] })}
  }
`;

export const ExpContents = styled.dl`
  ${size({ w: "100%" })}
`;

export const ExpTitle = styled.dt`
  ${size({ mb: 80 })}
  color: ${({ theme }) => theme.exp.title};
  ${font({
    size: 48,
    weight: 700,
    height: "1em",
    transform: "capitalize",
    spacing: 0,
    family: "var(--serif-kr)",
  })}
  @media only screen and (min-width:1024px) {
    ${font({ size: 32 })}
  }
`;

export const ExpDesc = styled.dd`
  ${flex({ start: true })}
  color: ${({ theme }) => theme.exp.desc};
  ${font({
    size: 28,
    weight: 400,
    height: "1.8em",
  })}
  &:before {
    content: "\\00B7";
    ${flex({ std: "flex-start" })}
    ${size({ w: 20, h: 48 })}
    line-height:1em;
  }
  span {
    flex: 1;
    word-break: keep-all;
  }
  @media only screen and (min-width: 1024px) {
    ${font({ size: 24, height: "1.6em" })}
    &:before {
      ${size({ h: 40 })}
    }
  }
`;
