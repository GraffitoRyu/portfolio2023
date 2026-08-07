import { forwardRef } from "react";

// style components
import {
  StyledPeriodBar,
  StyledPeriodContainer,
} from "@graffitoryu/ui/product/styles/styled/components/Period";

function PeriodTime({ $date }: { $date: Date | string }) {
  const d = new Date($date);
  return (
    <time>
      {d.toLocaleString("ko-KR", {
        month: "short",
        year: "numeric",
      })}
    </time>
  );
}

function Period(
  { className, date }: PeriodProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <StyledPeriodContainer
      className={`period ${className ? className : ""}`}
      ref={ref}
    >
      <PeriodTime $date={date[0]} />
      <StyledPeriodBar />
      <PeriodTime $date={date[1]} />
    </StyledPeriodContainer>
  );
}

const PeriodForward = forwardRef(Period);

export default PeriodForward;
