import { forwardRef, type HTMLAttributes } from "react";

export type FooterProps = HTMLAttributes<HTMLElement>;

export const Footer = forwardRef<HTMLElement, FooterProps>(
  function Footer(props, ref) {
    return <footer ref={ref} {...props} />;
  },
);
