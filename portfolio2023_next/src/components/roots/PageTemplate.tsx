import { ReactNode } from "react";

// components
import PageHeader from "@/components/pageHeader/PageHeader";
import PageFooter from "@/components/pageFooter/PageFooter";

// style components
import {
  ScrollContainer,
  StickyContainer,
} from "@/styles/styled/components/page";

export default function PageTemplate({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollContainer>
        <StickyContainer>
          <PageHeader />
          {children}
        </StickyContainer>
        <PageFooter />
      </ScrollContainer>
    </>
  );
}
