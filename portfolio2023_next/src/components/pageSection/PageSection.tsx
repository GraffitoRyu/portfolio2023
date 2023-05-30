"use client";

import React from "react";
import { styled } from "styled-components";

// util
import { rem } from "@/util/unit";

const Section = styled.section`
  position: relative;
  width: 100%;
  &:not(.intro-section) {
    padding: ${rem(160)} ${rem(80)};
  }
`;

export default function PageSection({
  children,
  className,
  isVisual,
}: {
  children: React.ReactNode;
  className?: string;
  isVisual?: boolean;
}) {
  const sectionClass = [
    `page-section flex ${isVisual ? "flex-wrap" : "items-start"}`,
  ];
  if (className) sectionClass.push(className);
  return <Section className={sectionClass.join(" ")}>{children}</Section>;
}
