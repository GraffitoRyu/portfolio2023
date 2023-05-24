// components
import SitemapBtn from "./gnb/SitemapBtn";
import ExternalBtn from "./gnb/ExternalBtn";
import ThemeContainer from "./theme/Container";

// data
import { SitemapType, sitemapData } from "@/data/sitemap";

// style
import { GnbCommonStyle } from "@/styles/styled/gnb";

const gnbData: SitemapType[] | undefined = sitemapData.filter(
  d => d.header && !d.external
);
const extData: SitemapType[] | undefined = sitemapData.filter(
  d => d.header && d.external
);

export default function Gnb() {
  return (
    <nav className="gnb ml-auto flex items-center">
      <GnbCommonStyle />
      {gnbData?.map(d => <SitemapBtn key={d.code} {...d} />) ?? ""}
      {<ThemeContainer />}
      {extData?.map(d => <ExternalBtn key={d.code} {...d} />) ?? ""}
    </nav>
  );
}
