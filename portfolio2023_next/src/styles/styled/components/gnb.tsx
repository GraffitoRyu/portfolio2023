"use client";

import Link from "next/link";
import { createGlobalStyle, styled } from "styled-components";

// util
import { rem } from "@/util/unit";

// style
import { img } from "@/styles/styled/preset/img";
import { btnStyle } from "@/styles/styled/preset/buttons";
import { SvgFill, maxSize, size } from "@/styles/styled/preset/mixins";

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
    ${btnStyle({ width: 48, height: 48, radius: 8 })}
    position:relative;
    figure {
      ${size({ width: 24, height: 24 })}
      font-size:0;
      svg {
        ${img({})}
        ${maxSize({ width: 24, height: 24 })}
      }
    }
  }
`;

export const SitemapLink = styled(Link)`
  margin-right: ${rem(64)};
  font-size: ${rem(24)};
  font-weight: 500;
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

export const Tooltip = styled.div`
  padding: 0 ${rem(16)};
  border-radius: ${rem(16)};
  height: ${rem(32)};
  background: #ccc;
  left: 50%;
  transform: translate(-50%, 100%);
  opacity: 0;
  transition: transform 0.4s, opacity 0.4s;
  span {
    font-size: ${rem(16)};
    color: #3a3a3a;
    font-weight: 500;
    letter-spacing: 0;
  }
  &.hover {
    transform: ${`translate(-50%, ${rem(10)})`};
    opacity: 1;
  }
`;
