"use client";

import { css } from "styled-components";

// util
import { getUnit, rem } from "@/util/unit";

// types
import { FlexTypes, PositionTypes, SizeTypes } from "@/types/preset";

/**
 * styled-components - mixin
 * 1. size : width, height, margin(top, right, bottom, left), padding(top, right, bottom, left)
 * 2. maxSize: max-width, max-height
 * 3. flex: dir(row, column), std(justify-content), cross(align-items), wrap(flex-wrap)
 * 4. position: type(static, absolute, relative, fixed, sticky, ...), top, right, bottom, left, center(boolean), z(z-index)
 * 5. transition: { { property, duration, timing function, delay }, ...}
 * 6. svgFill: rect, circle, path { fill: props }
 * 7. svgStroke: rect, circle, path { stroke-width: props1, stroke: props2 }
 */

// margin, padding 배열 변환
const convertSpacing = (v: string | number | Array<string | number>) => {
  if (Array.isArray(v))
    return v.map((d: string | number) => getUnit(d)).join(" ");
  else return getUnit(v);
};

/**
 * @desc 각 값은 auto(default), string(%, px, rem 등 단위가 있는 것으로 간주), number는 rem 변환
 * @property {string | number} [w] : width
 * @property {string | number} [h] : height
 * @property {string | number | Array<string | number>} [p] : padding 단일 값은 모든 방향 적용, 배열의 경우 [상하, 좌우]/[상, 좌우, 하]/[상, 우, 하, 좌]
 * @property {string | number | Array<string | number>} [m] : margin 단일 값은 모든 방향 적용, 배열의 경우 [상하, 좌우]/[상, 좌우, 하]/[상, 우, 하, 좌]
 * @property {string | number | Array<string | number>} [r] : radius 단일 값은 모든 방향 적용, 배열의 경우 [상하, 좌우]/[상, 좌우, 하]/[상, 우, 하, 좌]
 * @property {string | number} [mt] : margin-top
 * @property {string | number} [mr] : margin-right
 * @property {string | number} [mb] : margin-bottom
 * @property {string | number} [ml] : margin-left
 * @property {string | number} [pt] : padding-top
 * @property {string | number} [pr] : padding-right
 * @property {string | number} [pb] : padding-bottom
 * @property {string | number} [pl] : padding-left
 */
export const size = ({
  w,
  h,
  m,
  p,
  r,
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
}: SizeTypes) => css`
  ${typeof w !== "undefined" && `width:${getUnit(w)};`}
  ${typeof h !== "undefined" && `height:${getUnit(h)};`}
  ${typeof m !== "undefined" && `margin: ${convertSpacing(m)};`}
  ${typeof p !== "undefined" && `padding: ${convertSpacing(p)};`}
  ${typeof r !== "undefined" && `border-radius: ${convertSpacing(r)};`}
  ${typeof mt !== "undefined" && `margin-top:${getUnit(mt)};`}
  ${typeof mr !== "undefined" && `margin-right:${getUnit(mr)};`}
  ${typeof mb !== "undefined" && `margin-bottom:${getUnit(mb)};`}
  ${typeof ml !== "undefined" && `margin-left:${getUnit(ml)};`}
  ${typeof pt !== "undefined" && `padding-top:${getUnit(pt)};`}
  ${typeof pr !== "undefined" && `padding-right:${getUnit(pr)};`}
  ${typeof pb !== "undefined" && `padding-bottom:${getUnit(pb)};`}
  ${typeof pl !== "undefined" && `padding-left:${getUnit(pl)};`}
`;

/**
 * @property {number | string} [w] : auto(default), string(%, px, rem 등 단위가 있는 것으로 간주), number는 rem 변환
 * @property {number | string} [h] : auto(default), string(%, px, rem 등 단위가 있는 것으로 간주), number는 rem 변환
 */
export const maxSize = ({ w, h }: SizeTypes) => css`
  max-width: ${typeof w !== "undefined" ? getUnit(w) : "auto"};
  max-height: ${typeof h !== "undefined" ? getUnit(h) : "auto"};
`;

/**
 * @property {string | undefined} [dir] : row, column
 * @property {string | undefined} [std] : justify-content (기준 축 정렬)
 * @property {string | undefined} [cross] : align-items (교차 축 정렬)
 * @property {string | undefined} [wrap] : flex-wrap
 * @property {boolean | boolean[] | undefined} [start] : flex-start 설정 (true / [justify-content, align-items])
 * @property {boolean | boolean[] | undefined} [end] : flex-end 설정 (true / [justify-content, align-items])
 */
export const flex = ({ dir, std, cross, wrap, start, end }: FlexTypes) => css`
  display: flex;
  justify-content: ${!std &&
  typeof start === "undefined" &&
  typeof end === "undefined"
    ? `center`
    : std};
  align-items: ${!cross &&
  typeof start === "undefined" &&
  typeof end === "undefined"
    ? `center`
    : cross};
  ${!std &&
  !cross &&
  typeof end === "undefined" &&
  typeof start === "boolean" &&
  start === true
    ? `
        justify-content:flex-start;
        align-items:flex-start;
      `
    : ""}
  ${typeof end === "undefined" && Array.isArray(start) && start.length === 2
    ? `
        justify-content: ${!std && start[0] === true ? "flex-start" : "center"};
        align-items: ${!cross && start[1] === true ? "flex-start" : "center"};
      `
    : ""}
  ${!std &&
  !cross &&
  typeof start === "undefined" &&
  typeof end === "boolean" &&
  end === true
    ? `
        justify-content:flex-end;
        align-items:flex-end;
      `
    : ""}
  ${typeof start === "undefined" && Array.isArray(end) && end.length === 2
    ? `
        justify-content: ${!std && end[0] === true ? "flex-end" : "center"};
        align-items: ${!cross && end[1] === true ? "flex-end" : "center"};
      `
    : ""}
  ${dir && `flex-direction: ${dir};`}
  ${wrap && `flex-wrap:${wrap};`}
`;

/**
 * @property {string | undefined} [type] : absolute(default), relative, fixed, sticky, static, ...
 * @property {string | number} [top] : px, rem 단위를 붙인 string 형태 필요
 * @property {string | number} [left] : px, rem 단위를 붙인 string 형태 필요
 * @property {string | number} [bottom] : px, rem 단위를 붙인 string 형태 필요
 * @property {string | number} [right] : px, rem 단위를 붙인 string 형태 필요
 * @property {number | undefined} [z] : z-index
 * @property {boolean | string | undefined} [center] : px, rem 단위를 붙인 string 형태 필요
 */
export const position = ({
  type,
  top,
  left,
  bottom,
  right,
  center,
  z,
}: PositionTypes) => css`
  position: ${type ?? "absolute"};
  ${typeof top !== "undefined" ? `top:${getUnit(top)};` : ""};
  ${typeof left !== "undefined" ? `left:${getUnit(left)};` : ""};
  ${typeof bottom !== "undefined" ? `bottom:${getUnit(bottom)};` : ""};
  ${typeof right !== "undefined" ? `right:${getUnit(right)};` : ""};
  ${z !== undefined ? `z-index:${z};` : ""}
  ${typeof center === "boolean"
    ? `
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
  `
    : ""}
  ${typeof center === "string" && ["x", "y"].includes(center)
    ? `
    ${center === "x" ? "left" : "top"}:50%;
    transform:translate${center.toUpperCase()}(-50%);
  `
    : ""}
`;

export const font = ({
  size,
  weight,
  height,
  spacing,
  family,
  whitespace,
  transform,
  deco,
  style,
}: {
  size?: number | string;
  weight?: number | string;
  height?: number | string;
  spacing?: number | string;
  family?: string | string[];
  whitespace?: string;
  transform?: string;
  deco?: string;
  style?: string;
}) => css`
  ${typeof size === "number"
    ? `font-size:${rem(size)};`
    : typeof size === "string"
    ? `font-size:${size};`
    : ""}
  ${typeof weight !== "undefined" && `font-weight:${weight};`}
  ${typeof height === "number"
    ? `line-height:${rem(height)};`
    : typeof height === "string"
    ? `line-height:${height};`
    : ""}
  ${typeof spacing === "number"
    ? `letter-spacing:${rem(spacing)};`
    : typeof spacing === "string"
    ? `letter-spacing:${spacing};`
    : ""}
  ${Array.isArray(family)
    ? `font-family:${family.join(",")};`
    : typeof family === "string"
    ? `font-family:${family};`
    : ""}
  ${whitespace && `white-space:${whitespace};`}
  ${transform && `text-transform:${transform};`}
  ${deco && `text-decoration:${deco};`}
  ${style && `font-style:${style};`}
`;

type TransitionTypes = {
  prop: string;
  time: string;
  easing?: string;
  delay?: string;
};
export const transition = ([...setArray]: TransitionTypes[]) => css`
  transition: ${setArray
    .map(
      d =>
        `${d.prop} ${d.time}${d.easing ? ` ${d.easing}` : ""}${
          d.delay ? ` ${d.delay}` : ""
        }`,
    )
    .join(",")};
`;

export const SvgFill = (color: string) => css`
  rect,
  circle,
  path {
    fill: ${color};
  }
`;

export const SvgStroke = (width: string, color: string) => css`
  rect,
  circle,
  path {
    stroke-width: ${width};
    stroke: ${color};
    stroke-linecap: round;
  }
`;
