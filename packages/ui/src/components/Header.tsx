import { forwardRef, type HTMLAttributes } from "react";

export type HeaderProps = HTMLAttributes<HTMLElement>;

export const Header = forwardRef<HTMLElement, HeaderProps>(
  function Header(props, ref) {
    return <header ref={ref} {...props} />;
  },
);
