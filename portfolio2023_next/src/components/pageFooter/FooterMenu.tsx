"use client";

import {
  ContactStateTypes,
  SitemapStateTypes,
  SitemapType,
  sitemapData,
} from "@/data/sitemap";
import { SvgFill, flex } from "@/styles/styled/mixins";
import { rem } from "@/util/unit";
import { styled } from "styled-components";
import ContactBtn from "./gnb/ContactBtn";
import SitemapBtn from "./gnb/SitemapBtn";
import { useState } from "react";

const FooterMenu = styled.dl``;

const FooterInfoTitle = styled.dt`
  color: ${({ theme }) => theme.footer.infoTitle};
  font-size: ${rem(32)};
  font-family: var(--serif-kr);
  font-weight: 700;
  line-height: 1em;
  letter-spacing: 0;
  @media only screen and (min-width: 768px) {
    font-size: ${rem(24)};
  }
  @media only screen and (min-width: 960px) {
  }
  @media only screen and (min-width: 1280px) {
  }
`;

const FooterInfoItem = styled.dd`
  font-weight: 400;
  a {
    ${flex({ std: "start" })}
  }
  span {
    color: ${({ theme }) => theme.footer.btn};
    margin-right: ${rem(10)};
    margin-top: ${rem(-4)};
  }
  ${({ theme }) => SvgFill(theme.footer.icon)};
  &.hover {
    span {
      color: ${({ theme }) => theme.footer.btnHover};
    }
    ${({ theme }) => SvgFill(theme.footer.iconHover)};
  }
`;

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
  const hoverState: ContactStateTypes | SitemapStateTypes = Object.fromEntries(
    data.map((d: SitemapType) => [d.code, ""])
  );
  const [hover, setHover] = useState<ContactStateTypes | SitemapStateTypes>(
    hoverState
  );

  return (
    <FooterMenu>
      <FooterInfoTitle>{title}</FooterInfoTitle>
      {data.map((d: SitemapType, i: number) => (
        <FooterInfoItem
          className={`${hover[d.code]}`}
          key={`footerMenu_${category}_${i}`}
          onMouseEnter={() =>
            setHover(prev => ({ ...prev, [d.code]: "hover" }))
          }
          onMouseLeave={() => setHover(prev => ({ ...prev, [d.code]: "" }))}
        >
          {category == "contact" ? (
            <ContactBtn {...d} />
          ) : (
            <SitemapBtn {...d} />
          )}
        </FooterInfoItem>
      ))}
    </FooterMenu>
  );
}
