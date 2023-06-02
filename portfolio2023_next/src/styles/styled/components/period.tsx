"use client";

import styled from "styled-components";

// style
import { flex, size } from "../preset/mixins";

// util
import { rem } from "@/util/unit";

export const PeriodContainer = styled.div`
  ${flex({ std: "start" })}
  font-size: ${rem(32)};
  font-weight: 400;
  line-height: 1em;
  white-space: nowrap;
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(20)};
  }
`;

export const Bar = styled.span`
  width: ${rem(80)};
  height: ${rem(1)};
  margin: 0 ${rem(32)};
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width: 1024px) {
    ${size({ width: rem(56), height: rem(2) })}
    margin:0 ${rem(16)};
  }
`;
