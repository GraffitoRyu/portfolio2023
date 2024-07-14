"use client";

import { Suspense } from "react";

// components
import TechStackList from "./List";

/**
 * 프로필 > 기술스택; 기술스택 컨텐츠
 * @component
 */
export default function TechStacksContainer() {
  return (
    <div className="stack-container">
      <Suspense fallback={null}>
        <TechStackList />
      </Suspense>
    </div>
  );
}
