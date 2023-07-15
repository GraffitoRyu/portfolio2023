import { ForwardedRef, ReactNode, forwardRef } from "react";

import {
  PDStackItem,
  PDSummaryItem,
} from "@/styles/styled/components/ProjectDetail";

function DetailInfoItemRef(
  {
    code,
    className,
    children,
    $itemIndex,
    $delayIndex,
  }: {
    code: string;
    className?: string;
    children: ReactNode;
    $itemIndex?: number;
    $delayIndex?: number;
  },
  ref: ForwardedRef<HTMLDListElement>
) {
  const customAttrs = {
    className: `details-${code}-item ${className ?? ""}`,
    ref,
  };
  if (typeof $itemIndex === "number")
    Object.assign(customAttrs, { $itemIndex });
  if (typeof $delayIndex === "number")
    Object.assign(customAttrs, { $delayIndex });

  switch (code) {
    case "stacks":
      return <PDStackItem {...customAttrs}>{children}</PDStackItem>;
    case "summary":
      return <PDSummaryItem {...customAttrs}>{children}</PDSummaryItem>;
    default:
      return null;
  }
}

const DetailInfoItem = forwardRef(DetailInfoItemRef);

export default DetailInfoItem;
