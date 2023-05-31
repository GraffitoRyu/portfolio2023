import { styled } from "styled-components";

// style
import { FooterInfoItem, FooterInfoTitle } from "@/styles/styled/footer";

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
const FooterSummeryDesc = styled(FooterInfoItem)`
  font-weight: 300;
  letter-spacing: 0;
`;

export default function FooterSummaryContainer() {
  return (
    <FooterSummary>
      <FooterInfoTitle>Ryu, Daehyeon</FooterInfoTitle>
      <FooterSummeryDesc>UIUX Engineering</FooterSummeryDesc>
      <FooterSummeryDesc>Front-end Development</FooterSummeryDesc>
      <FooterSummeryDesc>based in Daejeon, South Korea</FooterSummeryDesc>
      <FooterSummeryDesc>4+ years of experience</FooterSummeryDesc>
    </FooterSummary>
  );
}
