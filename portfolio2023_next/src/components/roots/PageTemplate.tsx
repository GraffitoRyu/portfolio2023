import { ReactNode } from "react";

// components
import ScrollContainer from "./ScrollContainer";
import PageFooter from "@/components/pageFooter/PageFooter";

// style components

import PageStickyContainer from "./PageStickyContainer";

export default function PageTemplate({ children }: { children: ReactNode }) {
  return (
    <ScrollContainer>
      <PageStickyContainer>{children}</PageStickyContainer>
      <PageFooter />
    </ScrollContainer>
  );
}
