"use client";

import styled from "styled-components";

// style
import { sizePreset } from "../preset/size";
import { flex, font, position, size } from "../preset/mixins";

// util
import { rem } from "@/util/unit";

export const HeaderContainer = styled.header`
  ${position({ type: "sticky", top: 0, left: 0 })}
  width:100%;
  z-index: 2000;
  pointer-events: none;
`;

export const StyledHeaderWrap = styled.div`
  ${flex({ std: "start" })}
  ${size({
    w: "100%",
    h: sizePreset.btn.mobile,
    p: sizePreset.common.padding,
  })}
  @media only screen and (min-width:1024px) {
    height: ${rem(sizePreset.btn.pc + sizePreset.common.padding * 2)};
  }
`;

export const TimerContainer = styled.div`
  ${flex({})}
  ${size({ h: "100%", p: [0, 40, 0, 2] })}
  border-top: ${rem(4)} solid ${({ theme }) => theme.timer.bar};
  border-bottom: ${rem(4)} solid transparent;
  color: ${({ theme }) => theme.timer.text};
  ${font({
    size: 24,
    height: "1em",
    weight: 500,
  })}
  time {
  }
`;

export const TimeRegion = styled.strong`
  ${flex({})}
  &:after {
    content: "/";
    margin: 0 ${rem(16)};
  }
`;
