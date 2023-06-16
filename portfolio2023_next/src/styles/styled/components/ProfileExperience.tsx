"use client";

import styled from "styled-components";

// util
import { rem } from "@/util/unit";

export const ExpItem = styled.li`
  margin-bottom: ${rem(120)};
  @media only screen and (min-width: 1024px) {
    margin-bottom: ${rem(80)};
  }
`;

export const ExpTitle = styled.dt`
  margin-bottom: ${rem(16)};
  color: ${({ theme }) => theme.exp.title};
  text-transform: capitalize;
  @media only screen and (min-width: 1024px) {
    margin-bottom: ${rem(80)};
    font-size: ${rem(40)};
  }
`;

export const ExpDesc = styled.dd`
  p,
  span {
    color: ${({ theme }) => theme.exp.desc};
    font-size: ${rem(32)};
    font-weight: 400;
    line-height: 2em;
  }
  .depth-desc {
    li:before {
      background-color: ${({ theme }) => theme.exp.desc};
    }
  }
  @media only screen and (min-width: 1024px) {
    p,
    span {
      font-size: ${rem(24)};
    }
  }
`;
