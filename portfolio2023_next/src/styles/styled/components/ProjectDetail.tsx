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
import { sizePreset } from "@/styles/styled/preset/size";

export const PDContainer = styled.article`
  ${size({ width: "100%", height: "100%" })}
  ${position({ type: "fixed", left: 0, bottom: 0, z: 2000 })}
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
  background: linear-gradient(
    0deg,
    rgba(42, 55, 64, 1) 0%,
    rgba(66, 110, 94, 0.6643907563025211) 100%
  );
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

export const PDHeader = styled.header`
  ${position({ type: "sticky", top: 0, left: 0, z: 1000 })}
  width:100%;
  height: 0;
`;
export const PDHeaderContainer = styled.div`
  ${flex({ std: "start" })}
  ${size({ width: "100%", height: sizePreset.btn.mobile, padding: 80 })}
  @media only screen and (min-width:1024px) {
    height: ${rem(sizePreset.btn.pc + 80 * 2)};
  }
`;

export const PDHeaderTitleContainer = styled.div`
  position: relative;
  ${flex({ std: "start" })}
  margin-right: auto;
  ${PDTitle} {
    ${position({ type: "absolute", top: 0, left: 0 })}
    transform:${`translate(0, calc(100vh - ${rem(80 * 2)} - 100%))`};
  }
`;
export const PDHeaderPageName = styled.h1`
  ${flex({ std: "start" })}
  color:${({ theme }) => theme.projectDetails.visualTitle};
  line-height: 1em;
  font-size: ${rem(24)};
  font-weight: 500;
  i {
    font-weight: 500;
    margin: 0 ${rem(16)};
    opacity: 0;
  }
`;

export const PDSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
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
    ${position({ type: "absolute", top: 0, left: 0, z: 2 })}
    ${size({ width: "100%", height: "100%" })}
    background-color:${({ theme }) => theme.projectDetails.visualBg};
    background-color: ${({ theme }) => theme.projectDetails.bg};
    opacity: 0.9;
  }
  @media only screen and (min-width: 1024px) {
    &:after {
      opacity: 0.8;
    }
  }
`;

export const PDVisualEmpty = styled.div`
  ${size({ width: "100%", height: "100%" })}
`;
