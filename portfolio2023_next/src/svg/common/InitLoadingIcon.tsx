import { ForwardedRef, forwardRef } from "react";

function InitLoadingIcon(
  { className }: { className?: string },
  ref: ForwardedRef<SVGSVGElement>
) {
  return (
    <svg
      className={`${className}`}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
    >
      {/* <circle cx="24" cy="24" r="24" fill="none" stroke="white" /> */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47C36.7025 47 47 36.7025 47 24C47 23.7239 47.2239 23.5 47.5 23.5C47.7761 23.5 48 23.7239 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C24.2761 0 24.5 0.223858 24.5 0.5C24.5 0.776142 24.2761 1 24 1Z"
        fill="white"
      />
    </svg>
  );
}

export default forwardRef(InitLoadingIcon);
