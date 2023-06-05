import { ReactNode } from "react";

// style components
import { ProjectDetailSection } from "@/styles/styled/components/ProjectDetail";

export default function DetailSection({ children }: { children: ReactNode }) {
  return <ProjectDetailSection>{children}</ProjectDetailSection>;
}
