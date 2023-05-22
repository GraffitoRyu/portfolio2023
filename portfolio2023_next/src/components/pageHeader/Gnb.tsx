import { styled } from "styled-components";

// components
import SitemapBtn from "./gnb/SitemapBtn";
import ExternalBtn from "./gnb/ExternalBtn";
import ThemeContainer from "./theme/Container";

// data
import { SitemapType, sitemapData } from "@/data/sitemap";

// util
import rem from "@/util/rem";

const gnbData: SitemapType[] | undefined = sitemapData.filter(
  d => d.header && !d.external
);
const extData: SitemapType[] | undefined = sitemapData.filter(
  d => d.header && d.external
);

const NavContainer = styled.nav`
  a,
  button {
    pointer-events: auto;
  }
  .util-item {
    margin-left: ${rem(24)};
  }
`;

export default function Gnb() {
  return (
    <NavContainer className="gnb ml-auto flex items-center">
      {gnbData?.map(d => <SitemapBtn key={d.code} {...d} />) ?? ""}
      {<ThemeContainer />}
      {extData?.map(d => <ExternalBtn key={d.code} {...d} />) ?? ""}
    </NavContainer>
  );
}
