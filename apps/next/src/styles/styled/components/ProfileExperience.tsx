"use client";

import styled from "styled-components";
import { media, typography } from "@graffitoryu/ui";

// util
import { rem, widthRatio } from "@/utils/style.util";
import { flex, font, size } from "../preset/mixins";

export const StyledExpScrollContainer = styled.div`
  ${size({ w: "100%", h: "100%" })}
`;

export const StyledExpList = styled.ul<StyleOptionExpList>`
  ${flex({ start: true })}
  ${({ $length }) =>
    size({
      w: `calc(${widthRatio(12, 11) * ($length !== 0 ? $length : 5)}% + ${rem(
        40,
      )})`,
      h: "100%",
      m: [0, -20],
    })}
  opacity: 0;

  @media only screen and ${media.min.desktop} {
    ${({ $length }) =>
      size({
        w: `calc(${widthRatio(7, 5) * ($length !== 0 ? $length : 5)}% + ${rem(
          40,
        )})`,
      })}
  }
`;

export const StyledExpItem = styled.li<StyleOptionExpItem>`
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
  @media only screen and ${media.min.desktop} {
    ${size({ p: [0, 20] })}
  }
`;

export const StyledExpContents = styled.dl`
  ${size({ w: "100%" })}
`;

export const StyledExpTitle = styled.dt`
  ${size({ mb: 80 })}
  color: ${({ theme }) => theme.exp.title};
  ${font({
    size: 48,
    weight: 300,
    height: "1em",
    transform: "capitalize",
    family: typography.family.serifKorean,
  })}
  span {
    ${font({ spacing: 0 })}
  }
  @media only screen and ${media.min.desktop} {
    ${font({ size: 32 })}
  }
`;

export const StyledExpDesc = styled.dd`
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
    letter-spacing: -0.01em;
  }
  @media only screen and ${media.min.desktop} {
    ${font({ size: 24, height: "1.6em" })}
    &:before {
      ${size({ h: 40 })}
    }
  }
`;
