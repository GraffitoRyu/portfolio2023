import { ReactNode } from "react";

// components
import PageHeader from "@/components/pageHeader/PageHeader";
import PageFooter from "@/components/pageFooter/PageFooter";
import ScrollContainer from "./ScrollContainer";

// style components
import { StickyContainer } from "@/styles/styled/components/Page";

export default function PageTemplate({ children }: { children: ReactNode }) {
  return (
    <ScrollContainer>
      <StickyContainer className="sticky-container">
        <PageHeader />
        {children}
      </StickyContainer>
      <PageFooter />
    </ScrollContainer>
  );
}
