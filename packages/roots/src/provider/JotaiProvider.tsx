"use client";

// import { Provider } from "jotai";
// import { useHydrateAtoms } from "jotai/react/utils";
// import { queryClientAtom } from "jotai-tanstack-query";
// import { getQueryClient } from "./ReactQueryProvider";
import { RenderingBoundary } from "jotai-ssr";

function JotaiHydrateAtoms({ children }: { children: React.ReactNode }) {
  // useHydrateAtoms([[queryClientAtom, getQueryClient()]]);
  return children;
}

/**
 * Jotai 상태 공급자
 * @component
 */
export default function JotaiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RenderingBoundary>
      <JotaiHydrateAtoms>{children}</JotaiHydrateAtoms>
    </RenderingBoundary>
  );
}
