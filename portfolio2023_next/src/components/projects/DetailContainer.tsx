import { ReactNode } from "react";

export default function ProjectDetailContainer({
  children,
}: {
  children: ReactNode;
}) {
  return <article className="project-detail-container">{children}</article>;
}
