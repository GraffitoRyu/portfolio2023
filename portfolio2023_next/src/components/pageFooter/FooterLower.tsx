import { styled } from "styled-components";

// components
import FooterMenuContainer from "./footerLower/Menu";
import FooterSummaryContainer from "./footerLower/Summary";

// style
import { flex, size } from "@/styles/styled/preset/mixins";

// util
import { rem } from "@/util/unit";

const FooterContents = styled.div`
  ${flex({ std: "start", cross: "start" })}
  ${size({ width: "100%", pt: rem(80), mt: "auto" })}
  border-top: 1px solid ${({ theme }) => theme.footer.divideLine};
`;

export default function FooterLowerContainer() {
  return (
    <FooterContents>
      <FooterSummaryContainer />
      <FooterMenuContainer title="portfolio" category="header" />
      <FooterMenuContainer title="contact" category="contact" />
    </FooterContents>
  );
}
