"use client";

import styled from "styled-components";

// util
import { rem } from "@/util/unit";
import { font } from "../preset/mixins";
import { transTime } from "../preset/transTime";

export const ExpContainer = styled.ul`
  width: 100%;
`;

export const ExpItem = styled.li`
  width: 100%;
  margin-bottom: ${rem(120)};
  @media only screen and (min-width: 1024px) {
    margin-bottom: ${rem(80)};
  }
`;

export const ExpContents = styled.dl`
  width: auto;
`;

export const ExpTitle = styled.dt`
  margin-bottom: ${rem(16)};
  color: ${({ theme }) => theme.exp.title};
  ${font({
    size: 56,
    weight: 500,
    height: "1em",
    transform: "capitalize",
  })}
  @media only screen and (min-width: 1024px) {
    margin-bottom: ${rem(40)};
    font-size: ${rem(40)};
  }
`;

export const ExpDesc = styled.dd`
  p,
  span {
    color: ${({ theme }) => theme.exp.desc};
    ${font({
      size: 32,
      weight: 400,
      height: "2em",
    })}
  }
  .depth-desc {
    li:before {
      background-color: ${({ theme }) => theme.exp.desc};
      transition: background-color ${transTime.color / 1000}s;
    }
  }
  @media only screen and (min-width: 1024px) {
    p,
    span {
      font-size: ${rem(24)};
    }
  }
`;
