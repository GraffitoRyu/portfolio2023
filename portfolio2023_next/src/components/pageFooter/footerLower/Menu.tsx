import { styled } from "styled-components";

// components
import ContactBtn from "./footerBtn/ContactBtn";
import SitemapBtn from "./footerBtn/SitemapBtn";

// style
import { FooterInfoItem, FooterInfoTitle } from "@/styles/styled/footer";

// data
import { SitemapType, sitemapData } from "@/data/sitemap";

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
        <FooterMenuItem
          key={`footerMenu_${category}_${Math.floor(
            Math.random() * 1000000000
          )}_${i}`}
        >
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
