"use client";

import { useEffect, useState } from "react";

// style components
import { TimerContainer } from "@/styles/styled/components/PageHeader";

export default function TimeDisplay() {
  const [curTime, setCurTime] = useState<Date | undefined>(undefined);

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
