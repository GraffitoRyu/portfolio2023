"use client";

import React from "react";
import { styled } from "styled-components";

// util
import { rem } from "@/util/unit";

type SectionHeaderTypes = {
  empty?: boolean;
  title?: string;
  desc?: string[];
};

const HeaderTitle = styled.h2`
  margin-bottom: ${rem(80)};
  font-size: ${rem(32)};
`;
const HeaderDesc = styled.p`
  font-size: ${rem(48)};
  line-height: 1.5em;
`;

export default function SectionHeader({
  empty,
  title,
  desc,
}: SectionHeaderTypes) {
  return (
    <header className="section-header">
      {empty ? (
        ""
      ) : (
        <>
          <HeaderTitle className="capitalize">{title}</HeaderTitle>
          <HeaderDesc>
            {desc?.map((d, i) => (
              <React.Fragment key={`sectionHeaderDesc_${i}`}>
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
