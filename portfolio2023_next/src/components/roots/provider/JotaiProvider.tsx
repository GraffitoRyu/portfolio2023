import { Provider } from "jotai";

/**
 * Jotai 상태 공급자
 * - Roots > Provider; Jotai
 * @component
 */
export default function JotaiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider>{children}</Provider>;
}
