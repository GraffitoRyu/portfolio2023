// components
import SitemapBtn from "./gnb/SitemapBtn";
import ExternalBtn from "./gnb/ExternalBtn";
import ThemeContainer from "./theme/Container";

// style components
import {
  GnbCommonStyle,
  StyledGnbContainer,
} from "@graffitoryu/ui/product/styles/styled/components/Gnb";

// data
import { sitemap } from "@graffitoryu/preset-data";

export default function Gnb() {
  const { portfolio } = sitemap;

  const gnbData = portfolio.filter(d => d.kind === "route");
  const extData = portfolio.filter(d => d.kind === "external");

  return (
    <StyledGnbContainer className="gnb">
      <GnbCommonStyle />
      {gnbData.map(d => (
        <SitemapBtn {...d} key={`header/route/${d.key}`} />
      ))}
      {<ThemeContainer />}
      {extData.map(d => (
        <ExternalBtn {...d} key={`header/external/${d.key}`} />
      ))}
    </StyledGnbContainer>
  );
}
