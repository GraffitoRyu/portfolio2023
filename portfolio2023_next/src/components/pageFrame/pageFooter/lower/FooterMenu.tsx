// components
import FooterLink from "./FooterLink";

// style components
import {
  FooterMenuContents,
  FooterMenuItem,
  FooterMenuTitle,
} from "@/styles/styled/components/PageFooter";

// types
import { SitemapType } from "@/types/sitemap";

export default function FooterMenu({
  title,
  category,
  data,
}: {
  title: string;
  category: string;
  data: SitemapType[];
}) {
  return (
    <FooterMenuItem>
      <FooterMenuTitle>{title}</FooterMenuTitle>
      <FooterMenuContents className={`${category}-menu`}>
        {data.map((d: SitemapType, i: number) => (
          <FooterLink key={`footerLink_${d.code}_${i}`} {...d} />
        ))}
      </FooterMenuContents>
    </FooterMenuItem>
  );
}
