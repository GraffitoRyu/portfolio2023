"use client";

import { css, styled } from "styled-components";

// components
import { PageTitle } from "./PageTitle";

// style
import { flex, font, size, transition } from "../preset/mixins";
import { easing } from "../preset/easing";
import { transTime } from "../preset/transTime";

export const VisualContainer = styled.div`
  ${flex({ dir: "column", cross: "flex-start" })}
  height: 50%;
  @media only screen and (min-width: 1024px) {
    ${size({ w: "100%", h: `calc(100vh - var(--header-height))` })}
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
  ${flex({ dir: "column", cross: "flex-start" })}
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
  @media only screen and (min-width: 1024px) {
    &.fixed-parallax {
      position: fixed;
      pointer-events: none;
    }
  }
`;

export const VisualTitleLine = styled(PageTitle)`
  color: ${({ theme }) => theme.visualSection.fill};
  &.stroke-title {
  }
  &.filled-title {
  }
  @media only screen and (min-width: 1024px) {
    ${font({ size: 240 })}
  }
`;

const introFadeInUp = css`
  &.init-hide {
    transition: opacity ${transTime.visual.intro / 1000}s ${easing.quart},
      transform ${transTime.visual.intro / 1000}s ${easing.quart};
  }
  &.hide {
    opacity: 0;
    transform: translateY(50%);
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
  ${introFadeInUp}
  @media only screen and (min-width:768px) {
    ${size({ mb: 80 })}
  }
  @media only screen and (min-width: 1024px) {
    ${font({
      size: 64,
      height: 80,
    })}
    opacity: 0;
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
  ${introFadeInUp}
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
    opacity: 0;
  }
`;
