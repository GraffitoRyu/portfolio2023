"use client";

import styled from "styled-components";

// components
import PeriodForward from "@/components/period/Period";

// util
import { rem } from "@/util/unit";

// style
import { flex, size } from "../preset/mixins";
import { transTime } from "../preset/transTime";
import { easing } from "../preset/easing";

export const CareerContainerList = styled.ul`
  width: 100%;
`;

export const CareerItemContainer = styled.li`
  width: 100%;
  margin-bottom: ${rem(80)};
`;

export const CareerPeriod = styled(PeriodForward)`
  margin-bottom: ${rem(32)};
  color: ${({ theme }) => theme.career.period};

  time {
    transform: translateY(100%);
    opacity: 0;
    transition: transform ${transTime.career / 1000}s ${easing.expo},
      opacity ${transTime.career / 1000}s ${easing.expo},
      color ${transTime.color / 1000}s;
  }

  span {
    ${flex({})}
    font-size:0;
    &:before {
      ${size({ w: 0, h: "100%" })}
      background-color: ${({ theme }) => theme.career.period};
      transition: width ${transTime.career / 1000}s ${easing.expo} 0.16s;
    }
  }

  &.on {
    time {
      opacity: 1;
      transform: translateY(0);
    }
    span:before {
      width: 100%;
    }
  }

  @media only screen and (min-width: 1024px) {
    margin-bottom: ${rem(24)};
  }
`;

export const CareerTitle = styled.h3`
  ${flex({ std: "flex-start" })}
  margin-bottom: ${rem(32)};
  @media only screen and (min-width: 1024px) {
    margin-bottom: ${rem(16)};
  }
`;

export const CareerTitleFadeBox = styled.span`
  font-size: ${rem(40)};
  line-height: 1.2em;
  overflow: hidden;
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(32)};
  }
`;

export const CareerRole = styled.strong`
  display: block;
  font-weight: 500;
  color: ${({ theme }) => theme.career.role};
`;

export const CareerCompanyDivideBar = styled.span`
  ${flex({})}
  ${size({ w: 2, h: 32, m: [8, 16, 0, 24] })}
  opacity: 0;
  transition: opacity ${`${transTime.career / 1000}s`};

  &:before {
    content: "";
    display: block;
    ${size({ w: "100%", h: 0 })}
    background-color: ${({ theme }) => theme.career.company};
    transition: height ${`${transTime.career / 1000}s`};
  }

  &.on {
    opacity: 1;
    &:before {
      height: 100%;
    }
  }

  @media only screen and (min-width: 1024px) {
    height: ${rem(24)};
  }
`;

export const CareerCompany = styled.span`
  color: ${({ theme }) => theme.career.company};
  font-size: ${rem(32)};
  font-weight: 400;
  line-height: 1em;
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(24)};
  }
`;

export const CareerDesc = styled.p`
  color: ${({ theme }) => theme.career.desc};
  font-size: ${rem(32)};
  font-weight: 400;
  line-height: 1.5em;
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(24)};
  }
`;
