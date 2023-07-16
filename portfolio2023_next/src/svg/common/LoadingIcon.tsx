import { ForwardedRef, forwardRef } from "react";

function LoadingIcon(
  { className }: { className?: string },
  ref: ForwardedRef<SVGSVGElement>
) {
  return (
    <svg
      className={`${className}`}
      viewBox="20 20 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
    >
      <circle cx="40" cy="40" r="20" />
    </svg>
  );
}

export default forwardRef(LoadingIcon);
