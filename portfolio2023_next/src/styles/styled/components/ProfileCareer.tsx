"use client";

import styled, { css } from "styled-components";

// util
import { rem, widthRatio } from "@/util/unit";

// style
import { flex, font, position, size } from "../preset/mixins";
import { transTime } from "../preset/transTime";

export const CareerContainerList = styled.ul`
  width: 100%;
`;

export const CareerItemContainer = styled.li`
  ${size({ w: "100%" })}
  position: relative;
`;

export const CareerBorder = styled.div`
  ${size({ w: "100%", h: "1px" })}
  background-color:${({ theme }) => theme.career.border};
`;

export const CareerSummaryContainer = styled.summary`
  ${size({ w: `calc(100% + ${rem(40)})`, h: 120, m: [0, -20] })}
  ${flex({ std: "flex-start" })}
  ${position({ type: "relative", z: 10 })}
  &:before {
    content: "";
    ${size({ w: `calc(100% - ${rem(40)})`, h: "100%" })}
    ${position({ type: "absolute", top: 0, left: 20, z: -5 })}
    transition: background-color ${transTime.color / 1000}s;
  }
`;

const careerSummaryCell = (col: number) => css`
  ${flex({ std: "flex-start" })}
  ${size({ w: `${widthRatio(7, col)}%`, h: "100%", p: [0, 20] })}
`;

const careerFont = css`
  ${font({
    size: 24,
    weight: 400,
    height: "1em",
  })}
`;

export const CareerPeriod = styled.time`
  ${careerSummaryCell(1)}
  ${careerFont}
  color:${({ theme }) => theme.career.period};
`;

export const CareerRole = styled.h3`
  ${careerSummaryCell(2)}
  color: ${({ theme }) => theme.career.role};
`;

export const CareerCompany = styled.div`
  ${careerSummaryCell(2)}
  ${careerFont}
  color: ${({ theme }) => theme.career.company};
`;

export const CareerExpandCell = styled.div`
  ${careerSummaryCell(1)}
  justify-content:center;
  font-size: 0;
  position: relative;
`;

export const CareerExpandIcon = styled.figure`
  ${size({ w: 24, h: 24 })}
  ${position({ center: true })}
    transform: translate(-50%,-50%) rotate(45deg);
  transform-origin: center;
  &:before,
  &:after {
    content: "";
    display: block;
    ${position({ center: true })}
    ${size({ w: 24, h: 2, r: 1 })}
      background-color:${({ theme }) => theme.career.icon};
    transform-origin: center;
    transition: transform 0.4s, background-color 0.4s;
  }
  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const CareerDetailContainer = styled.div`
  ${size({ w: "100%", p: [0, 20, 0, `${widthRatio(7, 2)}%`] })}
`;

export const CareerDetailList = styled.div`
  ${size({ w: "100%", p: [40, 0, 80, 10] })}
`;

export const CareerDetailItem = styled.dl`
  ${size({ w: "100%", mb: 40 })}
  &:last-child {
    ${size({ mb: 0 })}
  }
`;

export const CareerDetailItemTitle = styled.dt`
  ${careerFont}
  font-weight:500;
  ${size({ mb: 10 })}
  color:${({ theme }) => theme.career.detailTitle};
`;

export const CareerDetailItemDesc = styled.dd`
  ${flex({ std: "flex-start", cross: "flex-start", wrap: "wrap" })}
  ${careerFont}
  line-height:1.6em;
  color: ${({ theme }) => theme.career.detailContents};

  &:before {
    content: "\\00B7";
    ${flex({})}
    ${size({ w: 40, h: 40 })}
  }
  span {
    flex: 1;
  }
`;

export const CareerWrap = styled.details`
  width: 100%;
  &:not([open]).hover {
    ${CareerSummaryContainer}:before {
      background-color: ${({ theme }) => theme.career.bgHover};
    }
    ${CareerPeriod} {
      color: ${({ theme }) => theme.career.periodHover};
    }
    ${CareerRole} {
      color: ${({ theme }) => theme.career.roleHover};
    }
    ${CareerCompany} {
      color: ${({ theme }) => theme.career.companyHover};
    }
    ${CareerExpandIcon} {
      &:before,
      &:after {
        background-color: ${({ theme }) => theme.career.iconHover};
      }
    }
  }
  &[open] {
    ${CareerExpandIcon} {
      transform: translate(-50%, -50%);
      &:before,
      &:after {
        transform: translate(-50%, -50%);
      }
    }
  }
`;
