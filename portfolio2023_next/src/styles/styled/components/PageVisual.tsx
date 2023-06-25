"use client";

import { css, styled } from "styled-components";

// style
import { flex, font, size, transition } from "../preset/mixins";

// util
import { rem } from "@/util/unit";
import { transTime } from "../preset/transTime";
import { PageTitle } from "./PageTitle";

export const VisualContainer = styled.div<{
  $wh: number;
  $headerHeight: number;
}>`
  ${flex({ dir: "column", cross: "start" })}
  height: 50%;
  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: ${({
      $wh,
      $headerHeight,
    }: {
      $wh: number;
      $headerHeight: number;
    }): string => ($wh !== 0 ? `${$wh - $headerHeight}px` : "100vh")};
  }
`;

const timeOption = { time: `${transTime.visual.fadeInUp / 1000}s` };

const transVisualTitle = (delay: number | null) => {
  const option =
    typeof delay === "number"
      ? { ...timeOption, delay: `${delay}s` }
      : timeOption;
  return css`
    ${transition([
      {
        prop: "transform",
        ...option,
      },
      {
        prop: "opacity",
        ...option,
      },
      {
        prop: "color",
        time: `${transTime.color / 1000}s`,
      },
    ])}
  `;
};

export const VisualTitle = styled.h1`
  ${flex({ dir: "column", cross: "start" })}
  font-size: 0;
  transition: none;
  &.loading {
    .visual-title {
      transform: translateY(100%);
      opacity: 0;
    }
  }
  &.trans-title {
    .stroke-title {
      ${transVisualTitle(null)}
    }
    .filled-title {
      ${transVisualTitle(0.16)}
    }
  }
`;

export const VisualTitleLine = styled(PageTitle)`
  &.stroke-title {
    -webkit-text-stroke-color: ${({ theme }) => theme.visualSection.border};
  }
  &.filled-title {
    color: ${({ theme }) => theme.visualSection.fill};
  }
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(240)};
  }
`;

export const IntroTitle = styled.h2`
  ${size({ mb: 160 })}
  color: ${({ theme }) => theme.introSection.title};
  ${font({
    size: 48,
    weight: 300,
    height: 64,
  })}
  strong {
    color: ${({ theme }) => theme.introSection.strong};
    font-weight: 500;
  }
  @media only screen and (min-width: 1024px) {
    ${font({
      size: 64,
      height: 80,
    })}
  }
`;

export const IntroDesc = styled.p`
  color: ${({ theme }) => theme.introSection.desc};
  ${font({
    size: 32,
    weight: 400,
    height: 56,
  })}
  br {
    display: none;
  }
  span {
    display: inline-block;
  }
  @media only screen and (min-width: 640px) {
    ${font({
      size: 24,
      height: 40,
    })}
    br {
      display: inline;
    }
  }
  @media only screen and (min-width: 1024px) {
    ${font({
      size: 32,
      height: 56,
    })}
  }
`;
