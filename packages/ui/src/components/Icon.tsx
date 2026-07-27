import { forwardRef, type HTMLAttributes } from "react";

export type IconProps = HTMLAttributes<HTMLElement>;

export const Icon = forwardRef<HTMLElement, IconProps>(
  function Icon(props, ref) {
    return <figure ref={ref} {...props} />;
  },
);
