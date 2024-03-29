// components
import SitemapBtn from "./gnb/SitemapBtn";
import ExternalBtn from "./gnb/ExternalBtn";
import ThemeContainer from "./theme/Container";

// style components
import { GnbCommonStyle, GnbContainer } from "@/styles/styled/components/Gnb";

//type
import { SitemapType } from "@/types/sitemap";

// data
import { sitemapData } from "@/data/sitemap";

const gnbData: SitemapType[] | undefined = sitemapData.filter(
  (d: SitemapType) => d.header && !d.external,
);
const extData: SitemapType[] | undefined = sitemapData.filter(
  (d: SitemapType) => d.header && d.external,
);

export default function Gnb() {
  return (
    <GnbContainer className="gnb">
      <GnbCommonStyle />
      {gnbData?.map((d: SitemapType) => (
        <SitemapBtn
          key={`sitemapMenu_${d.code}_${Math.floor(Math.random() * 100000)}`}
          {...d}
        />
      )) ?? ""}
      {<ThemeContainer />}
      {extData?.map((d: SitemapType) => (
        <ExternalBtn
          key={`externalLink_${d.code}_${Math.floor(Math.random() * 100000)}`}
          {...d}
        />
      )) ?? ""}
    </GnbContainer>
  );
}
