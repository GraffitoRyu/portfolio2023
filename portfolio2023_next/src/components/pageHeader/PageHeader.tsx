"use client";

import { styled } from "styled-components";

// components
import Gnb from "./Gnb";
import TimeDisplay from "./TimeDisplay";

// util
import { rem } from "@/util/unit";

const HeaderContainer = styled.header`
  padding: ${rem(80)};
  font-size: ${rem(20)};
  z-index: 2000;
  pointer-events: none;
  transform: translateY(0px);
`;

export default function PageHeader() {
  return (
    <HeaderContainer
      as="header"
      className="fixed top-0 left-0 w-full flex items-center"
    >
      <TimeDisplay />
      <Gnb />
    </HeaderContainer>
  );
}
