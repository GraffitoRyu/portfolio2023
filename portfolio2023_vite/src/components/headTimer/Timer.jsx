import { useEffect, useState } from "react";

export default function HeaderTimer() {
  const [curTime, setCurTime] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setCurTime(new Date());
    }, 1000);
  }, [curTime]);

  return (
    <div className="current-time flex items-center">
      <time>
        {curTime.toLocaleString("ko-KR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })}
      </time>
    </div>
  );
}
