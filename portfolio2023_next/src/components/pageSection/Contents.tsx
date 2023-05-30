"use client";

import React from "react";
import { styled } from "styled-components";

// util
import { rem } from "@/util/unit";

const Contents = styled.div`
  padding-top: 0;
  @media only screen and (min-width: 1024px) {
    padding-top: ${rem(40 + 80)};
  }
`;

export default function SectionContents({
  children,
  full,
}: {
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <Contents className={`section-contents ${full ? "w-full" : "w-1/2"}`}>
      {children}
    </Contents>
  );
}
