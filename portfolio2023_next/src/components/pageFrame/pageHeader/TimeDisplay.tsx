"use client";

import { useEffect, useState } from "react";

// style components
import {
  StyledTimeRegion,
  StyledTimerContainer,
} from "@/styles/styled/components/PageHeader";

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
    <StyledTimerContainer>
      <StyledTimeRegion>Daejeon, KR</StyledTimeRegion>
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
    </StyledTimerContainer>
  );
}
