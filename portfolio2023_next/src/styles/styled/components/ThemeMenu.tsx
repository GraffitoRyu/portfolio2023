"use client";

import styled from "styled-components";

// style
import { img } from "../preset/img";
import { SvgFill, flex, font, position, size } from "../preset/mixins";

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
  ${position({ type: "absolute", top: "100%", left: 0 })}
  ${size({ w: 160 })}
  transform: ${`translateY(${rem(16)})`};
  background: ${({ theme }) => theme.gnbThemeMenu.container};

  &.off {
    display: none;
  }
`;

export const ThemeList = styled.ul`
  ${size({ w: "100%" })}
`;

export const ThemeListItem = styled.li`
  ${size({ w: "100%", h: 56 })}
`;

export const ThemeMenuButton = styled.button`
  ${flex({ std: "flex-start" })}
  ${size({ w: "100%", h: "100%" })}
  figure {
    ${size({ w: 56 })}
    ${flex({})}
    ${({ theme }) => SvgFill(theme.gnbThemeMenu.menu)}
    font-size:0;
    svg {
      ${img({ w: 24, h: 24 })}
    }
  }
  span {
    ${size({ mt: -2 })}
    color: ${({ theme }) => theme.gnbThemeMenu.menu};
    ${font({
      size: 16,
      height: "1em",
      transform: "capitalize",
    })}
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
