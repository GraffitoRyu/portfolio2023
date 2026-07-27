import { forwardRef, type HTMLAttributes } from "react";

export type PageSectionProps = HTMLAttributes<HTMLElement>;

export const PageSection = forwardRef<HTMLElement, PageSectionProps>(
  function PageSection(props, ref) {
    return <section ref={ref} {...props} />;
  },
);
