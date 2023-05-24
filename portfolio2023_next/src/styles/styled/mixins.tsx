import { css } from "styled-components";

// util
import { getUnit } from "@/util/unit";

type SizeTypes = {
  width?: number | string;
  height?: number | string;
};

export const size = ({ width, height }: SizeTypes) => css`
  width: ${typeof width !== "undefined" ? getUnit(width) : "auto"};
  height: ${typeof height !== "undefined" ? getUnit(height) : "auto"};
`;
export const maxSize = ({ width, height }: SizeTypes) => css`
  max-width: ${typeof width !== "undefined" ? getUnit(width) : "auto"};
  max-height: ${typeof height !== "undefined" ? getUnit(height) : "auto"};
`;

type FlexTypes = {
  dir?: string | undefined;
  std?: string | undefined;
  cross?: string | undefined;
};
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
  center?: boolean | undefined;
};
export const position = ({
  type,
  top,
  left,
  bottom,
  right,
  center,
}: PositionTypes) => css`
  position: ${type ?? "absolute"};
  ${top ? `top:${top}` : ""};
  ${left ? `left:${left}` : ""};
  ${bottom ? `bottom:${bottom}` : ""};
  ${right ? `right:${right}` : ""};
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
