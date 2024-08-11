"use client";

import { css, styled } from "styled-components";

// style preset
import { img } from "./img";
import { sizePreset } from "./size";
import { svgFill, svgStroke, flex, font, size } from "./mixins";

// util
import { rem } from "@/utils/style.util";

/**
 * style preset; 버튼 스타일
 * @param {PresetBtnProps} props
 * @param {number | string} [props.w] width
 * @param {number | string} props.h height
 * @param {number | string} [props.r] border-radius
 * @param {number} [props.bw] border-width
 * @param {string} [props.color] text color, border color, svg color, ...
 * @desc
 * - flex()
 * - size()
 * - colorSet() (optional)
 * - border
 */
export const btnStyle = ({ w, h, r = 0, bw = 2, color }: PresetBtnProps) => css`
  ${flex({})}
  ${size({
    w: typeof w === "undefined" ? h : w,
    h,
    r,
  })}

  ${color ? colorSet(color) : ""}
  border:${rem(bw)} solid ${color ?? "transparent"};
`;

/**
 * style preset; 컬러 세트
 * @param {string} color
 * @desc
 * - color
 * - svg fill
 * - svg stroke
 */
export const colorSet = (color: string) =>
  css`
    color: ${color};
    ${svgFill(color)}
    ${svgStroke(rem(1), color)}
  ` ?? "";

export const StyledDefaultBtn = styled.button`
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
