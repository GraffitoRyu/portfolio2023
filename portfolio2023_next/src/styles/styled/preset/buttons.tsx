"use client";

import { css, styled } from "styled-components";

// type
import { BtnTypes } from "@/types/preset";

// style preset
import { SvgFill, SvgStroke, flex, size } from "./mixins";
import { img } from "./img";
import { sizePreset } from "./size";

// util
import { getUnit, rem } from "@/util/unit";

export const btnStyle = ({ w, h, r = 0, bw = 2, color }: BtnTypes) => css`
  ${flex({})}

  width: ${typeof w === "undefined" ? getUnit(h) : getUnit(w)};
  height: ${getUnit(h)};
  border-radius: ${getUnit(r)};

  ${color ? colorSet(color) : ""}
  border:${rem(bw)} solid ${color ?? "transparent"};
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
      h: sizePreset.btn.mobile,
      r: 16,
      bw: 2,
      color: theme.buttons.basic,
    })}

  figure {
    ${size({ w: sizePreset.icon.mobile, h: sizePreset.icon.mobile })}
    svg {
      ${img({})}
    }
  }

  &.w-auto {
    ${size({ w: "auto", p: [0, 32] })}
  }
  &.hover {
    background-color: ${({ theme }) => theme.buttons.hoverBg};
    ${({ theme }) => colorSet(theme.buttons.hoverContents)}
  }

  @media only screen and (min-width: 1024px) {
    ${size({ w: sizePreset.btn.pc, h: sizePreset.btn.pc, r: 8 })}
    figure {
      ${size({ w: sizePreset.icon.pc, h: sizePreset.icon.pc })}
    }

    &.w-auto {
      ${size({ w: "auto", p: [0, 16] })}
    }
  }
`;
