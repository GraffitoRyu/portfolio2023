"use client";

import styled from "styled-components";

// style
import { sizePreset } from "../preset/size";
import { flex, font, position, size } from "../preset/mixins";

// util
import { rem } from "@/util/unit";
import { easing } from "../preset/easing";

export const HeaderContainer = styled.header`
  ${position({ type: "sticky", top: 0, left: 0 })}
  width:100%;
  z-index: 2000;
  pointer-events: none;
  &.init-hide {
    transition: opacity 0.8s ${easing.quart}, transform 0.8s ${easing.quart};
  }
  &.hide {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export const StyledHeaderWrap = styled.div`
  ${flex({ std: "flex-start" })}
  ${size({
    w: "100%",
    h: sizePreset.btn.mobile + sizePreset.common.padding * 2,
    p: sizePreset.common.padding,
  })}
  pointer-events:none;
  /* backdrop-filter: blur(8px); */
  @media only screen and (max-width: 768px) and (orientation: landscape) {
    ${size({
      h: sizePreset.btn.w768_landscape + sizePreset.common.padding * 2,
    })}
  }
  @media only screen and (min-width: 768px) {
    ${size({ h: sizePreset.btn.w768 + sizePreset.common.padding * 2 })}
  }
  @media only screen and (min-width: 1024px) {
    ${size({ h: sizePreset.btn.w1024 + sizePreset.common.padding * 2 })}
  }
  @media only screen and (min-width: 1280px) {
    ${size({ h: sizePreset.btn.w1280 + sizePreset.common.padding * 2 })}
  }
  @media only screen and (min-width: 1440px) {
    ${size({ h: sizePreset.btn.w1440 + sizePreset.common.padding * 2 })}
  }
`;

export const TimerContainer = styled.div`
  ${flex({})}
  ${size({ w: "fit-content", h: 48, p: [0, 40, 0, 2] })}
  border-top: ${rem(4)} solid ${({ theme }) => theme.timer.bar};
  border-bottom: ${rem(4)} solid transparent;
  color: ${({ theme }) => theme.timer.text};
  ${font({
    size: 24,
    height: "1em",
    weight: 500,
  })}
  @media only screen and (min-width:1024px) {
    height: 100%;
  }
`;

export const TimeRegion = styled.strong`
  display: none;
  &:after {
    content: "/";
    ${size({ m: [0, 16] })}
  }
  @media only screen and (min-width: 1024px) {
    ${flex({})}
  }
`;
