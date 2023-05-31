import { styled } from "styled-components";

// style
import {
  FooterInfoItem,
  FooterInfoTitle,
} from "@/styles/styled/components/footer";

// util
import { rem } from "@/util/unit";

const FooterSummary = styled.dl`
  margin-right: auto;
  margin-bottom: ${rem(160)};
  color: ${({ theme }) => theme.footer.infoDesc};
  @media only screen and (min-width: 768px) {
    margin-bottom: ${rem(80)};
  }
  @media only screen and (min-width: 960px) {
  }
  @media only screen and (min-width: 1280px) {
    margin-bottom: 0;
  }
`;
const FooterSummaryDesc = styled(FooterInfoItem)`
  font-weight: 300;
  letter-spacing: 0;
`;

export default function FooterSummaryContainer() {
  return (
    <FooterSummary>
      <FooterInfoTitle key={`footerSummary`}>Ryu, Daehyeon</FooterInfoTitle>
      <FooterSummaryDesc key={`footerSummary_0`}>
        UIUX Engineering
      </FooterSummaryDesc>
      <FooterSummaryDesc key={`footerSummary_1`}>
        Front-end Development
      </FooterSummaryDesc>
      <FooterSummaryDesc key={`footerSummary_2`}>
        based in Daejeon, South Korea
      </FooterSummaryDesc>
      <FooterSummaryDesc key={`footerSummary_3`}>
        4+ years of experience
      </FooterSummaryDesc>
    </FooterSummary>
  );
}
