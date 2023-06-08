"use client";

import { styled } from "styled-components";

// util
import { rem } from "@/util/unit";

// style
import {
  flex,
  position,
  size,
  transition,
} from "@/styles/styled/preset/mixins";
import { easing } from "@/styles/styled/preset/easing";
import { transTime } from "@/styles/styled/preset/transTime";
import { btnStyle } from "@/styles/styled//preset/buttons";

export const PDContainer = styled.article`
  ${size({ width: "100%", height: "100%" })}
  ${position({ type: "fixed", left: 0, bottom: 0, z: 2000 })}
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
  background: ${({ theme }) => theme.projectDetails.bg};
  /* background: linear-gradient(
    0deg,
    rgba(42, 55, 64, 1) 0%,
    rgba(66, 110, 94, 0.6643907563025211) 100%
  ); */
  ${transition([
    {
      prop: "transform",
      time: `${transTime.detail.sheetSlideTime / 1000}s`,
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
  /* opacity: 0; */
  letter-spacing: 0;
  &:before {
    content: "/";
    font-weight: 500;
    margin: 0 ${rem(16)};
  }
`;

export const PDSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  &.detail-info {
    font-size: 0;
    @media only screen and (min-width: 1024px) {
      display: flex;
    }
  }
`;

export const PDVisualImage = styled.figure`
  ${size({ width: "100%", height: "100%" })}
  ${position({ type: "relative", z: 0 })}
  overflow:hidden;
  img {
    filter: blur(4px);
    object-fit: cover;
    ${transition([{ prop: "opacity", time: "0.6s" }])}
  }
  &:after {
    content: "";
    display: block;
    ${position({ type: "absolute", top: 0, left: 0, z: 1 })}
    ${size({ width: "100%", height: "100%" })}
    background-color: ${({ theme }) => theme.projectDetails.bg};
    background: ${({ theme }) => theme.projectDetails.visualBg};
    /* opacity: 0.9; */
  }
  @media only screen and (min-width: 1024px) {
    &:after {
      /* opacity: 0.8; */
    }
  }
`;

export const PDVisualCover = styled.div`
  ${position({ type: "absolute", top: 0, left: 0, z: 10 })}
  ${size({ width: "100%", height: "100%", padding: 80 })}
  ${flex({ dir: "column", std: "end", cross: "start" })}
`;

export const PDTitle = styled.div`
  h2 {
    color: ${({ theme }) => theme.projectDetails.visualTitle};
    font-size: ${rem(80)};
    font-weight: 700;
    line-height: 1em;
    span {
      white-space: nowrap;
    }
  }
  p {
    margin-top: ${rem(40)};
    color: ${({ theme }) => theme.projectDetails.visualSubtitle};
    font-size: ${rem(40)};
    font-weight: 400;
    line-height: 1.6em;
    white-space: nowrap;
  }
  @media only screen and (min-width: 1024px) {
    h2 {
      font-size: ${rem(160)};
      span {
        display: block;
      }
    }
  }
`;

export const PDVisualEmpty = styled.div`
  ${size({ width: "100%", height: "100%" })}
`;

export const PDInfoItem = styled.dl`
  width: 50%;
  dt {
    margin-bottom: ${rem(40)};
    color: ${({ theme }) => theme.projectDetails.infoTitle};
    line-height: 1em;
  }
  dd {
    color: ${({ theme }) => theme.projectDetails.infoDesc};
    font-size: ${rem(32)};
    font-weight: 500;
    line-height: 2em;
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
    margin-bottom: ${rem(240)};
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

export const PDStacks = styled.figure`
  ${flex({})}
  ${btnStyle({ width: "auto", height: 64, radius: 32 })}
  ${size({ margin: [0, 8, 16], padding: [0, 32] })}
  border:1px solid ${({ theme }) => theme.projectDetails.stackBorder};
  background-color: ${({ theme }) => theme.projectDetails.stackBg};
  img {
    ${size({ width: 32, height: 32, ml: 16 })}
  }
  figcaption {
    color: ${({ theme }) => theme.projectDetails.stackText};
    font-size: ${rem(32)};
    font-weight: 400;
    line-height: 1em;
    letter-spacing: 0;
  }
  @media only screen and (min-width: 1024px) {
    ${btnStyle({ width: "auto", height: 48, radius: 24 })}
    ${size({ margin: [0, 4, 8], padding: [0, 16] })}
    img {
      ${size({ width: 24, height: 24, ml: 8 })}
    }
    figcaption {
      font-size: ${rem(16)};
      font-weight: 500;
    }
  }
`;
