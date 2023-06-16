"use client";

import styled from "styled-components";

// style
import { flex, transition } from "../preset/mixins";

// util
import { rem } from "@/util/unit";
import { transTime } from "../preset/transTime";
import { PageTitle } from "./PageTitle";

export const VisualContainer = styled.div`
  ${flex({ dir: "column", cross: "start" })}
  height: 50%;
  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: ${typeof window !== "undefined"
      ? `calc(${window.innerHeight}px - ${rem(80 * 2 + 32)})`
      : "100vh"};
  }
`;

export const VisualTitle = styled.h1`
  ${flex({ dir: "column", cross: "start" })}
  font-size: 0;
  &.loading {
    .visual-title {
      transform: translateY(100%);
      opacity: 0;
    }
  }
`;

export const VisualTitleLine = styled(PageTitle)`
  ${transition([
    {
      prop: "transform",
      time: `${transTime.visual.fadeInUp / 1000}s`,
    },
    {
      prop: "opacity",
      time: `${transTime.visual.fadeInUp / 1000}s`,
    },
    {
      prop: "color",
      time: `${transTime.color}s`,
    },
  ])}
  &.stroke-title {
    -webkit-text-stroke-color: ${({ theme }) => theme.visualSection.border};
  }
  &.filled-title {
    color: ${({ theme }) => theme.visualSection.fill};
    transition-delay: 0.16s;
  }
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(240)};
  }
`;

export const IntroTitle = styled.h2`
  margin-bottom: ${rem(160)};
  color: ${({ theme }) => theme.introSection.title};
  font-size: ${rem(48)};
  line-height: ${rem(64)};
  font-weight: 300;
  strong {
    color: ${({ theme }) => theme.introSection.strong};
    font-weight: 500;
  }
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(48)};
    line-height: ${rem(64)};
  }
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(64)};
    line-height: ${rem(80)};
  }
`;

export const IntroDesc = styled.p`
  color: ${({ theme }) => theme.introSection.desc};
  font-size: ${rem(32)};
  line-height: ${rem(56)};
  font-weight: 400;
  br {
    display: none;
  }
  span {
    display: inline-block;
  }
  @media only screen and (min-width: 640px) {
    font-size: ${rem(24)};
    line-height: ${rem(40)};
    br {
      display: inline;
    }
  }
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(32)};
    line-height: ${rem(56)};
  }
`;
