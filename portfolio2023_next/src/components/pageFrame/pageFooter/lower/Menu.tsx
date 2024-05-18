// components
import FooterLink from "./LinkBtn";

// style components
import {
  FooterMenuContents,
  FooterMenuItem,
  FooterMenuTitle,
} from "@/styles/styled/components/PageFooter";

export default function FooterMenu({
  title,
  category,
  data,
}: {
  title: string;
  category: string;
  data: SitemapDataType[];
}) {
  return (
    <FooterMenuItem>
      <FooterMenuTitle>{title}</FooterMenuTitle>
      <FooterMenuContents className={`${category}-menu`}>
        {data.map(d => (
          <FooterLink {...d} key={`footer/menu/${d.key}`} />
        ))}
      </FooterMenuContents>
    </FooterMenuItem>
  );
}
