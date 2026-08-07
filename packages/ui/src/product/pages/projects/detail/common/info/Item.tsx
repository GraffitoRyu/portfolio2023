import { forwardRef } from "react";

import {
  StyledPDStackItem,
  StyledPDSummaryItem,
} from "@graffitoryu/ui/product/styles/styled/components/ProjectDetail";

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
    children: React.ReactNode;
  } & Partial<StyleOptionDetailInfoItem>,
  ref: React.ForwardedRef<HTMLDListElement>,
) {
  const customAttrs = {
    className: `details-${code}-item ${className ? className : ""}`,
    ref,
  };
  if (typeof $itemIndex === "number")
    Object.assign(customAttrs, { $itemIndex });
  if (typeof $delayIndex === "number")
    Object.assign(customAttrs, { $delayIndex });

  switch (code) {
    case "stacks":
      return <StyledPDStackItem {...customAttrs}>{children}</StyledPDStackItem>;
    case "summary":
      return (
        <StyledPDSummaryItem {...customAttrs}>{children}</StyledPDSummaryItem>
      );
    default:
      return null;
  }
}

const DetailInfoItem = forwardRef(DetailInfoItemRef);

export default DetailInfoItem;
