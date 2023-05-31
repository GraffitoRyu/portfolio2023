import { flex } from "@/styles/styled/mixins";
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
  ${flex({ dir: "column", cross: "start" })}
  font-size:0;
  font-weight: 700;

  span {
    font-size: ${rem(160)};
    line-height: 1em;
    &:nth-child(1) {
      color: transparent;
      -webkit-text-stroke: ${rem(1)} ${({ theme }) => theme.footer.titleBorder};
    }
    &:nth-child(2) {
      color: ${({ theme }) => theme.footer.titleFill};
    }
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 960px) {
    span {
      font-size: ${rem(114)};
    }
  }
  @media only screen and (min-width: 1280px) {
    span {
      font-size: ${rem(240)};
    }
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
