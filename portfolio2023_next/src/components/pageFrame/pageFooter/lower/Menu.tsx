// components
import FooterLink from "./LinkBtn";

// style components
import {
  StyledFooterMenuContents,
  StyledFooterMenuItem,
  StyledFooterMenuTitle,
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
    <StyledFooterMenuItem>
      <StyledFooterMenuTitle>{title}</StyledFooterMenuTitle>
      <StyledFooterMenuContents className={`${category}-menu`}>
        {data.map(d => (
          <FooterLink {...d} key={`footer/menu/${d.key}`} />
        ))}
      </StyledFooterMenuContents>
    </StyledFooterMenuItem>
  );
}
