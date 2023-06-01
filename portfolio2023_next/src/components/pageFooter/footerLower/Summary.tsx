// styled components
import {
  FooterInfoTitle,
  FooterSummary,
  FooterSummaryDesc,
} from "@/styles/styled/components/pageFooter";

export default function FooterSummaryContainer() {
  return (
    <FooterSummary>
      <FooterInfoTitle key={`footerSummary`}>Ryu, Daehyeon</FooterInfoTitle>
      <FooterSummaryDesc key={`footerSummary_0`}>
        UIUX Engineering
      </FooterSummaryDesc>
      <FooterSummaryDesc key={`footerSummary_1`}>
        Front-end Development
      </FooterSummaryDesc>
      <FooterSummaryDesc key={`footerSummary_2`}>
        based in Daejeon, South Korea
      </FooterSummaryDesc>
      <FooterSummaryDesc key={`footerSummary_3`}>
        4+ years of experience
      </FooterSummaryDesc>
    </FooterSummary>
  );
}
