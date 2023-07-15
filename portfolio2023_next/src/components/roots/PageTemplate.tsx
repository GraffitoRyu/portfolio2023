import { ReactNode } from "react";

// components
import ScrollContainer from "./ScrollContainer";
import PageStickyContainer from "./PageStickyContainer";
import PageFooter from "@/components/pageFooter/PageFooter";

export default function PageTemplate({ children }: { children: ReactNode }) {
  return (
    <ScrollContainer>
      <PageStickyContainer>{children}</PageStickyContainer>
      <PageFooter />
    </ScrollContainer>
  );
}
