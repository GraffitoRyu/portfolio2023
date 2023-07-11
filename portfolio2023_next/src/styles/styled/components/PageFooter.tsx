"use client";

import styled, { css } from "styled-components";

// style components
import { PageTitle } from "./PageTitle";

// style
import {
  SvgFill,
  flex,
  font,
  position,
  size,
} from "@/styles/styled/preset/mixins";
import { img } from "@/styles/styled/preset/img";
import { transTime } from "../preset/transTime";

// util
import { rem, widthRatio } from "@/util/unit";

export const FooterContainer = styled.footer<{ $wh: number }>`
  ${position({ type: "relative", z: 600 })}
  ${({ $wh }) =>
    size({
      w: "100%",
      h: $wh !== 0 ? `${$wh}px` : "100vh",
      p: 80,
    })}
  background-color: ${({ theme }) => theme.footer.bg};
  overflow: hidden;
  @media only screen and (min-width: 1024px) {
    ${size({ p: [120, 80] })}
  }
  @media only screen and (min-width: 1280px) {
    ${size({ p: [160, 80] })}
  }
  @media only screen and (min-width: 1680px) {
    ${size({ p: [120, 80] })}
  }
`;

export const FooterWrap = styled.div`
  ${flex({ dir: "column", std: "space-between", cross: "start" })}
  ${size({ w: "100%", h: "100%" })}
`;

export const FooterHeader = styled.header`
  ${size({ mb: 80 })}
  @media only screen and (min-width: 1024px) {
    ${size({ mb: 160 })}
  }
`;

export const FooterTitle = styled.h2`
  ${flex({ dir: "column", cross: "start" })}
  font-size:0;
`;

export const FooterTitleLine = styled(PageTitle)`
  font-size: ${rem(160)};
  &.stroke-title {
    -webkit-text-stroke: ${rem(2)} ${({ theme }) => theme.footer.titleBorder};
  }
  &.filled-title {
    color: ${({ theme }) => theme.footer.titleFill};
  }
  @media only screen and (min-width: 560px) {
    font-size: 80px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(180)};
  }
  @media only screen and (min-width: 1920px) {
    font-size: ${rem(180)};
  }
`;

export const FooterLowerContainer = styled.div`
  ${size({ w: "100%", m: 0 })}
  @media only screen and (min-width: 1024px) {
    ${flex({
      dir: "row-reverse",
      std: "flex-end",
      cross: "flex-start",
      wrap: "wrap",
    })}
    ${size({ m: [0, -20] })}
  }
`;

export const PortfolioSummaryContainer = styled.div`
  ${size({ w: "100%", mt: 160 })}
  max-width:300px;
  @media only screen and (min-width: 580px) {
    ${size({ mt: 80, pr: "50%" })}
    max-width:100%;
  }
  @media only screen and (min-width: 768px) {
    ${size({ mt: 80, pr: "33.3333%" })}
  }
  @media only screen and (min-width: 1024px) {
    ${size({ mt: 40, p: [0, `calc(66.6667% + ${rem(20)})`, 0, 20] })}
  }
  @media only screen and (min-width: 1280px) {
    ${size({ w: `${widthRatio(12, 4)}%`, mt: 0, p: [0, 20] })}
  }
`;

const FooterDescFont = css`
  ${font({
    size: 24,
    weight: 400,
    height: "1em",
  })}
  @media only screen and (min-width: 580px) {
    font-size: ${rem(18)};
  }
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(24)};
  }
  @media only screen and (min-width: 1280px) {
    font-size: ${rem(20)};
  }
  @media only screen and (min-width: 1680px) {
    font-size: ${rem(16)};
  }
`;

export const PortfolioDescription = styled.p`
  color: ${({ theme }) => theme.footer.summary};
  ${FooterDescFont}
  line-height: 1.5em;
  @media only screen and (min-width: 1280px) {
    max-width: ${rem(440)};
  }
  @media only screen and (min-width: 1680px) {
    max-width: ${rem(340)};
  }
`;

export const PortfolioCopyright = styled.p`
  ${size({ mt: 24 })}
  color: ${({ theme }) => theme.footer.copyright};
  ${FooterDescFont}
  line-height: 1em;
`;

export const FooterMenuContainer = styled.div`
  @media only screen and (min-width: 1024px) {
    ${flex({ start: true })}
  }
`;

export const FooterMenuColumn = styled.div`
  width: 100%;
  @media only screen and (min-width: 1024px) {
    ${size({ w: "41.6667%", p: [0, 20] })}
    &.none-page {
      width: 25%;
    }
  }
  @media only screen and (min-width: 1280px) {
    &.none-page {
      ${size({ w: `${widthRatio(12, 3)}%` })}
    }
    &.link-page {
      ${size({ w: `${widthRatio(12, 5)}%` })}
    }
  }
`;

export const FooterMenuItem = styled.dl`
  ${size({ w: "100%", mb: 40 })}
  @media only screen and (min-width: 560px) {
    ${size({ mb: 24 })}
  }
  @media only screen and (min-width: 768px) {
    ${size({ mb: 24 })}
  }
  @media only screen and (min-width: 1024px) {
    ${size({ h: 200, mb: 0 })}
  }
  @media only screen and (min-width: 1280px) {
    height: ${rem(200)};
  }
`;

export const FooterMenuTitle = styled.dt`
  ${size({ w: "fit-content", mb: 16 })}
  color: ${({ theme }) => theme.footer.linkCategory};
  @media only screen and (min-width: 560px) {
    ${size({ mb: `10px` })}
  }
  @media only screen and (min-width: 1024px) {
    ${size({ mb: 24 })}
  }
  ${FooterDescFont}
  font-weight: 700;
`;

export const FooterMenuContents = styled.dd`
  ${flex({ std: "flex-start", wrap: "wrap" })}
  @media only screen and (min-width: 1024px) {
    &.contact-menu {
      display: block;
    }
  }
`;

export const FooterLinkItem = styled.div`
  ${flex({ std: "flex-start", wrap: "wrap" })}
  ${size({ w: "fit-content", m: [0, 40, 16, 0] })}
  &:last-child {
    margin-right: 0;
  }
`;
export const FooterLinkIcon = styled.figure`
  ${size({ w: 32, h: 32, mt: 4 })}
  svg {
    ${img({})}
  }
  rect,
  path,
  circle {
    transition: fill ${transTime.color / 1000}s;
  }
  @media only screen and (min-width: 640px) {
    ${size({ w: `14px`, h: `14px` })};
  }
  @media only screen and (min-width: 1024px) {
    ${size({ w: 28, h: 28 })};
  }
  @media only screen and (min-width: 1280px) {
    ${size({ w: 20, h: 20 })};
  }
`;

export const FooterLinkBtn = styled.a`
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
    ${({ theme }) => SvgFill(theme.footer.linkIcon)}
  }

  &.hover {
    span {
      color: ${({ theme }) => theme.footer.linkHover};
    }
    figure {
      ${({ theme }) => SvgFill(theme.footer.linkHover)}
    }
  }
  @media only screen and (min-width: 640px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(32)};
  }
  @media only screen and (min-width: 1280px) {
    font-size: ${rem(24)};
  }
`;

export const FooterLinkCopyBtn = styled.button`
  position: relative;
  ${size({ ml: 8 })}
  ${({ theme }) => SvgFill(theme.footer.linkIcon)}
  &.hover {
    ${({ theme }) => SvgFill(theme.footer.linkHover)}
  }
`;
