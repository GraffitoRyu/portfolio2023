"use client";

import styled, { createGlobalStyle } from "styled-components";

// util
import { rem } from "@/util/unit";

// style
import { img } from "@/styles/styled/preset/img";
import { btnStyle } from "@/styles/styled/preset/buttons";
import { SvgFill, font, maxSize, size } from "@/styles/styled/preset/mixins";

// GNB 공통 스타일
export const GnbCommonStyle = createGlobalStyle`
  a, button {
    pointer-events:auto;
  }
  .util-item {
    position:relative;
    &:not(.theme-item) {
      margin-left: ${rem(32)};
    }
  }
  .util-btn {
    ${btnStyle({ w: 48, h: 48, r: 8 })}
    position:relative;
    figure {
      ${size({ w: 24, h: 24 })}
      font-size:0;
      svg {
        ${img({})}
        ${maxSize({ w: 24, h: 24 })}
      }
    }
  }
`;

export const SitemapLink = styled.button`
  margin-right: ${rem(64)};
  ${font({
    size: 24,
    weight: 500,
  })}
  color: ${({ theme }) => theme.gnbSitemapBtn.basic};
  &:not(.now).hover {
    color: ${({ theme }) => theme.gnbSitemapBtn.hover};
  }
  &.now {
    color: ${({ theme }) => theme.gnbSitemapBtn.selected};
  }
`;

export const ExtBtn = styled.a`
  ${({ theme }) => SvgFill(theme.gnbUtilBtn.svg)};
  &.hover {
    background-color: ${({ theme }) => theme.gnbUtilBtn.bg};
    ${({ theme }) => SvgFill(theme.gnbUtilBtn.svgHover)};
  }
  &:active {
    ${({ theme }) => SvgFill(theme.gnbUtilBtn.svgActive)};
  }
`;
