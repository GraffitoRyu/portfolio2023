"use client";

import styled from "styled-components";

// style
import { flex, position } from "../preset/mixins";

// util
import { rem } from "@/util/unit";

export const HeaderContainer = styled.header`
  ${position({ type: "sticky", top: 0, left: 0 })}
  ${flex({ std: "start" })}
  width:100%;
  padding: ${rem(80)};
  font-size: ${rem(20)};
  z-index: 2000;
  pointer-events: none;
  transform: translateY(0px);
`;

export const TimerContainer = styled.div`
  height: ${rem(32)};
  border-top: ${rem(4)} solid ${({ theme }) => theme.timer.bar};
  border-bottom: ${rem(4)} solid transparent;
  padding: 0 ${rem(40)} 0 ${rem(2)};
  time {
    font-weight: 500;
    color: ${({ theme }) => theme.timer.text};
  }
`;
