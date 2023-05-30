import { rem } from "@/util/unit";
import { styled } from "styled-components";

const FooterHeader = styled.header`
  margin-bottom: ${rem(80)};
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 960px) {
    margin-bottom: ${rem(80)};
  }
  @media only screen and (min-width: 1280px) {
    margin-bottom: ${rem(160)};
  }
`;
const FooterTitle = styled.h2`
  font-size: ${rem(160)};
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 960px) {
    margin-bottom: ${rem(114)};
  }
  @media only screen and (min-width: 1280px) {
    margin-bottom: ${rem(240)};
  }
`;
export default function FooterUpperContainer() {
  return (
    <FooterHeader>
      <FooterTitle>
        <span>Let's work</span>
        <span>together</span>
      </FooterTitle>
    </FooterHeader>
  );
}
