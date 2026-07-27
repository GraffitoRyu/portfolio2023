"use client";

import { styled } from "styled-components";
import {
  mediaQueryTokens,
  typographyTokens,
  zIndexTokens,
} from "@graffitoryu/ui";

// util
import { rem, widthRatio } from "@/utils/style.util";

// style
import {
  flex,
  font,
  position,
  size,
  transition,
} from "@/styles/styled/preset/mixins";
import { easing } from "@/styles/styled/preset/easing";
import { transTime } from "@/styles/styled/preset/transTime";
import { StyledDefaultBtn } from "@/styles/styled//preset/buttons";

export const StyledPDContainer = styled.article`
  ${size({ w: "100%", h: "100%" })}
  ${position({ type: "fixed", left: 0, bottom: 0, z: zIndexTokens.detail })}
  overflow: hidden;
  background: ${({ theme }) => theme.projectDetails.bg};
  ${transition([
    {
      prop: "transform",
      time: `${transTime.detail.sheetSlide / 1000}s`,
      easing: easing.expo,
    },
  ])}
  transform: translateY(100%);
  &.open {
    transform: translateY(0);
  }
`;

export const StyledPDHeader = styled.header`
  ${position({
    type: "sticky",
    top: 0,
    left: 0,
    z: zIndexTokens.detailHeader,
  })}
  ${size({ w: "100%", h: 0 })}
`;

export const StyledPDHeaderTitleContainer = styled.h3`
  ${flex({ std: "flex-start" })}
  ${size({ mr: "auto" })}
  color: ${({ theme }) => theme.projectDetails.visualTitle};
  ${font({
    size: 32,
    weight: 500,
    height: "1em",
  })}
  @media only screen and ${mediaQueryTokens.min.tablet} {
    ${font({ size: 24 })}
  }
  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${font({ size: 32 })}
  }
  @media only screen and ${mediaQueryTokens.min.wide} {
    ${font({ size: 24 })}
  }
`;

export const StyledPDHeaderPageName = styled.span`
  ${flex({ std: "flex-start" })}
`;

export const StyledPDHeaderProjectName = styled.span`
  opacity: 0;
  letter-spacing: 0;
  transition: opacity 0.24s;
  &:before {
    content: "/";
    font-weight: 500;
    ${size({ m: [0, 16] })}
  }
`;

export const StyledPDLinkContainer = styled.ul`
  ${flex({ std: "flex-start", wrap: "wrap" })}
  ${size({ w: `calc(100% + ${rem(40)})`, m: [0, -20] })}
  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${flex({ std: "flex-end" })}
    ${size({ w: `fit-content`, m: 0 })}
  }
`;

export const StyledPDLinkItem = styled.li`
  ${size({ p: [0, 20], mb: 40 })}
  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${size({ p: 0, m: [0, 24, 0, 0] })}
  }
`;

export const StyledPDLinkBtn = styled(StyledDefaultBtn)``;

export const StyledPDLinkName = styled.span`
  ${size({ mr: 16 })}
  ${font({
    size: 24,
    weight: 500,
    height: "1em",
  })}
  @media only screen and ${mediaQueryTokens.min.tablet} {
    ${font({ size: 24 })}
  }
  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${font({ size: 28 })}
  }
  @media only screen and ${mediaQueryTokens.min.wide} {
    ${font({ size: 16 })}
  }
`;

export const StyledPDSection = styled.section`
  width: 100%;
  position: relative;
  z-index: ${zIndexTokens.floating};
  &:not(.detail-section-visual) {
    background: ${({ theme }) => theme.projectDetails.bg};
  }
`;

export const StyledPDVisualSection = styled(StyledPDSection)`
  ${size({ h: `auto`, pb: 400 })}
  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${size({ pb: 600 })}
  }
`;

export const StyledPDSubVisualSection = styled(StyledPDSection)`
  overflow: hidden;
`;

export const StyledPDExpSection = styled(StyledPDSection)`
  ${size({ w: `100%`, p: [240, 80, 160] })}
  @media only screen and ${mediaQueryTokens.min.tablet} {
    ${size({ p: [240, 60] })}
  }
`;

export const StyledPDMediaSection = styled(StyledPDSection)`
  ${size({ pb: 640 })}
  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${size({ pb: 160 })}
  }
`;

export const StyledPDVisualViewport = styled.div`
  ${flex({ dir: "column", std: "flex-end", cross: "flex-start" })}
  ${size({ w: "100%", h: `var(--wh)`, p: [`var(--header-height)`, 80, 200] })}
  @media only screen and ${mediaQueryTokens.max.tablet} and (orientation:landscape) {
    ${size({ pb: 80 })}
  }
  @media only screen and ${mediaQueryTokens.min.tablet} {
    ${size({ pb: 120 })}
  }
  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${size({ pb: 160 })}
  }
`;

export const StyledPDVisualLower = styled.div`
  ${size({ p: [0, 80] })}
`;

export const StyledPDVisualImageContainer = styled.div`
  pointer-events: none;
  overflow: hidden;
  ${position({
    type: "fixed",
    top: 0,
    left: 0,
    z: zIndexTokens.visualBackground,
  })}
  ${size({ w: "100%", h: `100vh` })}
  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${size({ h: "100vw" })}
  }
`;

export const StyledPDVisualImage = styled.div`
  ${position({ top: 0, left: 0 })}
  ${size({ w: "100%", h: "100%" })}
  img {
    object-fit: cover;
    object-position: bottom;
  }
`;

export const StyledPDVisualImageCover = styled.div`
  ${size({ w: "100%", h: "100%" })}
  ${position({ type: "absolute", top: 0, left: 0 })}
    background-color: ${({ theme }) => theme.projectDetails.bg};
  background: ${({ theme }) => theme.projectDetails.visualBg};
`;

export const StyledPDVisualTitleContainer = styled.div`
  ${size({ w: "100%" })}
`;

export const StyledPDVisualTitle = styled.h4`
  color: ${({ theme }) => theme.projectDetails.visualTitle};
  font-size: 0;
  &.hide span {
    opacity: 0;
    transform: translateY(50%);
  }
`;

export const StyledPDVisualTitleLine = styled.span<{ $index: number }>`
  display: block;
  ${font({
    size: 88,
    height: "1.2em",
    spacing: 0,
    weight: 400,
    family: typographyTokens.family.serifDisplay,
  })}
  transition:color ${transTime.color / 1000}s,
    opacity 1.8s ${easing.quart} ${({ $index }: { $index: number }) =>
      0.16 * $index}s,
    transform 1.6s ${easing.quart} ${({ $index }: { $index: number }) =>
      0.16 * $index}s;
  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${font({ size: 184, height: "1em" })}
  }
`;

export const StyledPDVisualSubtitle = styled.p<{ $index: number }>`
  ${size({ mt: 40 })}
  color: ${({ theme }) => theme.projectDetails.visualSubtitle};
  ${font({
    size: 32,
    weight: 400,
    height: "1.6em",
  })}

  transition:color ${transTime.color / 1000}s;

  &.init-hide {
    transition:
      color ${transTime.color / 1000}s,
      opacity 1.6s ${easing.quart}
        ${({ $index }: { $index: number }) => 0.2 * $index}s,
      transform 1.6s ${easing.quart}
        ${({ $index }: { $index: number }) => 0.2 * $index}s;
  }

  &.hide {
    opacity: 0;
    transform: translateY(100%);
  }

  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${size({ mt: 80 })}
    ${font({ height: "1em" })}
  }
`;

export const StyledPDInfoItem = styled.dl<Partial<StyleOptionDetailInfoItem>>`
  ${size({ w: "100%", mb: 80, p: [0, 20] })}

  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${size({ w: `${widthRatio(12, 2)}%` })}
  }
`;

export const StyledPDSummaryItem = styled(StyledPDInfoItem)`
  &.init-hide {
    transition: opacity 0.6s linear
      ${({ $itemIndex, $delayIndex }) =>
        typeof $delayIndex === "number" && typeof $itemIndex === "number"
          ? `${
              Math.floor($delayIndex * 2) / 10 + Math.floor($itemIndex * 2) / 10
            }s`
          : `0.6s`};
  }

  &.hide {
    opacity: 0;
  }

  @media only screen and ${mediaQueryTokens.max.tablet} and (orientation: landscape) {
    ${size({ w: `${widthRatio(12, 6)}%` })}
  }
  @media only screen and ${mediaQueryTokens.min.tablet} and ${mediaQueryTokens.max.desktop} {
    ${size({ w: `${widthRatio(12, 6)}%`, mb: 48 })}
  }
`;

export const StyledPDStackItem = styled(StyledPDInfoItem)`
  ${flex({ start: true, wrap: "wrap" })}
  &.details-stack-title {
    ${size({ w: `100%` })}
  }
  @media only screen and ${mediaQueryTokens.min.tablet} {
    display: block;
    ${size({ w: `${widthRatio(12, 3)}%` })}
  }
  @media only screen and ${mediaQueryTokens.min.wide} {
    ${size({ w: `${widthRatio(12, 2)}%` })}
    &.details-stack-title {
      ${size({ w: `${widthRatio(12, 3)}%` })}
    }
  }
`;

export const StyledPDInfoTitle = styled.dt`
  ${size({ w: "fit-content", mb: 16 })}
  color:${({ theme }) => theme.projectDetails.infoTitle};
  ${font({
    size: 32,
    weight: 500,
    height: "1em",
    family: typographyTokens.family.serifKorean,
    spacing: 0,
  })}

  @media only screen and ${mediaQueryTokens.max.tablet} and (orientation: landscape) {
    ${font({ size: 24 })}
  }

  @media only screen and ${mediaQueryTokens.min.tablet} {
    ${size({ mb: 16 })}
    ${font({ size: 20 })}
  }

  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${size({ mb: 32 })}
    ${font({ size: 32 })}
  }

  @media only screen and ${mediaQueryTokens.min.wide} {
    ${size({ mb: 24 })}
    ${font({ size: 24 })}
  }
`;

export const StyledPDStackTitle = styled(StyledPDInfoTitle)`
  ${size({ w: "100%" })}
`;

export const StyledPDSummaryTitle = styled(StyledPDInfoTitle)``;

export const StyledPDInfoContents = styled.dd`
  color: ${({ theme }) => theme.projectDetails.infoDesc};
  ${font({
    size: 32,
    height: "2em",
    weight: 500,
  })}

  @media only screen and ${mediaQueryTokens.max.tablet} and (orientation: landscape) {
    ${font({ size: 24 })}
  }

  @media only screen and ${mediaQueryTokens.min.tablet} {
    ${font({ size: 20 })}
  }

  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${font({ size: 32 })}
  }

  @media only screen and ${mediaQueryTokens.min.wide} {
    ${font({ size: 24 })}
  }
`;

export const StyledPDStackContents = styled(StyledPDInfoContents)`
  ${size({ mr: 40 })}
`;

export const StyledPDSummaryContents = styled(StyledPDInfoContents)``;

export const StyledPDInfoContainer = styled.div`
  ${size({ w: `calc(100% + ${rem(40)})`, m: [0, -20] })}
`;

export const StyledPDSummaryContainer = styled(StyledPDInfoContainer)`
  ${flex({ start: true, wrap: "wrap" })}
  ${size({ mb: 40 })}

  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${size({ mt: 120, mb: 0 })}
  }
`;

export const StyledPDStacksContainer = styled(StyledPDInfoContainer)`
  ${flex({ start: true, wrap: "wrap" })}
  ${size({ mt: 320 })}
  @media only screen and ${mediaQueryTokens.min.desktop} {
  }
`;

export const StyledPDExpContainer = styled.div`
  ${size({ w: "100%" })}
  @media only screen and ${mediaQueryTokens.min.tablet} {
    ${size({
      w: `${widthRatio(12, 8)}%`,
      p: [0, 20],
    })}
  }
  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${size({
      w: `${widthRatio(12, 6)}%`,
      m: [0, `${widthRatio(12, 3)}%`],
    })}
  }
  @media only screen and ${mediaQueryTokens.min.wide} {
    ${size({
      w: `${widthRatio(12, 5)}%`,
      m: [0, `${widthRatio(12, 2)}%`, 0, `${widthRatio(12, 5)}%`],
    })}
  }
`;

export const StyledPDExpTitle = styled.h5`
  ${size({ mb: 160 })}
  color: ${({ theme }) => theme.projectDetails.expTitle};
  span {
    ${font({
      size: 96,
      weight: 400,
      spacing: `0.02em`,
      height: "1em",
      family: typographyTokens.family.serifDisplay,
      style: "italic",
    })}
  }
  opacity: 0;
  @media only screen and ${mediaQueryTokens.min.desktop} {
    span {
      ${font({ size: 120 })}
    }
  }
`;

export const StyledPDExpList = styled.ul`
  ${size({ w: "100%" })}
`;

export const StyledPDExpDesc = styled.li`
  ${flex({ start: true })}
  opacity: 0;
  color: ${({ theme }) => theme.projectDetails.expDesc};
  ${font({
    size: 32,
    height: "2em",
    weight: 400,
  })}
  &:before {
    content: "\\00B7";
    ${flex({ start: [true, false] })}
    ${size({ w: 20, h: 48 })}
    line-height:1em;
  }
  span {
    flex: 1;
  }

  @media only screen and ${mediaQueryTokens.min.tablet} {
    ${font({ size: 24 })}
  }

  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${font({ size: 32 })}
  }

  @media only screen and ${mediaQueryTokens.min.wide} {
    ${font({ size: 24 })}
  }
`;

export const StyledPDSubVisual = styled.figure`
  ${size({ w: "100%" })}
  img {
    object-fit: cover;
    ${position({ type: `static !important` })}
  }
`;

export const StyledPDMediaItem = styled.div`
  ${size({ w: "100%", p: [0, 80], mt: 400 })}
  &:first-child {
    margin-top: 0;
  }
`;

export const StyledPDMediaFigure = styled.figure`
  ${size({ w: "100%", r: 40 })}
  position:relative;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  img {
    ${position({ type: `static !important` })}
  }
  .iframe-ratio-wrapper {
    position: relative;
    height: 0;
    padding-top: 56.25%;
    iframe {
      ${position({ type: "absolute", top: 0, left: 0 })};
      ${size({ w: "100%", h: "100%" })}
    }
  }
`;
