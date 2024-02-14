import { ForwardedRef, forwardRef } from "react";

// style components
import { Bar, PeriodContainer } from "@/styles/styled/components/Period";
import { PeriodProps } from "@/types/period";

function PeriodTime({ $date }: { $date: string }) {
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
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <PeriodContainer
      className={`period ${className ? className : ""}`}
      ref={ref}
    >
      <PeriodTime $date={date[0]} />
      <Bar />
      <PeriodTime $date={date[1]} />
    </PeriodContainer>
  );
}

const PeriodForward = forwardRef(Period);

export default PeriodForward;
