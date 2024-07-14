"use client";

import { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

/**
 * Root/Library; Styled-component SSR을 위한 registry 등록
 * @component
 * @desc
 * - 서버에서 렌더링된 스타일을, 클라이언트에서도 재사용하기 위한 처리
 * - 재사용하지 않으면, 브라우저에서 스타일 렌더링을 위한 깜빡임 가능성이 있음
 * - ServerStyleSheet를 통해 서버 스타일을 수집 -> 클라이언트에 전달
 * - 초기 페이지 로딩 시 성능 최적화
 */
export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
