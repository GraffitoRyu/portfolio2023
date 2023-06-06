import { ReactNode } from "react";

// style components
import { PDSection } from "@/styles/styled/components/ProjectDetail";

export default function DetailSection({ children }: { children: ReactNode }) {
  return <PDSection>{children}</PDSection>;
}
