"use client";

import styled from "styled-components";

// style
import { size } from "../preset/mixins";

export const DepthItem = styled.li`
  font-size: 0;
  &:before {
    content: "";
    display: inline-block;
    ${size({ w: 8, h: 8, m: [0, 16, 0], r: "50%" })}
  }
`;

export const ResponsiveBr = styled.br`
  display: none;
  @media only screen and (min-width: 1024px) {
    display: inline;
  }
`;
