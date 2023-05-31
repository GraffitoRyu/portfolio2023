import { styled } from "styled-components";

// components
import ContactBtn from "./footerBtn/ContactBtn";
import SitemapBtn from "./footerBtn/SitemapBtn";

// data
import { SitemapType, sitemapData } from "@/data/sitemap";
import { FooterInfoItem, FooterInfoTitle } from "@/styles/styled/footer";

const FooterMenu = styled.dl`
  width: 25%;
`;

const FooterMenuItem = styled(FooterInfoItem)``;

export default function FooterMenuContainer({
  title,
  category,
}: {
  title: string;
  category: string;
}) {
  const data: SitemapType[] = sitemapData.filter(
    (d: SitemapType) => d[category]
  );

  return (
    <FooterMenu>
      <FooterInfoTitle>{title}</FooterInfoTitle>
      {data.map((d: SitemapType, i: number) => (
        <FooterMenuItem key={`footerMenu_${category}_${i}`}>
          {category == "contact" ? (
            <ContactBtn {...d} />
          ) : (
            <SitemapBtn {...d} />
          )}
        </FooterMenuItem>
      ))}
    </FooterMenu>
  );
}
