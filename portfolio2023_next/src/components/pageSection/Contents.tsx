import React from "react";

// style components
import { Contents } from "@/styles/styled/components/pageSection";

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
