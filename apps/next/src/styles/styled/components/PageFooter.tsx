"use client";

import styled, { css } from "styled-components";
import { media, zIndex } from "@graffitoryu/ui";

// style components
import { StyledPageTitle } from "./PageTitle";

// style
import {
  svgFill,
  flex,
  font,
  maxSize,
  position,
  size,
} from "@/styles/styled/preset/mixins";
import { img } from "@/styles/styled/preset/img";
import { transTime } from "../preset/transTime";

// util
import { rem, widthRatio } from "@/utils/style.util";

export const StyledFooterContainer = styled.footer`
  ${position({ type: "relative", z: zIndex.footer })}
  ${size({ w: "100%", h: `100vh`, p: 80 })}
  background-color: ${({ theme }) => theme.footer.bg};
  overflow: hidden;
  @media only screen and ${media.min.desktop} {
    ${size({ p: [120, 80] })}
  }
  @media only screen and ${media.min.wide} {
    ${size({ p: [160, 80] })}
  }
  @media only screen and ${media.min.extraLarge} {
    ${size({ p: [120, 80] })}
  }
`;

export const StyledFooterWrap = styled.div`
  ${flex({ dir: "column", std: "space-between", cross: "start" })}
  ${size({ w: "100%", h: "100%" })}
`;

export const StyledFooterHeader = styled.header`
  ${size({ mb: 80 })}
  @media only screen and ${media.min.desktop} {
    ${size({ mb: 160 })}
  }
`;

export const StyledFooterTitle = styled.h2`
  ${flex({ dir: "column", cross: "start" })}
  font-size:0;
`;

export const StyledFooterTitleLine = styled(StyledPageTitle)`
  ${font({ size: 160 })}
  color: ${({ theme }) => theme.footer.titleFill};
  &.stroke-title {
  }
  &.filled-title {
  }
  @media only screen and ${media.min.compact} {
    ${font({ size: `80px` })}
  }
  @media only screen and ${media.min.desktop} {
    ${font({ size: 180 })}
  }
`;

export const StyledFooterLowerContainer = styled.div`
  ${size({ w: "100%", m: 0 })}
  @media only screen and ${media.min.desktop} {
    ${flex({
      dir: "row-reverse",
      std: "flex-end",
      cross: "flex-start",
      wrap: "wrap",
    })}
    ${size({ m: [0, -20] })}
  }
`;

export const StyledPortfolioSummaryContainer = styled.div`
  ${size({ w: "100%", mt: 160 })}
  max-width:300px;
  @media only screen and ${media.min.fluidRoot} {
    ${size({ mt: 80, pr: "50%" })}
    max-width:100%;
  }
  @media only screen and ${media.min.tablet} {
    ${size({ mt: 80, pr: "33.3333%" })}
  }
  @media only screen and ${media.min.desktop} {
    ${size({ mt: 40, p: [0, `calc(66.6667% + ${rem(20)})`, 0, 20] })}
  }
  @media only screen and ${media.min.wide} {
    ${size({ w: `${widthRatio(12, 4)}%`, mt: 0, p: [0, 20] })}
  }
`;

const FooterDescFont = css`
  ${font({
    size: 24,
    weight: 400,
    height: "1em",
  })}
  @media only screen and ${media.min.fluidRoot} {
    ${font({ size: 18 })}
  }
  @media only screen and ${media.min.desktop} {
    ${font({ size: 24 })}
  }
  @media only screen and ${media.min.wide} {
    ${font({ size: 20 })}
  }
  @media only screen and ${media.min.extraLarge} {
    ${font({ size: 16 })}
  }
`;

export const StyledPortfolioDescription = styled.p`
  color: ${({ theme }) => theme.footer.summary};
  ${FooterDescFont}
  line-height: 1.5em;
  @media only screen and ${media.min.wide} {
    ${maxSize({ w: 440 })}
  }
  @media only screen and ${media.min.extraLarge} {
    ${maxSize({ w: 340 })}
  }
`;

export const StyledPortfolioCopyright = styled.p`
  ${size({ mt: 24 })}
  color: ${({ theme }) => theme.footer.copyright};
  ${FooterDescFont}
  line-height: 1em;
`;

export const StyledFooterMenuContainer = styled.div`
  @media only screen and ${media.min.desktop} {
    ${flex({ start: true })}
  }
`;

export const StyledFooterMenuColumn = styled.div`
  width: 100%;
  @media only screen and ${media.min.desktop} {
    ${size({ w: "41.6667%", p: [0, 20] })}
    &.none-page {
      width: 25%;
    }
  }
  @media only screen and ${media.min.wide} {
    &.none-page {
      ${size({ w: `${widthRatio(12, 3)}%` })}
    }
    &.link-page {
      ${size({ w: `${widthRatio(12, 5)}%` })}
    }
  }
`;

export const StyledFooterMenuItem = styled.dl`
  ${size({ w: "100%", mb: 40 })}
  @media only screen and ${media.min.compact} {
    ${size({ mb: 24 })}
  }
  @media only screen and ${media.min.tablet} {
    ${size({ mb: 24 })}
  }
  @media only screen and ${media.min.desktop} {
    ${size({ h: 200, mb: 0 })}
  }
  @media only screen and ${media.min.wide} {
    ${size({ h: 200 })}
  }
`;

export const StyledFooterMenuTitle = styled.dt`
  ${size({ w: "fit-content", mb: 16 })}
  color: ${({ theme }) => theme.footer.linkCategory};
  @media only screen and ${media.min.compact} {
    ${size({ mb: `10px` })}
  }
  @media only screen and ${media.min.desktop} {
    ${size({ mb: 24 })}
  }
  ${FooterDescFont}
  font-weight: 700;
`;

export const StyledFooterMenuContents = styled.dd`
  ${flex({ std: "flex-start", wrap: "wrap" })}
  @media only screen and ${media.min.desktop} {
    &.contact-menu {
      display: block;
    }
  }
`;

export const StyledFooterLinkItem = styled.div`
  ${flex({ std: "flex-start", wrap: "wrap" })}
  ${size({ w: "fit-content", m: [0, 40, 16, 0] })}
  &:last-child {
    margin-right: 0;
  }
`;
export const StyledFooterLinkIcon = styled.figure`
  ${size({ w: 32, h: 32, mt: 4 })}
  svg {
    ${img({})}
  }
  rect,
  path,
  circle {
    transition: fill ${transTime.color / 1000}s;
  }
  @media only screen and ${media.min.grid} {
    ${size({ w: `14px`, h: `14px` })};
  }
  @media only screen and ${media.min.desktop} {
    ${size({ w: 28, h: 28 })};
  }
  @media only screen and ${media.min.wide} {
    ${size({ w: 20, h: 20 })};
  }
`;

export const StyledFooterLinkBtn = styled.a`
  ${flex({ std: "flex-start" })}

  span {
    color: ${({ theme }) => theme.footer.link};
    transition: color ${transTime.color / 1000}s;
  }

  ${font({
    size: 32,
    weight: 400,
    height: "1em",
  })}

  figure {
    ${size({ ml: 8 })}
    ${({ theme }) => svgFill(theme.footer.linkIcon)}
  }

  &.hover {
    span {
      color: ${({ theme }) => theme.footer.linkHover};
    }
    figure {
      ${({ theme }) => svgFill(theme.footer.linkHover)}
    }
  }
  @media only screen and ${media.min.grid} {
    ${font({ size: `14px` })}
  }
  @media only screen and ${media.min.desktop} {
    ${font({ size: 32 })}
  }
  @media only screen and ${media.min.wide} {
    ${font({ size: 24 })}
  }
`;

export const StyledFooterLinkCopyBtn = styled.button`
  position: relative;
  ${size({ ml: 8 })}
  ${({ theme }) => svgFill(theme.footer.linkIcon)}
  &.hover {
    ${({ theme }) => svgFill(theme.footer.linkHover)}
  }
`;
