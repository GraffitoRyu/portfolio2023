"use client";

import styled from "styled-components";

// style
import { flex, font, size } from "../preset/mixins";

// util
import { rem } from "@/util/unit";

export const PeriodContainer = styled.div`
  ${flex({ std: "start" })}
  ${font({
    size: 32,
    weight: 400,
    height: "1em",
    whitespace: "nowrap",
  })}
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(20)};
  }
`;

export const Bar = styled.span`
  ${size({ w: 80, h: 1, m: [0, 32] })}
  &:before {
    content: "";
    display: block;
    ${size({ w: "100%", h: "100%" })}
  }
  @media only screen and (min-width: 1024px) {
    ${size({ w: 56, h: 2, m: [0, 16] })}
  }
`;
