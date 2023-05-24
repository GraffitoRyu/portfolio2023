import React from "react";
import { styled } from "styled-components";

// util
import { rem } from "@/util/unit";

// style
import { size } from "@/styles/styled/mixins";

type SectionHeaderTypes = {
  empty?: boolean;
  title?: string;
  desc?: string[];
};
type SectionProps = {
  page?: string;
  code?: string;
  header?: SectionHeaderTypes;
  contents: JSX.Element;
};

const Section = styled.section`
  ${size({ width: "100%" })}
`;

export default function PageSection({
  page,
  code,
  header,
  contents,
}: SectionProps) {
  return (
    <Section className={`page-section`}>
      {header ? <SectionHeader {...header} /> : ""}
      <div className="section-contents">{contents}</div>
    </Section>
  );
}

const HeaderTitle = styled.h2`
  margin-bottom: ${rem(80)};
  font-size: ${rem(32)};
`;
const HeaderDesc = styled.p`
  font-size: ${rem(48)};
  line-height: 1.5em;
`;

function SectionHeader({ empty, title, desc }: SectionHeaderTypes) {
  return (
    <header className="section-header">
      {empty ? (
        ""
      ) : (
        <>
          <HeaderTitle className="capitalize">{title}</HeaderTitle>
          <HeaderDesc>
            {desc?.map((d, i) => (
              <React.Fragment key={`desc_${i}`}>
                <span>{d}</span>
                {i < desc.length - 1 ? <br /> : ""}
              </React.Fragment>
            ))}
          </HeaderDesc>
        </>
      )}
    </header>
  );
}
