"use client";

import React from "react";
import { styled } from "styled-components";

// util
import { rem } from "@/util/unit";
import { position } from "@/styles/styled/mixins";

type SectionHeaderTypes = {
  empty?: boolean;
  title?: string;
  desc?: string[];
};

const Header = styled.header`
  width: 50%;
  @media only screen and (min-width: 1024px) {
    ${position({ type: "sticky", top: rem(80 * 2 + 32) })}
  }
`;
const HeaderTitle = styled.h2`
  margin-bottom: ${rem(32)};
  font-size: ${rem(48)};
  line-height: 1em;
  font-weight: 700;
  color: ${({ theme }) => theme.sectionHeader.title};
  @media only screen and (min-width: 1024px) {
    margin-bottom: ${rem(80)};
    font-size: ${rem(32)};
  }
`;
const HeaderDesc = styled.p`
  font-size: ${rem(32)};
  line-height: 1.5em;
  color: ${({ theme }) => theme.sectionHeader.desc};
  br {
    display: none;
  }
  span {
    word-break: break-all;
  }
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(64)};
    font-weight: 300;
    br {
      display: inline;
    }
  }
`;

export default function SectionHeader({
  empty,
  title,
  desc,
}: SectionHeaderTypes) {
  return (
    <Header className="section-header">
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
    </Header>
  );
}
