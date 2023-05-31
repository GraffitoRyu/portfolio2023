"use client";

import { styled } from "styled-components";

// components
import FooterUpperContainer from "./FooterUpper";
import FooterLowerContainer from "./FooterLower";

// style
import { flex, position, size } from "@/styles/styled/mixins";

// util
import { rem } from "@/util/unit";

const FooterContainer = styled.footer`
  ${position({ type: "relative", z: 600 })}
  ${size({
    width: "100%",
    height: typeof window === "undefined" ? "100vh" : `${window.innerHeight}px`,
    padding: rem(80),
  })}
  background-color: ${({ theme }) => theme.footer.bg};
  overflow: hidden;
`;

const FooterWrap = styled.div`
  ${flex({ dir: "column", std: "start", cross: "start" })}
  ${size({ width: "100%", height: "100%" })}
`;

export default function PageFooter() {
  return (
    <FooterContainer className="pager-footer">
      <FooterWrap>
        <FooterUpperContainer />
        <FooterLowerContainer />
      </FooterWrap>
    </FooterContainer>
  );
}
