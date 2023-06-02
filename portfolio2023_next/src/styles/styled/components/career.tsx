"use client";

import { styled } from "styled-components";

// components
import Period from "@/components/period/Period";

// util
import { rem } from "@/util/unit";

// style
import { flex, size } from "../preset/mixins";

export const CareerItem = styled.li`
  margin-bottom: ${rem(80)};
`;

export const CareerPeriod = styled(Period)`
  margin-bottom: ${rem(32)};
  color: ${({ theme }) => theme.career.period};
  span {
    background-color: ${({ theme }) => theme.career.period};
  }
  @media only screen and (min-width: 1024px) {
    margin-bottom: ${rem(16)};
  }
`;

export const CareerTitle = styled.h3`
  margin-bottom: ${rem(32)};
  @media only screen and (min-width: 1024px) {
    margin-bottom: ${rem(24)};
  }
`;

export const CareerRole = styled.strong`
  font-size: ${rem(40)};
  font-weight: 500;
  color: ${({ theme }) => theme.career.role};
  line-height: 1em;
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(32)};
  }
`;

export const CareerCompany = styled.span`
  ${flex({ std: "start" })}
  margin-top: ${rem(4)};
  color: ${({ theme }) => theme.career.company};
  font-size: ${rem(32)};
  font-weight: 400;
  line-height: 1em;
  &:before {
    content: "";
    display: block;
    ${size({ width: rem(2), height: rem(24) })}
    margin: 0 ${rem(16)} 0 ${rem(24)};
    background-color: ${({ theme }) => theme.career.company};
  }
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
