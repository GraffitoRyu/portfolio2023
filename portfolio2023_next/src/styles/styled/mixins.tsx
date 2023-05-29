import { css } from "styled-components";

// util
import { getUnit } from "@/util/unit";

type SizeTypes = {
  width?: number | string;
  height?: number | string;
};
/**
 * @property {number | string} [width] : auto(default), string(%, px, rem 등 단위가 있는 것으로 간주), number는 rem 변환
 * @property {number | string} [height] : auto(default), string(%, px, rem 등 단위가 있는 것으로 간주), number는 rem 변환
 */
export const size = ({ width, height }: SizeTypes) => css`
  width: ${typeof width !== "undefined" ? getUnit(width) : "auto"};
  height: ${typeof height !== "undefined" ? getUnit(height) : "auto"};
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
};
/**
 * @property {string | undefined} [dir] : row, column
 * @property {string | undefined} [std] : justify-content (기준 축 정렬)
 * @property {string | undefined} [cross] : align-items (교차 축 정렬)
 */
export const flex = ({ dir, std, cross }: FlexTypes) => css`
  display: flex;
  justify-content: ${std ?? "center"};
  align-items: ${cross ?? "center"};
  ${dir ? `flex-direction: ${dir};` : ""}
`;

type PositionTypes = {
  type?: string | undefined;
  top?: string | undefined;
  left?: string | undefined;
  bottom?: string | undefined;
  right?: string | undefined;
  z?: number | undefined;
  center?: boolean | undefined;
};
/**
 * @property {string | undefined} [type] : absolute(default), relative, fixed, sticky, static, ...
 * @property {string | undefined} [top] : px, rem 단위를 붙인 string 형태 필요
 * @property {string | undefined} [left] : px, rem 단위를 붙인 string 형태 필요
 * @property {string | undefined} [bottom] : px, rem 단위를 붙인 string 형태 필요
 * @property {string | undefined} [right] : px, rem 단위를 붙인 string 형태 필요
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
  ${top ? `top:${top};` : ""};
  ${left ? `left:${left};` : ""};
  ${bottom ? `bottom:${bottom};` : ""};
  ${right ? `right:${right};` : ""};
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
