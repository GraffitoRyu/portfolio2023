import { Suspense } from "react";

import StyledComponentsRegistry from "./lib/StyledComponentsRegistry";
import JotaiProvider from "./provider/JotaiProvider";
import ReactQueryProvider from "./provider/ReactQueryProvider";
import RouterEventDetector from "./lib/RouterEventsDetector";

/**
 * Next.js Root Layout에 적용할 Provider 및 유틸리티 도구 집합
 * @component
 * @param {object} props
 * @param {SystemLanguageType} [props.locale] 언어설정; "ko", "en"
 * @param {object} [props.systemThemeOptions] 시스템 테마 체크 옵션
 * @param {string[]} [props.systemThemeOptions.exceptPaths] 테마 체크 제외 경로
 * @param {React.ReactNode} props.children
 * @desc
 * - React Query
 * - Jotai
 * - Apollo GraphQL
 * - Airtable
 * - Modal / Draggable Modal
 * - System Theme Checker
 * - Router Event Detector
 */
export default function NextRoots({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <JotaiProvider>
        <StyledComponentsRegistry>
          {children}
          <Suspense fallback={null}>
            <RouterEventDetector />
          </Suspense>
        </StyledComponentsRegistry>
      </JotaiProvider>
    </ReactQueryProvider>
  );
}
