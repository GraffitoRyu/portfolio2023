"use client";

import styled from "styled-components";

// style
import { size } from "../preset/mixins";

// util
import { rem } from "@/util/unit";

export const DepthItem = styled.li`
  font-size: 0;
  &:before {
    content: "";
    display: inline-block;
    ${size({ w: rem(8), h: rem(8) })}
    border-radius:50%;
    margin: ${rem(8)} ${rem(16)} 0;
  }
`;

export const ResponsiveBr = styled.br`
  display: none;
  @media only screen and (min-width: 1024px) {
    display: inline;
  }
`;
