// components
import PortfolioSummary from "./PortfolioSummary";
import FooterMenu from "./FooterMenu";

// style components
import {
  FooterLowerContainer,
  FooterMenuColumn,
} from "@/styles/styled/components/PageFooter";

// types
import { SitemapType } from "@/types/sitemap";

// data
import { sitemapData } from "@/data/sitemap";

const contactData: SitemapType[] = sitemapData.filter(d => d.contact);
const resumeData: SitemapType[] = sitemapData.filter(d => d.resume);
const footerNavData: SitemapType[] = sitemapData.filter(d => d.header);
const recruitData: SitemapType[] = sitemapData.filter(d => d.recruit);

export default function FooterLower() {
  return (
    <FooterLowerContainer>
      <FooterMenuColumn>
        <FooterMenu title="Portfolio" category="nav" data={footerNavData} />
        <FooterMenu title="Recruitment" category="recruit" data={recruitData} />
      </FooterMenuColumn>
      <FooterMenuColumn className="none-page">
        <FooterMenu title="Contact" category="contact" data={contactData} />
        <FooterMenu title="Resume" category="resume" data={resumeData} />
      </FooterMenuColumn>
      <PortfolioSummary />
    </FooterLowerContainer>
  );
}
