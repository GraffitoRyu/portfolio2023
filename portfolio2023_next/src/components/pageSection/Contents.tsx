import { ReactNode } from "react";

// style components
import { Contents } from "@/styles/styled/components/PageSection";

export default function SectionContents({
  children,
  full,
}: {
  children: ReactNode;
  full?: boolean;
}) {
  return <Contents className={`${full ? "full" : ""}`}>{children}</Contents>;
}
