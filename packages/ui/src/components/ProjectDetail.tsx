import { forwardRef, type HTMLAttributes } from "react";

export type ProjectDetailProps = HTMLAttributes<HTMLElement>;

export const ProjectDetail = forwardRef<HTMLElement, ProjectDetailProps>(
  function ProjectDetail(props, ref) {
    return <article ref={ref} {...props} />;
  },
);
