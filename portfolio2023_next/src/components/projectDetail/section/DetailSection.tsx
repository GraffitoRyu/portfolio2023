import { ReactNode } from "react";

// style components
import { PDSection } from "@/styles/styled/components/ProjectDetail";

export default function DetailSection({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <PDSection className={`${className}`}>{children}</PDSection>;
}
