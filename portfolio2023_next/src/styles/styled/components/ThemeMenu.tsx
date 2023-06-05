"use client";

import styled from "styled-components";

// style
import { img } from "../preset/img";
import { SvgFill, flex, position, size } from "../preset/mixins";

// util
import { rem } from "@/util/unit";

export const ToggleBtn = styled.button`
  ${({ theme }) => SvgFill(theme.gnbUtilBtn.svg)};
  &.hover {
    background-color: ${({ theme }) => theme.gnbUtilBtn.bg};
    ${({ theme }) => SvgFill(theme.gnbUtilBtn.svgHover)};
  }
  &:active {
    ${({ theme }) => SvgFill(theme.gnbUtilBtn.svgActive)};
  }
`;

export const ToggleIcon = styled.figure`
  svg {
    ${position({ type: "absolute", center: true })}
    opacity:0;
    &.on {
      opacity: 1;
    }
  }
`;

export const ThemeMenuContainer = styled.div`
  width: ${rem(160)};
  transform: ${`translateY(${rem(16)})`};
  background: ${({ theme }) => theme.gnbThemeMenu.container};
`;

export const ThemeListItem = styled.li`
  height: ${rem(56)};
`;

export const ThemeMenuButton = styled.button`
  figure {
    ${size({ width: rem(56) })}
    font-size:0;
    ${flex({})}
    ${({ theme }) => SvgFill(theme.gnbThemeMenu.menu)}
    svg {
      ${img({ width: 24, height: 24 })}
    }
  }
  span {
    font-size: ${rem(16)};
    color: ${({ theme }) => theme.gnbThemeMenu.menu};
    line-height: 1em;
    margin-top: ${rem(-2)};
  }
  &:not(.selected).hover {
    figure {
      ${({ theme }) => SvgFill(theme.gnbThemeMenu.hover)}
    }
    span {
      color: ${({ theme }) => theme.gnbThemeMenu.hover};
    }
  }
  &.selected {
    figure {
      ${({ theme }) => SvgFill(theme.gnbThemeMenu.selected)}
    }
    span {
      color: ${({ theme }) => theme.gnbThemeMenu.selected};
    }
  }
`;
