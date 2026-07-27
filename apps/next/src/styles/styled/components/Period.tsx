"use client";

import styled from "styled-components";
import { mediaQueryTokens } from "@portfolio/ui";

// style
import { flex, font, size } from "../preset/mixins";

export const StyledPeriodContainer = styled.div`
  ${flex({ std: "flex-start" })}
  ${font({
    size: 32,
    weight: 400,
    height: "1em",
    whitespace: "nowrap",
  })}
  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${font({ size: 20 })}
  }
`;

export const StyledPeriodBar = styled.span`
  ${size({ w: 80, h: 1, m: [0, 32] })}
  &:before {
    content: "";
    display: block;
    ${size({ w: "100%", h: "100%" })}
  }
  @media only screen and ${mediaQueryTokens.min.desktop} {
    ${size({ w: 56, h: 2, m: [0, 16] })}
  }
`;
