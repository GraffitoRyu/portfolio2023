"use client";

import { css, styled } from "styled-components";

// type
import { BtnTypes } from "@/types/preset";

// style preset
import { SvgFill, SvgStroke, flex, font, size } from "./mixins";
import { img } from "./img";
import { sizePreset } from "./size";

// util
import { rem } from "@/util/unit";

export const btnStyle = ({ w, h, r = 0, bw = 2, color }: BtnTypes) => css`
  ${flex({})}
  ${size({
    w: typeof w === "undefined" ? h : w,
    h,
    r,
  })}

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

  &.text-type {
    ${size({ w: "auto", p: [0, 32] })}
    span {
      ${font({
        size: 24,
        weight: 500,
        height: "1em",
      })}
    }
  }

  &.hover {
    background-color: ${({ theme }) => theme.buttons.hoverBg};
    ${({ theme }) => colorSet(theme.buttons.hoverContents)}
  }

  @media only screen and (max-width: 768px) and (orientation: landscape) {
    ${size({
      h: sizePreset.btn.w768_landscape,
      r: 8,
    })}

    &:not(.text-type) {
      ${size({
        w: sizePreset.btn.w768_landscape,
      })}
    }

    figure {
      ${size({
        w: sizePreset.icon.w768_landscape,
        h: sizePreset.icon.w768_landscape,
      })}
    }

    &.text-type {
      ${size({ p: [0, 16] })}
      span {
        ${font({ size: 16 })}
      }
    }
  }

  @media only screen and (min-width: 768px) {
    ${size({ h: sizePreset.btn.w768, r: 8 })}

    &:not(.text-type) {
      ${size({ w: sizePreset.btn.w768 })}
    }

    figure {
      ${size({ w: sizePreset.icon.w768, h: sizePreset.icon.w768 })}
    }

    &.text-type {
      ${size({ p: [0, 16] })}
      span {
        ${font({ size: 16 })}
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    ${size({ h: sizePreset.btn.w1024 })}

    &:not(.text-type) {
      ${size({ w: sizePreset.btn.w1024 })}
    }

    figure {
      ${size({ w: sizePreset.icon.w1024, h: sizePreset.icon.w1024 })}
    }

    &.text-type {
      ${size({ p: [0, 24] })}
      span {
        ${font({ size: 24 })}
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    ${size({ h: sizePreset.btn.w1280 })}

    &:not(.text-type) {
      ${size({ w: sizePreset.btn.w1280 })}
    }

    figure {
      ${size({ w: sizePreset.icon.w1280, h: sizePreset.icon.w1280 })}
    }
  }
  @media only screen and (min-width: 1440px) {
    ${size({ h: sizePreset.btn.w1440 })}

    &:not(.text-type) {
      ${size({ w: sizePreset.btn.w1440 })}
    }

    figure {
      ${size({ w: sizePreset.icon.w1440, h: sizePreset.icon.w1440 })}
    }

    &.text-type {
      ${size({ p: [0, 16] })}
      span {
        ${font({ size: 16 })}
      }
    }
  }
`;
