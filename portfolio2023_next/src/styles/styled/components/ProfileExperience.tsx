"use client";

import styled from "styled-components";

// util
import { rem, widthRatio } from "@/util/unit";
import { flex, font, size } from "../preset/mixins";

export const ExpScrollContainer = styled.div`
  ${size({ w: "100%", h: "100%" })}
`;

export const ExpList = styled.ul<{ $length: number }>`
  ${flex({ std: "flex-start", cross: "flex-start" })}
  ${({ $length }) =>
    size({
      w: `calc(${widthRatio(7, 5) * $length}% + ${rem(40)})`,
      h: "100%",
      m: [0, -20],
    })}
`;

export const ExpItem = styled.li<{ $totalLength: number }>`
  ${({ $totalLength }) =>
    size({ w: `${widthRatio(5 * $totalLength, 5)}%`, h: "100%", p: [0, 20] })}

  opacity: 0.4;
  transition: opacity 0.4s;
  &.on,
  &:hover {
    opacity: 1;
  }
`;

export const ExpContents = styled.dl`
  ${size({ w: "100%" })}
`;

export const ExpTitle = styled.dt`
  ${size({ mb: 80 })}
  color: ${({ theme }) => theme.exp.title};
  ${font({
    size: 24,
    weight: 500,
    height: "1em",
    transform: "capitalize",
    spacing: 0,
  })}
`;

export const ExpDesc = styled.dd`
  ${flex({ std: "flex-start", cross: "flex-start" })}
  color: ${({ theme }) => theme.exp.desc};
  ${font({
    size: 24,
    weight: 400,
    height: "1.6em",
  })}
  &:before {
    content: "\\00B7";
    ${flex({ std: "flex-start" })}
    ${size({ w: 20, h: 40 })}
    line-height:1em;
  }
  span {
    flex: 1;
  }
`;
