"use client";

import { useEffect, useState } from "react";
import { styled } from "styled-components";

// util
import { rem } from "@/util/unit";

const TimerContainer = styled.div`
  height: ${rem(32)};
  border-top: ${rem(4)} solid ${({ theme }) => theme.timer.bar};
  border-bottom: ${rem(4)} solid transparent;
  padding: 0 ${rem(40)} 0 ${rem(2)};
  time {
    font-weight: 500;
    color: ${({ theme }) => theme.timer.text};
  }
`;

export default function TimeDisplay() {
  const [curTime, setCurTime] = useState<Date | undefined>(undefined);

  // update real time
  useEffect(() => {
    setTimeout(() => {
      setCurTime(new Date());
    }, 1000);
  }, [curTime]);

  return (
    <TimerContainer>
      <time>
        {curTime instanceof Date
          ? curTime.toLocaleString("ko-KR", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            })
          : "----.--.-- --:--:--"}
      </time>
    </TimerContainer>
  );
}
