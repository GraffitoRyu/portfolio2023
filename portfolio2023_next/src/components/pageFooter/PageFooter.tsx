"use client";

import { styled } from "styled-components";

// components
import FooterUpperContainer from "./FooterUpper";
import FooterMenuContainer from "./FooterMenu";

// style
import { rem } from "@/util/unit";
import { flex } from "@/styles/styled/mixins";

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.bg};
`;

const FooterContents = styled.div`
  border-top: 1px solid ${({ theme }) => theme.footer.divideLine};
`;
const FooterSummary = styled.dl``;
export default function PageFooter() {
  return (
    <FooterContainer className="pager-footer w-full h-screen flex items-center">
      <FooterUpperContainer />
      <FooterContents>
        <FooterSummary>
          <dt>Ryu, Daehyeon</dt>
          <dd>UIUX Engineering</dd>
          <dd>Front-end Development</dd>
          <dd>based in Daejeon, South Korea</dd>
          <dd>4+ years of experience</dd>
        </FooterSummary>
        <FooterMenuContainer title="portfolio" category="header" />
        <FooterMenuContainer title="contact" category="contact" />
      </FooterContents>
    </FooterContainer>
  );
}
