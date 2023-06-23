import { ReactNode } from "react";

// style components
import { PDSection } from "@/styles/styled/components/ProjectDetail";

export default function DetailSection({
  className,
  children,
  $windowHeight,
}: {
  className?: string;
  children: ReactNode;
  $windowHeight?: number;
}) {
  return (
    <PDSection className={`${className}`} $wh={$windowHeight}>
      {children}
    </PDSection>
  );
}
