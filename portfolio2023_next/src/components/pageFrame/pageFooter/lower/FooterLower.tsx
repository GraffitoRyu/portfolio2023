// components
import PortfolioSummary from "./Summary";
import FooterMenu from "./Menu";

// style components
import {
  FooterLowerContainer,
  FooterMenuColumn,
} from "@/styles/styled/components/PageFooter";

// data
import sitemap from "@/data/sitemap";

export default function FooterLower() {
  const { portfolio, recruit, contact, download } = sitemap;

  return (
    <FooterLowerContainer>
      <FooterMenuColumn className="link-page">
        <FooterMenu title="Portfolio" category="nav" data={portfolio} />
        <FooterMenu title="Recruitment" category="recruit" data={recruit} />
      </FooterMenuColumn>
      <FooterMenuColumn className="none-page">
        <FooterMenu title="Contact" category="contact" data={contact} />
        <FooterMenu title="Resume" category="resume" data={download} />
      </FooterMenuColumn>
      <PortfolioSummary />
    </FooterLowerContainer>
  );
}
