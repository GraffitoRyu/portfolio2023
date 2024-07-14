"use client";

import styled, { css } from "styled-components";

// util
import { rem, widthRatio } from "@/util/unit.util";

// style
import { flex, font, position, size } from "../preset/mixins";
import { transTime } from "../preset/transTime";
import { easing } from "../preset/easing";

export const StyledCareerList = styled.ul`
  ${size({ w: `calc(100% + ${rem(160)})`, m: [0, -80] })}
  @media only screen and (min-width: 768px) {
    ${size({ w: "100%", m: 0 })}
  }
`;

export const StyledCareerItem = styled.li`
  ${size({ w: "100%" })}
  position: relative;
`;

export const StyledCareerBorder = styled.div`
  ${size({ w: "100%", h: 1 })}

  &:before {
    content: "";
    display: block;
    ${size({ w: "100%", h: "100%" })}
    background-color: ${({ theme }) => theme.career.border};
    transition:
      background-color 0.4s,
      width 0.8s ${easing.quart},
      opacity 0.8s ${easing.quart};
  }

  &.bottom:before {
    transition:
      background-color 0.4s,
      width 0.8s ${easing.quart} 0.2s,
      opacity 0.8s ${easing.quart} 0.2s;
  }

  ${StyledCareerItem}.hide &:before {
    width: 0;
    opacity: 0;
    transition:
      background-color 0.4s,
      width 0.8s ${easing.quart},
      opacity 0.8s ${easing.quart};
    &.top:before {
      transition:
        background-color 0.4s,
        width 0.8s ${easing.quart} 0.2s,
        opacity 0.8s ${easing.quart} 0.2s;
    }
  }
`;

const careerSummaryCell = (col: number) => css`
  ${flex({ std: "flex-start" })}
  ${size({ w: `${widthRatio(12, col)}%`, h: "100%", p: [0, 20] })}
  @media only screen and (min-width:768px) {
    ${size({ w: `${widthRatio(7, col)}%` })}
  }
`;

const careerFont = css`
  ${font({
    size: 32,
    weight: 400,
    height: "1em",
  })}
  @media only screen and (min-width:768px) {
    ${font({ size: 24 })}
  }
`;
const careerSummaryFont = css`
  ${font({
    size: 32,
    weight: 400,
    height: "1em",
  })}
`;

const fadeInUp_before = css`
  opacity: 0;
  transform: translateY(20%);
`;

const fadeInUp_after = css`
  opacity: 1;
  transform: translateY(0);
`;

const summaryTransition = css`
  transition:
    color ${transTime.color / 1000}s,
    background-color ${transTime.color / 1000}s,
    transform 0.8s ${easing.quart},
    opacity 0.8s ${easing.quart};
`;

export const StyledCareerPeriod = styled.time`
  ${careerSummaryCell(2)}
  ${careerSummaryFont}
  color:${({ theme }) => theme.career.period};
  ${fadeInUp_after}
  ${summaryTransition}
  ${StyledCareerItem}.hide & {
    ${fadeInUp_before}
  }
  @media only screen and (min-width: 768px) {
    ${careerSummaryCell(1)}
  }
`;

export const StyledCareerRole = styled.h3`
  ${careerSummaryCell(4)}
  color: ${({ theme }) => theme.career.role};
  ${careerSummaryFont}
  ${font({ weight: 500 })}
  ${fadeInUp_after}
  ${summaryTransition}
  ${StyledCareerItem}.hide & {
    ${fadeInUp_before}
  }
  @media only screen and (min-width: 768px) {
    ${careerSummaryCell(2)}
  }
`;

export const StyledCareerCompany = styled.div`
  ${careerSummaryCell(3)}
  ${careerSummaryFont}
  span {
    ${font({ spacing: `-0.02em` })}
  }
  color: ${({ theme }) => theme.career.company};
  ${fadeInUp_after}
  ${summaryTransition}
  ${StyledCareerItem}.hide & {
    ${fadeInUp_before}
  }
  @media only screen and (min-width: 768px) {
    ${careerSummaryCell(2)}
  }
`;

export const StyledCareerExpandCell = styled.div`
  ${size({ w: "auto", m: [0, 40, 0, "auto"] })}
  justify-content:center;
  font-size: 0;
  position: relative;
  ${fadeInUp_after}
  ${summaryTransition}
  ${StyledCareerItem}.hide & {
    ${fadeInUp_before}
  }
  @media only screen and (min-width: 1024px) {
    ${size({ m: 0 })}
    ${careerSummaryCell(1)}
  }
`;

export const StyledCareerExpandIcon = styled.figure`
  ${size({ w: 24, h: 24 })}
  ${position({ center: true })}
  transform: translate(-50%,-50%) rotate(45deg);
  transform-origin: center;
  transition: transform 0.2s;
  &:before,
  &:after {
    content: "";
    display: block;
    ${position({ center: true })}
    ${size({ w: 24, h: 2, r: 1 })}
      background-color:${({ theme }) => theme.career.icon};
    transform-origin: center;
    transition:
      transform 0.4s,
      opacity 0.4s,
      background-color 0.4s;
  }
  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const StyledCareerDetailContainer = styled.div`
  ${size({ w: "100%", h: 0, p: [0, 80] })}
  background-color: ${({ theme }) => theme.career.expandBg};
  overflow: clip;
  transition: height 0.4s;
  @media only screen and (min-width: 1024px) {
    ${size({ p: [0, 20, 0, `${widthRatio(7, 2)}%`] })}
  }
`;

export const StyledCareerDetailList = styled.div`
  ${size({ w: "100%", p: [80, 0] })}
  opacity:0;
  transition: opacity 0.4s;
  @media only screen and (min-width: 1024px) {
    ${size({ p: [40, 0, 80, 10] })}
  }
`;

export const StyledCareerDetailItem = styled.dl`
  ${size({ w: "100%", mb: 80 })}
  &:last-child {
    ${size({ mb: 0 })}
  }
  @media only screen and (min-width: 768px) {
    ${size({ mb: 40 })}
  }
`;

export const StyledCareerDetailItemTitle = styled.dt`
  ${careerFont}
  font-weight:500;
  ${size({ mb: 24 })}
  color:${({ theme }) => theme.career.detailTitle};
`;

export const StyledCareerDetailItemDesc = styled.dd`
  ${flex({ start: true })}
  ${careerFont}
  ${font({ height: "1.6em" })}
  color: ${({ theme }) => theme.career.detailContents};

  &:before {
    content: "\\00B7";
    ${flex({ std: "flex-start" })}
    ${size({ w: 20, h: 54 })}
    line-height:1em;
  }
  span {
    flex: 1;
    ${font({ spacing: 0 })}
  }
  @media only screen and (min-width: 768px) {
    &:before {
      ${size({ h: 40 })}
    }
  }
`;

export const StyledCareerSummaryContainer = styled.summary`
  ${size({ w: `100%`, h: "auto", p: [64, 60] })}
  ${flex({ std: "flex-start", wrap: "wrap" })}
  ${position({ type: "relative", z: 10 })}
  cursor:pointer;
  &:before {
    content: "";
    ${size({ w: `calc(100% - ${rem(40)})`, h: "100%" })}
    ${position({ type: "absolute", top: 0, left: 20, z: -5 })}
    transition: background-color ${transTime.color / 1000}s;
  }
  &.hover {
    &:before {
      background-color: ${({ theme }) => theme.career.bgHover};
    }
    ${StyledCareerPeriod} {
      color: ${({ theme }) => theme.career.periodHover};
    }
    ${StyledCareerRole} {
      color: ${({ theme }) => theme.career.roleHover};
    }
    ${StyledCareerCompany} {
      color: ${({ theme }) => theme.career.companyHover};
    }
    ${StyledCareerExpandIcon} {
      &:before,
      &:after {
        background-color: ${({ theme }) => theme.career.iconHover};
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    ${size({ w: `calc(100% + ${rem(40)})`, h: 160, m: [0, -20], p: 0 })}
  }
`;

export const StyledCareerDetailWrap = styled.details<{ $height: number }>`
  width: 100%;
  &.open {
    ${StyledCareerExpandIcon} {
      transform: translate(-50%, -50%) rotate(180deg);
      &:before {
        transform: translate(-50%, -50%) rotate(180deg);
      }
      &:after {
        transform: translate(-50%, -50%) rotate(-180deg);
        opacity: 0;
        transition:
          transform 0.6s,
          opacity 0.8s linear 0.2s,
          background-color 0.4s;
      }
    }
    ${StyledCareerDetailContainer} {
      ${({ $height }) => size({ h: $height !== 0 ? `${$height}px` : 360 })};
    }
    ${StyledCareerDetailList} {
      opacity: 1;
    }
  }
`;
