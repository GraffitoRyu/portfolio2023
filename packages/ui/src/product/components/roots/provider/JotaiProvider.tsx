import { Provider } from "jotai";

/**
 * Root/Provider; Jotai 상태 공급자
 * @component
 */
export default function JotaiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider>{children}</Provider>;
}
