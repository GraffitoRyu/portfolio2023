"use client";

import React from "react";
import { styled } from "styled-components";

// util components
import ParseDescNewLine from "@/hooks/ParseDescNewLine";
import { rem } from "@/util/unit";

type IntroTypes = {
  title: Array<string | JSX.Element>;
  desc: string[];
};

const IntroTitle = styled.h2`
  margin-bottom: ${rem(160)};
  color: ${({ theme }) => theme.introSection.title};
  font-size: ${rem(48)};
  line-height: ${rem(64)};
  font-weight: 300;
  strong {
    color: ${({ theme }) => theme.introSection.strong};
    font-weight: 500;
  }
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(48)};
    line-height: ${rem(64)};
  }
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(64)};
    line-height: ${rem(80)};
  }
`;

const IntroDesc = styled.p`
  color: ${({ theme }) => theme.introSection.desc};
  font-size: ${rem(32)};
  line-height: ${rem(56)};
  font-weight: 400;
  br {
    display: none;
  }
  span {
    display: inline-block;
  }
  @media only screen and (min-width: 640px) {
    font-size: ${rem(24)};
    line-height: ${rem(40)};
    br {
      display: inline;
    }
  }
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(32)};
    line-height: ${rem(56)};
  }
`;

export default function PageIntro({ title, desc }: IntroTypes) {
  return (
    <div>
      <IntroTitle>{<ParseDescNewLine data={title} />}</IntroTitle>
      <IntroDesc>{<ParseDescNewLine data={desc} />}</IntroDesc>
    </div>
  );
}
