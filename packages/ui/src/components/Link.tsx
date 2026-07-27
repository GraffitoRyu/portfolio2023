import { forwardRef, type AnchorHTMLAttributes } from "react";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  function Link(props, ref) {
    return <a ref={ref} {...props} />;
  },
);
