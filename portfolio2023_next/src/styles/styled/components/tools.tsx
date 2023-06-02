"use client";

import { styled } from "styled-components";

// style
import { flex } from "../preset/mixins";

// util
import { rem } from "@/util/unit";

export const ToolsList = styled.ul`
  ${flex({ std: "start", wrap: "wrap" })}
  width: ${`calc(100% + ${rem(160)})`};
  margin: 0 ${rem(-80)};
  padding-bottom: ${rem(240)};
  @media only screen and (min-width: 1024px) {
    padding-right: ${rem(240)};
    padding-bottom: 0;
  }
`;

export const ToolsItem = styled.li`
  padding: 0 ${rem(80)};
  margin-bottom: ${rem(64)};
  color: ${({ theme }) => theme.tools.text};
  font-size: ${rem(40)};
  font-weight: 700;
  line-height: 1.6em;
`;
