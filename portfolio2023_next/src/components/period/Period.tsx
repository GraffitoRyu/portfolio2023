import { HTMLAttributes } from "react";

// style components
import { Bar, PeriodContainer } from "@/styles/styled/components/period";

export default function Period({
  className,
  date,
}: {
  className?: string | HTMLAttributes<HTMLDivElement>;
  date: string[];
}): JSX.Element {
  return (
    <PeriodContainer className={`period ${className ? className : ""}`}>
      <PeriodTime date={date[0]} />
      <Bar />
      <PeriodTime date={date[1]} />
    </PeriodContainer>
  );
}

function PeriodTime({ date }: { date: string }): JSX.Element {
  const d = new Date(date);
  return (
    <time>
      {d.toLocaleString("ko-KR", {
        month: "short",
        year: "numeric",
      })}
    </time>
  );
}
