"use client";

import { css, styled } from "styled-components";

// type
import { BtnTypes } from "@/types/preset";

// mixin
import { SvgFill, SvgStroke, flex, size } from "./mixins";

// util
import { getUnit, rem } from "@/util/unit";
import { img } from "./img";

export const btnStyle = ({
  width,
  height,
  radius = 0,
  borderWidth = 2,
  color,
}: BtnTypes) => css`
  ${flex({})}

  width: ${typeof width === "undefined" ? getUnit(height) : getUnit(width)};
  height: ${getUnit(height)};
  border-radius: ${getUnit(radius)};

  ${color ? colorSet(color) : ""}
  border:${rem(borderWidth)} solid ${color ?? "transparent"};
`;

export const colorSet = (color: string) =>
  css`
    color: ${color};
    ${SvgFill(color)}
    ${SvgStroke(rem(1), color)}
  ` ?? "";

export const CommonBtn = styled.button`
  ${({ theme }) =>
    btnStyle({
      height: 80,
      radius: 16,
      borderWidth: 2,
      color: theme.buttons.basic,
    })}

  figure {
    ${size({ width: 24, height: 24 })}
    svg {
      ${img({})}
    }
  }

  &.w-auto {
    ${size({ width: "auto", padding: [0, 32] })}
  }
  &.hover {
    background-color: ${({ theme }) => theme.buttons.hoverBg};
    ${({ theme }) => colorSet(theme.buttons.hoverContents)}
  }

  @media only screen and (min-width: 1024px) {
    ${size({ width: 48, height: 48 })}
    border-radius: ${rem(8)};
    figure {
      ${size({ width: 16, height: 16 })}
    }

    &.w-auto {
      ${size({ width: "auto", padding: [0, 16] })}
    }
  }
`;
