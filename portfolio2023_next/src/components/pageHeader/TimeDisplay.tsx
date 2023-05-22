"use client";

import { useEffect, useState } from "react";
import { styled } from "styled-components";

// util
import rem from "@/util/rem";

const TimerStyle = styled.div`
  border-top: ${rem(4)} solid #3a3a3a;
  border-bottom: ${rem(4)} solid transparent;
  padding: 0 ${rem(40)} 0 ${rem(2)};
`;

export default function TimeDisplay() {
  const [curTime, setCurTime] = useState<Date | undefined>(undefined);

  // initiate time
  useEffect(() => {
    setCurTime(new Date());
  }, []);

  // update real time
  useEffect(() => {
    setTimeout(() => {
      setCurTime(new Date());
    }, 1000);
  }, [curTime]);

  return (
    <TimerStyle className="time-display">
      <time>
        {curTime?.toLocaleString("ko-KR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }) ?? "----.--.-- --:--:--"}
      </time>
    </TimerStyle>
  );
}
