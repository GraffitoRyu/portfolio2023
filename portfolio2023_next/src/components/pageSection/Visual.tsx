"use client";

import { styled } from "styled-components";

// util
import { rem } from "@/util/unit";
import { flex, size } from "@/styles/styled/mixins";

const VisualContainer = styled.div`
  ${size({ height: "50%" })}
  ${flex({ dir: "column", cross: "start" })}
  padding: 0 ${rem(80)};
  @media only screen and (min-width: 1024px) {
    ${size({
      width: "100%",
      height:
        typeof window !== "undefined" ? `${window.innerHeight}px` : "100vh",
    })}
  }
`;
const VisualTitle = styled.h1`
  ${flex({ dir: "column", cross: "start" })}
  font-size: 0;
`;
const VisualTitleLine = styled.span`
  color: transparent;
  font-size: ${rem(144)};
  font-weight: 500;
  line-height: 1em;
  white-space: nowrap;
  &:nth-child(1) {
    -webkit-text-stroke: ${rem(2)} #2d2d2d;
    /* -webkit-text-stroke: ${rem(1)} ${({ theme }) =>
      theme.visualSection.border}; */
    font-family: var(--serif-kr);
  }
  &:nth-child(2) {
    color: #1a1a1a;
    font-weight: 700;
    /* color: ${({ theme }) => theme.visualSection.fill}; */
  }
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(240)};
  }
`;

export default function PageVisual({ title }: { title: string[] }) {
  return (
    <VisualContainer>
      <VisualTitle>
        {title.map((t: string) => (
          <VisualTitleLine
            key={`visualTitle_${Math.floor(Math.random() * 1000)}_${t}`}
          >
            {t}
          </VisualTitleLine>
        ))}
      </VisualTitle>
    </VisualContainer>
  );
}
