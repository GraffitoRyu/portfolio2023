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
