"use client";

import { styled } from "styled-components";

// components
import Gnb from "./Gnb";
import TimeDisplay from "./TimeDisplay";

// util
import { rem } from "@/util/unit";
import { flex, position } from "@/styles/styled/mixins";

const HeaderContainer = styled.header`
  ${position({ type: "sticky", top: 0, left: 0 })}
  ${flex({ std: "start" })}
  width:100%;
  padding: ${rem(80)};
  font-size: ${rem(20)};
  z-index: 2000;
  pointer-events: none;
  transform: translateY(0px);
`;

export default function PageHeader() {
  return (
    <HeaderContainer as="header">
      <TimeDisplay />
      <Gnb />
    </HeaderContainer>
  );
}
