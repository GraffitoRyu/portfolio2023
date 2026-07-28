"use client";

import styled from "styled-components";
import { media } from "@graffitoryu/ui";

// style
import { size } from "../preset/mixins";

export const StyledDepthItem = styled.li`
  font-size: 0;
  &:before {
    content: "";
    display: inline-block;
    ${size({ w: 8, h: 8, m: [0, 16, 0], r: "50%" })}
  }
`;

export const StyledResponsiveBr = styled.br`
  display: none;
  @media only screen and ${media.min.desktop} {
    display: inline;
  }
`;
