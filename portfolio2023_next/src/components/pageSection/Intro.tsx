"use client";

import React from "react";
import { styled } from "styled-components";

// util components
import ParseDescNewLine from "@/hooks/ParseDescNewLine";

type IntroTypes = {
  title: Array<string | JSX.Element>;
  desc: string[];
};

const IntroContainer = styled.div``;

export default function PageIntro({ title, desc }: IntroTypes) {
  return (
    <IntroContainer>
      <h2>{<ParseDescNewLine data={title} />}</h2>
      <p>{<ParseDescNewLine data={desc} />}</p>
    </IntroContainer>
  );
}
