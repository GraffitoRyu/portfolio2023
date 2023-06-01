"use client";

// components
import FooterUpperContainer from "./FooterUpper";
import FooterLowerContainer from "./FooterLower";

// styled components
import {
  FooterContainer,
  FooterWrap,
} from "@/styles/styled/components/pageFooter";

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
