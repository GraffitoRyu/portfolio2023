"use client";

import { rem } from "@/util/unit";
import { HTMLAttributes } from "react";
import { styled } from "styled-components";

const Bar = styled.span`
  width: ${rem(56)};
  height: ${rem(2)};
  margin: 0 ${rem(24)};
  background-color: white;
`;

export default function Period({
  className,
  date,
}: {
  className: string | HTMLAttributes<HTMLDivElement>;
  date: string[];
}) {
  return (
    <div className={`period flex items-center ${className}`}>
      <PeriodTime date={date[0]} />
      <Bar />
      <PeriodTime date={date[1]} />
    </div>
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
