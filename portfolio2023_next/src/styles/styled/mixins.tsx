import { css } from "styled-components";

type FlexTypes = {
  dir?: string;
  std?: string;
  cross?: string;
};
export const flex = ({ dir, std, cross }: FlexTypes) => css`
  display: flex;
  justify-content: ${std ?? "center"};
  align-items: ${cross ?? "center"};
  ${dir ? `flex-direction: ${dir};` : ""}
`;

type PositionTypes = {
  type?: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  center?: boolean;
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
