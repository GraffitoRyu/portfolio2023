// "use client";

// import { useRef } from "react";
// import { useSetAtom } from "jotai";

// components
import PageHeader from "./pageHeader/PageHeader";

// style components
import { StyledStickyContainer } from "@/styles/styled/components/Page";

// // hook
// import useResizeObserver from "@/hooks/layout/useResizeObserver";

// // state
// import { scrollRefState } from "@/states/scroll";

export default function PageStickyContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  // const setScrollRef = useSetAtom(scrollRefState);
  // const containerRef = useRef<HTMLDivElement | null>(null);

  // useResizeObserver({
  //   ref: containerRef,
  //   callback: ({ height }) => {
  //     setScrollRef(prev => ({
  //       ...prev,
  //       stickyHeight: height || 0,
  //     }));
  //   },
  // });

  return (
    <StyledStickyContainer
      className="sticky-container"
      //  ref={containerRef}
    >
      <PageHeader />
      {children}
    </StyledStickyContainer>
  );
}
