"use client";

import { styled } from "styled-components";

// style
import { size } from "../preset/mixins";

// util
import { rem } from "@/util/unit";

export const DepthItem = styled.li`
  font-size: 0;
  &:before {
    content: "";
    display: inline-block;
    ${size({ width: rem(8), height: rem(8) })}
    border-radius:50%;
    margin: ${rem(8)} ${rem(16)} 0;
  }
`;
