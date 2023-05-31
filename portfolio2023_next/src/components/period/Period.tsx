"use client";

import { HTMLAttributes } from "react";
import { styled } from "styled-components";

// style
import { flex, size } from "@/styles/styled/preset/mixins";

// util
import { rem } from "@/util/unit";

const PeriodContainer = styled.div`
  ${flex({ std: "start" })}
  font-size: ${rem(32)};
  font-weight: 400;
  white-space: nowrap;
  @media only screen and (min-width: 1024px) {
    font-size: ${rem(20)};
  }
`;

const Bar = styled.span`
  width: ${rem(80)};
  height: ${rem(1)};
  margin: 0 ${rem(32)};
  @media only screen and (min-width: 1024px) {
    ${size({ width: rem(56), height: rem(2) })}
    margin:0 ${rem(16)};
  }
`;

export default function Period({
  className,
  date,
}: {
  className?: string | HTMLAttributes<HTMLDivElement>;
  date: string[];
}): JSX.Element {
  return (
    <PeriodContainer className={`period ${className}`}>
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
