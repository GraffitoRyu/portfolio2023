"use client";

import React from "react";
import { styled } from "styled-components";

type IntroTypes = {
  title: [string | React.ExoticComponent];
  desc: string[];
};

const IntroContainer = styled.div``;

export default function PageIntro({ title, desc }: IntroTypes) {
  return (
    <IntroContainer>
      <h2>
        {title.map((t: string | React.ExoticComponent, i: number) => (
          <React.Fragment key={`introTItle_${i}`}>
            <span>{t}</span>
            {i < title.length - 1 ? <br /> : ""}
          </React.Fragment>
        ))}
      </h2>
      <p>
        {desc.map((d: string, i: number) => (
          <React.Fragment key={`introDesc_${i}`}>
            <span>{d}</span>
            {i < desc.length - 1 ? <br /> : ""}
          </React.Fragment>
        ))}
      </p>
    </IntroContainer>
  );
}
