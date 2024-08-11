"use client";

import styled from "styled-components";

// style
import { img } from "../preset/img";
import { svgFill, flex, font, position, size } from "../preset/mixins";

// util
import { rem } from "@/utils/style.util";

export const StyledToggleBtn = styled.button`
  ${({ theme }) => svgFill(theme.gnbUtilBtn.svg)};
  &.hover {
    background-color: ${({ theme }) => theme.gnbUtilBtn.bg};
    ${({ theme }) => svgFill(theme.gnbUtilBtn.svgHover)};
  }
  &:active {
    ${({ theme }) => svgFill(theme.gnbUtilBtn.svgActive)};
  }
`;

export const StyledToggleIcon = styled.figure`
  svg {
    ${position({ type: "absolute", center: true })}
    opacity:0;
    &.on {
      opacity: 1;
    }
  }
`;

export const StyledThemeMenuContainer = styled.div`
  ${position({ type: "absolute", top: "100%", left: 0 })}
  ${size({ w: 160 })}
  transform: ${`translateY(${rem(16)})`};
  background: ${({ theme }) => theme.gnbThemeMenu.container};

  &.off {
    display: none;
  }
`;

export const StyledThemeList = styled.ul`
  ${size({ w: "100%" })}
`;

export const StyledThemeListItem = styled.li`
  ${size({ w: "100%", h: 56 })}
`;

export const StyledThemeMenuButton = styled.button`
  ${flex({ std: "flex-start" })}
  ${size({ w: "100%", h: "100%" })}
  figure {
    ${size({ w: 56 })}
    ${flex({})}
    ${({ theme }) => svgFill(theme.gnbThemeMenu.menu)}
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
      ${({ theme }) => svgFill(theme.gnbThemeMenu.hover)}
    }
    span {
      color: ${({ theme }) => theme.gnbThemeMenu.hover};
    }
  }
  &.selected {
    figure {
      ${({ theme }) => svgFill(theme.gnbThemeMenu.selected)}
    }
    span {
      color: ${({ theme }) => theme.gnbThemeMenu.selected};
    }
  }
`;
