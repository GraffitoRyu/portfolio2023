"use client";

import { styled } from "styled-components";

// util
import { rem, widthRatio } from "@/util/unit";

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
import { CommonBtn } from "@/styles/styled//preset/buttons";

export const PDContainer = styled.article`
  ${size({ w: "100%", h: "100%" })}
  ${position({ type: "fixed", left: 0, bottom: 0, z: 2000 })}
  overflow: hidden auto;
  &::-webkit-scrollbar {
    width: 0;
  }
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

export const PDHeader = styled.header`
  ${position({ type: "sticky", top: 0, left: 0, z: 1000 })}
  width:100%;
  height: 0;
`;

export const PDHeaderTitleContainer = styled.h3`
  ${flex({ std: "flex-start" })}
  margin-right: auto;
  color: ${({ theme }) => theme.projectDetails.visualTitle};
  ${font({
    size: 32,
    weight: 500,
    height: "1em",
  })}
  @media only screen and (min-width:768px) {
    ${font({ size: 24 })}
  }
  @media only screen and (min-width: 1024px) {
    ${font({ size: 32 })}
  }
  @media only screen and (min-width: 1280px) {
    ${font({ size: 24 })}
  }
`;

export const PDHeaderPageName = styled.span`
  ${flex({ std: "flex-start" })}
`;

export const PDHeaderProjectName = styled.span`
  opacity: 0;
  letter-spacing: 0;
  transition: opacity 0.24s;
  &:before {
    content: "/";
    font-weight: 500;
    margin: 0 ${rem(16)};
  }
`;

export const PDLinkContainer = styled.ul`
  ${flex({ std: "flex-start", wrap: "wrap" })}
  ${size({ w: `calc(100% + ${rem(40)})`, m: [0, -20] })}
  @media only screen and (min-width:1024px) {
    ${flex({ std: "flex-end" })}
    ${size({ w: `fit-content`, m: 0 })}
  }
`;

export const PDLinkItem = styled.li`
  ${size({ p: [0, 20], mb: 40 })}
  @media only screen and (min-width:1024px) {
    ${size({ p: 0, m: [0, 24, 0, 0] })}
  }
`;

export const PDLinkBtn = styled(CommonBtn)``;

export const PDLinkName = styled.span`
  ${size({ mr: 16 })}
  ${font({
    size: 24,
    weight: 500,
    height: "1em",
  })}
  @media only screen and (min-width:768px) {
    ${font({ size: 24 })}
  }
  @media only screen and (min-width: 1024px) {
    ${font({ size: 28 })}
  }
  @media only screen and (min-width: 1280px) {
    ${font({ size: 16 })}
  }
`;

export const PDSection = styled.section<{ $wh?: number }>`
  width: 100%;
  position: relative;
  z-index: 100;
  &:not(.detail-section-visual) {
    background: ${({ theme }) => theme.projectDetails.bg};
  }
`;

export const PDVisualSection = styled(PDSection)`
  ${({ $wh }) =>
    size({
      h: $wh === 0 ? "100vh" : `${$wh}px`,
    })}
  @media only screen and (min-width:1024px) {
    ${size({ h: "auto", pb: 600 })}
  }
`;

export const PDSubVisualSection = styled(PDSection)`
  overflow: hidden;
`;

export const PDExpSection = styled(PDSection)`
  ${({ $wh }) =>
    size({ w: `100%`, h: $wh === 0 ? "100vh" : `${$wh}px`, p: [160, 80] })}
  @media only screen and (min-width:768px) {
    ${size({ p: [240, 60] })}
  }
`;

export const PDVisualViewport = styled.div<{ $wh: number; $hdHeight: number }>`
  ${flex({ dir: "column", std: "flex-end", cross: "flex-start" })}
  ${({ $wh, $hdHeight }) =>
    size({
      w: "100%",
      h: $wh !== 0 ? `${$wh}px` : `100vh`,
      p: [$hdHeight !== 0 ? `${$hdHeight}px` : 240, 80, 200],
    })}
  @media only screen and (max-width:768px) and (orientation:landscape) {
    ${size({ pb: 80 })}
  }
  @media only screen and (min-width: 768px) {
    ${size({ pb: 120 })}
  }
  @media only screen and (min-width: 1024px) {
    ${size({ pb: 160 })}
  }
`;

export const PDVisualLower = styled.div`
  ${size({ p: [0, 80] })}
`;

export const PDVisualImageContainer = styled.div<{ $wh: number }>`
  ${position({ type: "fixed", top: 0, left: 0, z: -100 })}
  ${({ $wh }) => size({ w: "100%", h: $wh === 0 ? "100vh" : `${$wh}px` })}
  @media only screen and (min-width:1024px) {
    ${size({ h: "100vw" })}
  }
`;

export const PDVisualImage = styled.div`
  ${position({ top: 0, left: 0 })}
  ${size({ w: "100%", h: "100%" })}
  img {
    object-fit: cover;
    object-position: bottom;
  }
`;

export const PDVisualImageCover = styled.div`
  ${size({ w: "100%", h: "100%" })}
  ${position({ type: "absolute", top: 0, left: 0 })}
    background-color: ${({ theme }) => theme.projectDetails.bg};
  background: ${({ theme }) => theme.projectDetails.visualBg};
`;

export const PDVisualTitleContainer = styled.div`
  ${size({ w: "100%" })}
`;

export const PDVisualTitle = styled.h4`
  color: ${({ theme }) => theme.projectDetails.visualTitle};
  font-size: 0;
  &.hide span {
    opacity: 0;
    transform: translateY(50%);
  }
`;

export const PDVisualTitleLine = styled.span<{ $index: number }>`
  display: block;
  ${font({
    size: 88,
    height: "1.2em",
    spacing: 0,
    weight: 400,
    family: "var(--serif-dm)",
  })}
  transition:color ${transTime.color / 1000}s,
    opacity 1.8s ${easing.quart} ${({ $index }: { $index: number }) =>
    0.16 * $index}s,
    transform 1.6s ${easing.quart} ${({ $index }: { $index: number }) =>
    0.16 * $index}s;
  @media only screen and (min-width: 1024px) {
    ${font({ size: 184, height: "1em" })}
  }
`;

export const PDVisualSubtitle = styled.p<{ $index: number }>`
  ${size({ mt: 40 })}
  color: ${({ theme }) => theme.projectDetails.visualSubtitle};
  ${font({
    size: 32,
    weight: 400,
    height: "1.6em",
  })}

  transition:color ${transTime.color / 1000}s,
    opacity 1.6s ${easing.quart} ${({ $index }: { $index: number }) =>
    0.2 * $index}s,
    transform 1.6s ${easing.quart} ${({ $index }: { $index: number }) =>
    0.2 * $index}s;

  &.hide {
    opacity: 0;
    transform: translateY(100%);
  }

  @media only screen and (min-width: 1024px) {
    ${size({ mt: 80 })}
    ${font({ height: "1em" })}
  }
`;

export const PDInfoItem = styled.dl<{
  $itemIndex?: number;
  $delayIndex?: number;
}>`
  ${size({ w: "100%", mb: 80, p: [0, 20] })}
  transition: opacity 0.4s linear
    ${({ $itemIndex, $delayIndex }) =>
    typeof $delayIndex === "number" && typeof $itemIndex === "number"
      ? `${Math.floor($delayIndex * 2) / 10 + Math.floor($itemIndex * 2) / 10}s`
      : `0.6s`};

  @media only screen and (min-width: 1024px) {
    ${size({ w: `${widthRatio(12, 2)}%` })}
  }
`;

export const PDSummaryItem = styled(PDInfoItem)`
  @media only screen and (max-width: 768px) and (orientation: landscape) {
    ${size({ w: `${widthRatio(12, 6)}%` })}
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    ${size({ w: `${widthRatio(12, 6)}%`, mb: 48 })}
  }
`;

export const PDStackItem = styled(PDInfoItem)`
  ${flex({ start: true, wrap: "wrap" })}
  &.details-stack-title {
    ${size({ w: `100%` })}
  }
  @media only screen and (min-width: 768px) {
    display: block;
    ${size({ w: `${widthRatio(12, 3)}%` })}
  }
  @media only screen and (min-width: 1280px) {
    ${size({ w: `${widthRatio(12, 2)}%` })}
    &.details-stack-title {
      ${size({ w: `${widthRatio(12, 3)}%` })}
    }
  }
`;

export const PDInfoTitle = styled.dt`
  ${size({ w: "fit-content", mb: 16 })}
  color:${({ theme }) => theme.projectDetails.infoTitle};
  ${font({
    size: 32,
    weight: 500,
    height: "1em",
    family: "var(--serif-kr)",
    spacing: 0,
  })}

  @media only screen and (max-width: 768px) and (orientation: landscape) {
    ${font({ size: 24 })}
  }

  @media only screen and (min-width: 768px) {
    ${size({ mb: 16 })}
    ${font({ size: 20 })}
  }

  @media only screen and (min-width: 1024px) {
    ${size({ mb: 32 })}
    ${font({ size: 32 })}
  }

  @media only screen and (min-width: 1280px) {
    ${size({ mb: 24 })}
    ${font({ size: 24 })}
  }
`;

export const PDStackTitle = styled(PDInfoTitle)`
  ${size({ w: "100%" })}
`;

export const PDSummaryTitle = styled(PDInfoTitle)``;

export const PDInfoContents = styled.dd`
  color: ${({ theme }) => theme.projectDetails.infoDesc};
  ${font({
    size: 32,
    height: "2em",
    weight: 500,
  })}

  @media only screen and (max-width: 768px) and (orientation: landscape) {
    ${font({ size: 24 })}
  }

  @media only screen and (min-width: 768px) {
    ${font({ size: 20 })}
  }

  @media only screen and (min-width: 1024px) {
    ${font({ size: 32 })}
  }

  @media only screen and (min-width: 1280px) {
    ${font({ size: 24 })}
  }
`;

export const PDStackContents = styled(PDInfoContents)`
  ${size({ mr: 40 })}
`;

export const PDSummaryContents = styled(PDInfoContents)``;

export const PDInfoContainer = styled.div`
  ${size({ w: `calc(100% + ${rem(40)})`, m: [0, -20] })}
`;

export const PDSummaryContainer = styled(PDInfoContainer)`
  ${flex({ start: true, wrap: "wrap" })}
  ${size({ mb: 40 })}

  &.hide {
    dl {
      opacity: 0;
    }
  }

  @media only screen and (min-width: 1024px) {
    ${size({ mt: 120, mb: 0 })}
  }
`;

export const PDStacksContainer = styled(PDInfoContainer)`
  ${flex({ start: true, wrap: "wrap" })}
  ${size({ mt: 320 })}
  @media only screen and (min-width:1024px) {
  }
`;

export const PDExpContainer = styled.div`
  ${size({ w: "100%" })}
  @media only screen and (min-width: 768px) {
    ${size({
      w: `${widthRatio(12, 8)}%`,
      p: [0, 20],
    })}
  }
  @media only screen and (min-width: 1024px) {
    ${size({
      w: `${widthRatio(12, 6)}%`,
      m: [0, `${widthRatio(12, 3)}%`],
    })}
  }
  @media only screen and (min-width: 1280px) {
    ${size({
      w: `${widthRatio(12, 5)}%`,
      m: [0, `${widthRatio(12, 2)}%`, 0, `${widthRatio(12, 5)}%`],
    })}
  }
`;

export const PDExpTitle = styled.h5`
  ${size({ mb: 160 })}
  color: ${({ theme }) => theme.projectDetails.expTitle};
  span {
    ${font({
      size: 96,
      weight: 400,
      spacing: `0.02em`,
      height: "1em",
      family: "var(--serif-dm)",
      style: "italic",
    })}
  }
  @media only screen and (min-width: 1024px) {
    span {
      ${font({ size: 120 })}
    }
  }
`;

export const PDExpList = styled.ul`
  ${size({ w: "100%" })}
`;

export const PDExpDesc = styled.li`
  ${flex({ start: true })}
  color:${({ theme }) => theme.projectDetails.expDesc};
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

  @media only screen and (min-width: 768px) {
    ${font({ size: 24 })}
  }

  @media only screen and (min-width: 1024px) {
    ${font({ size: 32 })}
  }

  @media only screen and (min-width: 1280px) {
    ${font({ size: 24 })}
  }
`;

export const PDSubVisual = styled.figure`
  ${size({ w: "100%" })}
  img {
    object-fit: cover;
    ${position({ type: `static !important` })}
  }
`;
