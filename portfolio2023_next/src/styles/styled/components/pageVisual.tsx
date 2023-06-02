"use client";

import { styled } from "styled-components";

// util
import { flex, size } from "../preset/mixins";
import { rem } from "@/util/unit";

export const VisualContainer = styled.div`
  ${size({ height: "50%" })}
  ${flex({ dir: "column", cross: "start" })}
  padding: 0 ${rem(80)};
  @media only screen and (min-width: 1024px) {
    ${size({
      width: "100%",
      height:
        typeof window !== "undefined"
          ? `calc(${window.innerHeight}px - ${rem(80 * 2 + 32)})`
          : "100vh",
    })}
  }
`;

export const VisualTitle = styled.h1`
  ${flex({ dir: "column", cross: "start" })}
  font-size: 0;
`;

export const VisualTitleLine = styled.span`
  color: transparent;
  font-size: ${rem(144)};
  font-weight: 500;
  line-height: 1em;
  white-space: nowrap;
  &:nth-child(1) {
    -webkit-text-stroke: ${rem(1)} ${({ theme }) => theme.visualSection.border};
    font-family: var(--serif-kr);
  }
  &:nth-child(2) {
    font-weight: 700;
    color: ${({ theme }) => theme.visualSection.fill};
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
