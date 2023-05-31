"use client";

import { ReactNode } from "react";
import { styled } from "styled-components";

// components
import PageHeader from "@/components/pageHeader/PageHeader";
import PageFooter from "@/components/pageFooter/PageFooter";
import PageTransition from "../roots/PageTransition";

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const StickyContainer = styled.div`
  position: relative;
  width: 100%;
`;

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
