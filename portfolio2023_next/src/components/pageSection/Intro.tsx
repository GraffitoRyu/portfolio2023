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
  font-weight: 300;
  font-size: ${rem(48)};
  line-height: ${rem(64)};
  color: ${({ theme }) => theme.introSection.title};
  strong {
    font-weight: 500;
    color: ${({ theme }) => theme.introSection.strong};
  }
`;

const IntroDesc = styled.p`
  font-size: ${rem(32)};
  line-height: ${rem(56)};
  font-weight: 400;
  color: ${({ theme }) => theme.introSection.desc};
`;

export default function PageIntro({ title, desc }: IntroTypes) {
  return (
    <div>
      <IntroTitle>{<ParseDescNewLine data={title} />}</IntroTitle>
      <IntroDesc>{<ParseDescNewLine data={desc} />}</IntroDesc>
    </div>
  );
}
