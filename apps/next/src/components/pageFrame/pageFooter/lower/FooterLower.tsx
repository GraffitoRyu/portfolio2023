// components
import PortfolioSummary from "./Summary";
import FooterMenu from "./Menu";

// style components
import {
  StyledFooterLowerContainer,
  StyledFooterMenuColumn,
} from "@/styles/styled/components/PageFooter";

// data
import { sitemap } from "@portfolio/preset-data";

export default function FooterLower() {
  const { portfolio, recruit, contact, download } = sitemap;

  return (
    <StyledFooterLowerContainer>
      <StyledFooterMenuColumn className="link-page">
        <FooterMenu title="Portfolio" category="nav" data={portfolio} />
        <FooterMenu title="Recruitment" category="recruit" data={recruit} />
      </StyledFooterMenuColumn>
      <StyledFooterMenuColumn className="none-page">
        <FooterMenu title="Contact" category="contact" data={contact} />
        <FooterMenu title="Resume" category="resume" data={download} />
      </StyledFooterMenuColumn>
      <PortfolioSummary />
    </StyledFooterLowerContainer>
  );
}
