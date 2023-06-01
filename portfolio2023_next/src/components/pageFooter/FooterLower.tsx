// components
import FooterMenuContainer from "./footerLower/Menu";
import FooterSummaryContainer from "./footerLower/Summary";

// styled components
import { FooterContents } from "@/styles/styled/components/pageFooter";

export default function FooterLowerContainer() {
  return (
    <FooterContents>
      <FooterSummaryContainer />
      <FooterMenuContainer title="portfolio" category="header" />
      <FooterMenuContainer title="contact" category="contact" />
    </FooterContents>
  );
}
