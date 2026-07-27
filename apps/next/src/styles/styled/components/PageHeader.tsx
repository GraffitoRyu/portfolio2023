"use client";

import styled from "styled-components";
import { mediaQueryTokens, zIndexTokens } from "@graffitoryu/ui";

// style
import { easing } from "../preset/easing";
import { sizePreset } from "../preset/size";
import { transTime } from "../preset/transTime";
import { flex, font, position, size } from "../preset/mixins";

// util
import { rem } from "@/utils/style.util";

export const StyledHeaderContainer = styled.header`
  ${position({ type: "sticky", top: 0, left: 0 })}
  width: 100%;
  z-index: ${zIndexTokens.header};
  pointer-events: none;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: ${zIndexTokens.headerBackdrop};
    ${`backdrop-filter: blur(${rem(16)});`} /* Add this line to apply blur effect */
    ${`-webkit-backdrop-filter: blur(${rem(16)});`}/* Add this line to apply blur effect */
  }
  &.init-hide {
    transition:
      opacity ${transTime.header / 1000}s ${easing.quart},
      transform ${transTime.header / 1000}s ${easing.quart};
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
  @media only screen and ${mediaQueryTokens.max.tablet} and (orientation: landscape) {
    ${size({
      h: sizePreset.btn.w768_landscape + sizePreset.common.padding * 2,
    })}
  }
  @media only screen and ${mediaQueryTokens.min.tablet} {
    ${size({ h: sizePreset.btn.w768 + sizePreset.common.padding * 2 })}
  }
  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${size({ h: sizePreset.btn.w1024 + sizePreset.common.padding * 2 })}
  }
  @media only screen and ${mediaQueryTokens.min.wide} {
    ${size({ h: sizePreset.btn.w1280 + sizePreset.common.padding * 2 })}
  }
  @media only screen and ${mediaQueryTokens.min.large} {
    ${size({ h: sizePreset.btn.w1440 + sizePreset.common.padding * 2 })}
  }
`;

export const StyledTimerContainer = styled.div`
  ${flex({})}
  ${size({ w: "fit-content", h: 48, p: [0, 8, 0, 2] })}
  border-top: ${rem(4)} solid ${({ theme }) => theme.timer.bar};
  border-bottom: ${rem(4)} solid transparent;
  color: ${({ theme }) => theme.timer.text};
  ${font({ size: 24, height: "1em", weight: 500 })}
  time {
    ${font({ spacing: 0 })}
  }
  @media only screen and ${mediaQueryTokens.min.desktop} {
    height: 100%;
  }
`;

export const StyledTimeRegion = styled.strong`
  display: none;
  ${font({ weight: 500 })}
  &:after {
    content: "/";
    ${size({ m: [0, 16] })}
  }
  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${flex({})}
  }
`;
