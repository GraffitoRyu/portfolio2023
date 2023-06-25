"use client";

import { styled } from "styled-components";
import { flex, font, position, size } from "../preset/mixins";
import { rem } from "@/util/unit";
import { transTime } from "../preset/transTime";

export const TooltipContainer = styled.div`
  position: relative;
  ${size({ w: "fit-content", h: "fit-content" })}
`;

export const TooltipPositionBox = styled.div<{ $pos: string[] }>`
  ${position({ type: "absolute", z: 100 })}
  ${({ $pos }: { $pos: string[] }) => {
    let direction = "";
    let centerPos = "";
    if ($pos[0] == "top") direction += `bottom:calc(100% + ${rem(16)});`;
    else if ($pos[0] == "bottom") direction += `top:calc(100% + ${rem(16)});`;
    else if ($pos[0] == "center") {
      direction += `top:50%;`;
      centerPos += `translateY(-50%)`;
    }

    if ($pos[1] == "left") direction += `right:calc(100% + ${rem(16)});`;
    else if ($pos[1] == "right") direction += `left:calc(100% + ${rem(16)});`;
    else if ($pos[1] == "center") {
      direction += `left:50%;`;
      centerPos += `translateX(-50%)`;
    }
    const transform = centerPos !== "" ? `transform:${centerPos};` : "";

    return direction + transform;
  }}

  display:none;
  &.active {
    display: block;
  }
`;

export const TooltipBox = styled.div<{ $section: string; $pos: string[] }>`
  ${size({ w: "fit-content", h: "fit-content", r: 8, p: [0, 16] })}
  max-width: ${rem(160)};
  min-width: ${rem(80)};
  min-height: ${rem(32)};
  background-color: ${({ $section, theme }) => theme[$section].tooltipBox};

  opacity: 0;
  ${({ $pos }) => {
    if ($pos[0] === "center") return `transform: translateX(50%)`;
    else if ($pos[1] === "center") return `transform: translateY(50%)`;
  }};
  transition: opacity ${transTime.tooltip / 1000}s,
    transform ${transTime.tooltip / 1000}s;

  &.show {
    opacity: 1;
    transform: translate(0, 0);
  }

  &:after {
    content: "";
    display: block;
    ${({ $pos }) =>
      position({ type: "absolute", [$pos[0]]: "100%", center: "x" })}
    ${size({ w: 0, h: 0 })}
    border-left: ${rem(6)} solid transparent;
    border-right: ${rem(6)} solid transparent;
    ${({ $section, $pos, theme }) =>
      `border-${$pos[0]}:${rem(8)} solid ${theme[$section].tooltipBox};`}
  }
`;

export const TooltipTitle = styled.h6<{ $section: string }>`
  ${size({ w: "fit-content", mb: 16 })}
  color:${({ $section, theme }) => theme[$section].tooltipTitle};
  ${font({
    size: 24,
    weight: 500,
    height: "1em",
  })}
`;

export const TooltipContents = styled.p<{ $section: string }>`
  ${flex({ std: "flex-start" })}
  min-height:${rem(32)};
  color: ${({ $section, theme }) => theme[$section].tooltipText};
  ${font({
    size: 16,
    weight: 400,
    height: "1.6em",
    whitespace: "nowrap",
  })}
`;
