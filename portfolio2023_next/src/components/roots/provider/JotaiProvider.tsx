import { Provider } from "jotai";
import { ReactNode } from "react";

/**
 * Jotai 상태 공급자
 * - Roots > Provider; Jotai
 * @component
 */
export default function JotaiProvider({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>;
}
