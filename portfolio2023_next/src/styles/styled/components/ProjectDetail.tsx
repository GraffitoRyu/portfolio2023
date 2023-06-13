"use client";

import { styled } from "styled-components";

// util
import { rem } from "@/util/unit";

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
import { btnStyle } from "@/styles/styled//preset/buttons";
import { img } from "../preset/img";
import Period from "@/components/period/Period";

export const PDContainer = styled.article`
  ${size({ w: "100%", h: "100%" })}
  ${position({ type: "fixed", left: 0, bottom: 0, z: 2000 })}
  overflow-x: hidden;
  overflow-y: auto;
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

export const PDHeaderTitleContainer = styled.h1`
  ${flex({ std: "start" })}
  margin-right: auto;
  color: ${({ theme }) => theme.projectDetails.visualTitle};
  font-size: ${rem(24)};
  line-height: 1em;
  font-weight: 500;
`;

export const PDHeaderPageName = styled.span`
  ${flex({ std: "start" })}
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

export const PDSection = styled.section`
  width: 100%;
  position: relative;
  z-index: 100;
  &:not(.detail-visual) {
    background: ${({ theme }) => theme.projectDetails.bg};
  }
  &.side-padding {
    padding: ${rem(80)};
  }
  &.detail-visual {
    height: ${typeof window === "undefined"
      ? "100vh"
      : `${window.innerHeight}px`};
  }
  &.detail-info {
    font-size: 0;
    @media only screen and (min-width: 1024px) {
      display: flex;
    }
  }
`;

export const PDVisualImageContainer = styled.div`
  ${position({ type: "sticky", top: 0, left: 0, z: -100 })}
`;

export const PDVisualImage = styled.figure`
  ${size({
    w: "100%",
    h: typeof window === "undefined" ? "100vh" : `${window.innerHeight}px`,
  })}
  ${position({ type: "absolute", top: 0, left: 0, z: -2 })}
  overflow:hidden;
  img {
    filter: blur(4px);
    object-fit: cover;
    ${transition([{ prop: "opacity", time: "0.6s" }])}
  }
`;

export const PDVisualCover = styled.div`
  ${size({ w: "100%", p: 80 })}
  ${flex({ dir: "column", std: "end", cross: "start" })}
  &:after {
    content: "";
    display: block;
    ${position({ type: "absolute", top: 0, left: 0, z: -1 })}
    ${size({ w: "100%", h: "100%" })}
    background-color: ${({ theme }) => theme.projectDetails.bg};
    background: ${({ theme }) => theme.projectDetails.visualBg};
    /* opacity: 0.9; */
  }
  @media only screen and (min-width: 1024px) {
    height: ${typeof window === "undefined"
      ? "100vh"
      : `${window.innerHeight}px`};
    &:after {
      /* opacity: 0.8; */
    }
  }
`;

export const PDTitle = styled.div`
  h2 {
    color: ${({ theme }) => theme.projectDetails.visualTitle};
    ${font({ size: 80, weight: 700, height: "1em" })}
    transition: transform 0.6s, opacity 0.6s;
    span {
      display: block;
      white-space: nowrap;
    }
  }
  p {
    max-width: 100%;
    margin-top: ${rem(40)};
    color: ${({ theme }) => theme.projectDetails.visualSubtitle};
    ${font({ size: 40, weight: 400, height: "1.6em" })}
    transition: transform 0.6s, opacity 0.6s;
  }
  &.ready {
    h2 {
      transform: translateY(50%);
      opacity: 0;
    }
    p {
      transform: translateY(100%);
      opacity: 0;
    }
  }
  @media only screen and (min-width: 1024px) {
    h2 {
      font-size: ${rem(160)};
      span {
        display: block;
      }
    }
    p {
      white-space: nowrap;
      ${font({ size: 32, weight: 400 })}
    }
  }
`;

export const PDVisualEmpty = styled.div`
  ${size({ w: "100%", h: "100%" })}
`;

export const PDInfoItem = styled.dl`
  margin-bottom: ${rem(240)};
  dt {
    margin-bottom: ${rem(40)};
    color: ${({ theme }) => theme.projectDetails.infoTitle};
    ${font({ size: 32, weight: 500, height: "1em" })}
  }
  dd {
    color: ${({ theme }) => theme.projectDetails.infoDesc};
    ${font({ size: 32, weight: 500, height: "2em" })}
  }
  @media only screen and (min-width: 1024px) {
    dt {
      margin-bottom: ${rem(40)};
      font-size: ${rem(24)};
    }
    dd {
      font-size: ${rem(24)};
    }
  }
`;

export const PDInfoBox = styled.div`
  width: 100%;
  @media only screen and (min-width: 1024px) {
    width: 50%;
  }
`;

export const PDSummaryContainer = styled(PDInfoBox)`
  padding-left: 0;
  @media only screen and (min-width: 1024px) {
    padding-right: ${rem(240)};
  }
  dl {
    display: inline-block;
    vertical-align: top;
    @media only screen and (min-width: 1024px) {
      margin-bottom: 0;
      height: ${rem(320)};
    }
  }
`;

export const PCDescContainer = styled(PDInfoBox)`
  padding-right: 0;
  @media only screen and (min-width: 1024px) {
    padding-right: ${rem(240)};
  }
`;

export const PDPeriod = styled(Period)`
  display: block;
  span {
    display: block;
    margin: ${rem(16)} 0;
    background-color: ${({ theme }) => theme.projectDetails.infoDesc};
  }
  @media only screen and (min-width: 1024px) {
    display: flex;
    span {
      margin: 0 ${rem(16)};
    }
  }
`;

export const PDStackList = styled.ul`
  ${flex({ std: "start", wrap: "wrap" })}
`;

export const PDStacks = styled.li`
  ${flex({})}
  ${btnStyle({ w: "auto", h: 64, r: 32 })}
  ${size({ m: [0, 8, 16], p: [0, 32] })}
  border:1px solid ${({ theme }) => theme.projectDetails.stackBorder};
  background-color: ${({ theme }) => theme.projectDetails.stackBg};
  @media only screen and (min-width: 1024px) {
    ${btnStyle({ w: "auto", h: 48, r: 24 })}
    ${size({ m: [0, 4, 8], p: [0, 16] })}
  }
`;

export const PDStackImg = styled.figure`
  ${size({ w: 32, h: 32, mr: 16 })}
  position:relative;
  img {
    ${img({})}
  }
  @media only screen and (min-width: 1024px) {
    ${size({ w: 24, h: 24, mr: 8 })}
  }
`;

export const PDStackName = styled.span`
  margin-top: ${rem(2)};
  color: ${({ theme }) => theme.projectDetails.stackText};
  ${font({
    size: 32,
    weight: 400,
    height: "1em",
    spacing: 0,
    whitespace: "nowrap",
    transform: "uppercase",
  })}
  @media only screen and (min-width: 1024px) {
    ${font({ size: 16, weight: 500 })}
  }
`;

export const PDMediaContainer = styled.ul`
  width: 100%;
`;

export const PDMediaItem = styled.li`
  ${size({ w: "100%", pb: 240 })}
`;

export const PDMediaFigure = styled.figure`
  width: 100%;
  font-size: 0;
  position: relative;
  img {
    position: static !important;
  }
`;

export const PDMediaInfo = styled.div`
  padding: 0 ${rem(160)};
  text-align: center;
  @media only screen and (min-width: 1024px) {
    padding: 0 ${rem(80)};
  }
`;

export const PDMediaName = styled.h4`
  margin-top: ${rem(80)};
  color: ${({ theme }) => theme.projectDetails.captionTitle};
  ${font({
    size: 40,
    weight: 500,
    height: "1em",
  })}
  @media only screen and (min-width:1024px) {
    margin-top: ${rem(120)};
    font-size: ${rem(32)};
  }
`;

export const PDMediaDesc = styled.p`
  margin-top: ${rem(32)};
  color: ${({ theme }) => theme.projectDetails.captionDesc};
  ${font({
    size: 32,
    weight: 400,
    height: "1.5em",
  })}
  @media only screen and (min-width:1024px) {
    margin-top: ${rem(32)};
    font-size: ${rem(24)};
  }
`;
