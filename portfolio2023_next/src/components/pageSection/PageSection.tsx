import React from "react";

// style components
import { PageSectionContainer } from "@/styles/styled/components/pageSection";

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
  return (
    <PageSectionContainer className={sectionClass.join(" ")}>
      {children}
    </PageSectionContainer>
  );
}
