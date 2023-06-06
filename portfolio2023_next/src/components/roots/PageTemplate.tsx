import { ReactNode } from "react";

// components
import PageHeader from "@/components/pageHeader/PageHeader";
import PageFooter from "@/components/pageFooter/PageFooter";

// style components
import { StickyContainer } from "@/styles/styled/components/Page";
import ScrollContainer from "./ScrollContainer";

export default function PageTemplate({ children }: { children: ReactNode }) {
  return (
    <ScrollContainer>
      <StickyContainer>
        <PageHeader />
        {children}
      </StickyContainer>
      <PageFooter />
    </ScrollContainer>
  );
}
