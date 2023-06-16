import { ForwardedRef, forwardRef } from "react";

function InitCompleteIcon(
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
      <path
        id="initCompleteCircle"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47 24C47 36.7025 36.7025 47 24 47C11.2975 47 1 36.7025 1 24C1 11.2975 11.2975 1 24 1C36.7025 1 47 11.2975 47 24ZM48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z"
        fill="white"
      />
      <path
        id="initCompleteCheck"
        d="M19.5281 31.7961L12.5071 24.7751C12.228 24.496 12.2304 24.0427 12.5124 23.7666C12.7903 23.4946 13.2353 23.497 13.5103 23.7719L20.2352 30.4968L35.2038 15.5074C35.4836 15.2272 35.9377 15.2271 36.2177 15.5071C36.4976 15.787 36.4976 16.2408 36.2177 16.5206L20.9423 31.7961C20.5517 32.1866 19.9186 32.1866 19.5281 31.7961Z"
        fill="white"
      />
    </svg>
  );
}

export default forwardRef(InitCompleteIcon);
