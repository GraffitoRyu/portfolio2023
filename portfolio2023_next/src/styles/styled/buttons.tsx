"use client";

import { css } from "styled-components";

// type
import { BtnTypes } from "@/types/button";

// mixin
import { SvgFill, SvgStroke, flex } from "./mixins";

// util
import { getUnit, rem } from "@/util/unit";

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
  ${borderWidth && color ? `border:${rem(borderWidth)} solid ${color};` : ""}
`;

export const colorSet = (color: string) =>
  css`
    color: ${color};
    ${SvgFill(color)}
    ${SvgStroke(rem(1), color)}
  ` ?? "";
