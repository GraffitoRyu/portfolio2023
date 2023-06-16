"use client";

import styled, { css } from "styled-components";

// style
import { img } from "@/styles/styled/preset/img";
import { SvgFill, flex, position, size } from "@/styles/styled/preset/mixins";

// util
import { rem } from "@/util/unit";
import { PageTitle } from "./PageTitle";

const iconSize = (fs: number) => (fs * 2) / 3;

const FooterFontSize = css`
  font-size: ${rem(32)};
  @media only screen and (min-width: 768px) {
    font-size: ${rem(24)};
  }
`;

export const FooterContainer = styled.footer`
  ${position({ type: "relative", z: 600 })}
  ${size({
    w: "100%",
    h: typeof window === "undefined" ? "100vh" : `${window.innerHeight}px`,
    p: rem(80),
  })}
  background-color: ${({ theme }) => theme.footer.bg};
  overflow: hidden;
`;

export const FooterWrap = styled.div`
  ${flex({ dir: "column", std: "start", cross: "start" })}
  ${size({ w: "100%", h: "100%" })}
`;

export const FooterHeader = styled.header`
  margin-bottom: ${rem(80)};
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 960px) {
    margin-bottom: ${rem(80)};
  }
  @media only screen and (min-width: 1280px) {
    margin-bottom: ${rem(160)};
  }
`;

export const FooterContents = styled.div`
  ${flex({ std: "start", cross: "start" })}
  ${size({ w: "100%", pt: rem(80), mt: "auto" })}
  border-top: 1px solid ${({ theme }) => theme.footer.divideLine};
`;

export const FooterTitle = styled.h2`
  ${flex({ dir: "column", cross: "start" })}
  font-size:0;
`;

export const FooterTitleLine = styled(PageTitle)`
  font-size: ${rem(160)};
  &.stroke-title {
    -webkit-text-stroke: ${rem(2)} ${({ theme }) => theme.footer.titleBorder};
  }
  &.filled-title {
    color: ${({ theme }) => theme.footer.titleFill};
  }
  @media only screen and (min-width: 960px) {
    font-size: ${rem(114)};
  }
  @media only screen and (min-width: 1280px) {
    font-size: ${rem(240)};
  }
`;

export const FooterInfoTitle = styled.dt`
  width: fit-content;
  margin-bottom: ${rem(32)};
  color: ${({ theme }) => theme.footer.infoTitle};
  font-family: var(--serif-kr);
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 0;
  text-transform: capitalize;
  @media only screen and (min-width: 768px) {
    margin-bottom: ${rem(24)};
  }
  ${FooterFontSize}
`;

export const FooterInfoItem = styled.dd`
  width: fit-content;
  line-height: 1.6em;
  span {
    line-height: 1em;
  }
  ${FooterFontSize}
`;

export const FooterBtn = styled.button`
  ${flex({ std: "start" })}
  ${size({ w: "fit-content", h: "2em" })}
  font-weight: 400;
  span {
    color: ${({ theme }) => theme.footer.btn};
    margin-right: ${rem(10)};
    margin-top: ${rem(-4)};
  }
  figure {
    ${size({ w: rem(iconSize(32)), h: rem(iconSize(32)) })}
    svg {
      display: block;
      ${img({})}
    }
  }
  ${({ theme }) => SvgFill(theme.footer.icon)};
  &.hover {
    span {
      color: ${({ theme }) => theme.footer.btnHover};
    }
    ${({ theme }) => SvgFill(theme.footer.iconHover)};
  }
  @media only screen and (min-width: 768px) {
    figure {
      ${size({ w: rem(iconSize(24)), h: rem(iconSize(24)) })}
    }
  }
  ${FooterFontSize}
`;

export const FooterSummary = styled.dl`
  margin-right: auto;
  margin-bottom: ${rem(160)};
  color: ${({ theme }) => theme.footer.infoDesc};
  @media only screen and (min-width: 768px) {
    margin-bottom: ${rem(80)};
  }
  @media only screen and (min-width: 960px) {
  }
  @media only screen and (min-width: 1280px) {
    margin-bottom: 0;
  }
`;

export const FooterSummaryDesc = styled(FooterInfoItem)`
  font-weight: 300;
  letter-spacing: 0;
`;
