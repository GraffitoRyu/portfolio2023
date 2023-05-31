import { css } from "styled-components";

// util
import { getUnit } from "@/util/unit";

type SizeTypes = {
  width?: string | number;
  height?: string | number;
  margin?: string | number | Array<string | number>; // length: 1 ~ 4
  padding?: string | number | Array<string | number>; // length: 1 ~ 4
  mt?: string | number; // margin-top
  mr?: string | number; // margin-right
  mb?: string | number; // margin-bottom
  ml?: string | number; // margin-left
  pt?: string | number; // padding-top
  pr?: string | number; // padding-right
  pb?: string | number; // padding-bottom
  pl?: string | number; // padding-left
};

// margin, padding 배열 변환
const convertSpacing = (v: string | number | Array<string | number>) => {
  if (Array.isArray(v))
    return v.map((d: string | number) => getUnit(d)).join(" ");
  else return getUnit(v);
};

/**
 * @desc 각 값은 auto(default), string(%, px, rem 등 단위가 있는 것으로 간주), number는 rem 변환
 * @property {string | number} [width]
 * @property {string | number} [height]
 * @property {string | number | Array<string | number>} [padding] : 단일 값은 모든 방향 적용, 배열의 경우 [상하, 좌우]/[상, 좌우, 하]/[상, 우, 하, 좌]
 * @property {string | number | Array<string | number>} [margin] : 단일 값은 모든 방향 적용, 배열의 경우 [상하, 좌우]/[상, 좌우, 하]/[상, 우, 하, 좌]
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
  width,
  height,
  margin,
  padding,
  mt,
  mr,
  mb,
  ml,
  pt,
  pr,
  pb,
  pl,
}: SizeTypes) => css`
  ${width && `width:${getUnit(width)};`}
  ${height && `height:${getUnit(height)};`}
  ${margin && `margin: ${convertSpacing(margin)};`}
  ${padding && `padding: ${convertSpacing(padding)};`}
  ${mt && `margin-top:${getUnit(mt)};`}
  ${mr && `margin-right:${getUnit(mr)};`}
  ${mb && `margin-bottom:${getUnit(mb)};`}
  ${ml && `margin-left:${getUnit(ml)};`}
  ${pt && `padding-top:${getUnit(pt)};`}
  ${pr && `padding-right:${getUnit(pr)};`}
  ${pb && `padding-bottom:${getUnit(pb)};`}
  ${pl && `padding-left:${getUnit(pl)};`}
`;

/**
 * @property {number | string} [width] : auto(default), string(%, px, rem 등 단위가 있는 것으로 간주), number는 rem 변환
 * @property {number | string} [height] : auto(default), string(%, px, rem 등 단위가 있는 것으로 간주), number는 rem 변환
 */
export const maxSize = ({ width, height }: SizeTypes) => css`
  max-width: ${typeof width !== "undefined" ? getUnit(width) : "auto"};
  max-height: ${typeof height !== "undefined" ? getUnit(height) : "auto"};
`;

type FlexTypes = {
  dir?: string | undefined;
  std?: string | undefined;
  cross?: string | undefined;
  wrap?: string | undefined;
};
/**
 * @property {string | undefined} [dir] : row, column
 * @property {string | undefined} [std] : justify-content (기준 축 정렬)
 * @property {string | undefined} [cross] : align-items (교차 축 정렬)
 * @property {string | undefined} [wrap] : flex-wrap
 */
export const flex = ({ dir, std, cross, wrap }: FlexTypes) => css`
  display: flex;
  justify-content: ${std ?? "center"};
  align-items: ${cross ?? "center"};
  ${dir && `flex-direction: ${dir};`}
  ${wrap && `flex-wrap:${wrap};`}
`;

type PositionTypes = {
  type?: string | undefined;
  top?: string | number;
  left?: string | number;
  bottom?: string | number;
  right?: string | number;
  z?: number | undefined;
  center?: boolean | undefined;
};
/**
 * @property {string | undefined} [type] : absolute(default), relative, fixed, sticky, static, ...
 * @property {string | number} [top] : px, rem 단위를 붙인 string 형태 필요
 * @property {string | number} [left] : px, rem 단위를 붙인 string 형태 필요
 * @property {string | number} [bottom] : px, rem 단위를 붙인 string 형태 필요
 * @property {string | number} [right] : px, rem 단위를 붙인 string 형태 필요
 * @property {number | undefined} [z] : z-index
 * @property {boolean | undefined} [center] : px, rem 단위를 붙인 string 형태 필요
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
  ${center
    ? `
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
  `
    : ""}
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
