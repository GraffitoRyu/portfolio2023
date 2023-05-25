import { useEffect, useState } from "react";
import { ThemeProvider, styled } from "styled-components";
import { useRecoilValue } from "recoil";

// util
import { rem } from "@/util/unit";

// state
import { ThemeTypes, themeState } from "@/states/theme";

type TimerTypes = {
  bar: string;
  text: string;
};
type ModeTypes = {
  [key: string]: TimerTypes;
  light: TimerTypes;
  dark: TimerTypes;
};
const componentsTheme: ModeTypes = {
  light: {
    bar: "#707070",
    text: "#909090",
  },
  dark: {
    bar: "#909090",
    text: "#909090",
  },
};

const TimerStyle = styled.div`
  border-top: ${rem(4)} solid ${({ theme }) => theme.bar};
  border-bottom: ${rem(4)} solid transparent;
  padding: 0 ${rem(40)} 0 ${rem(2)};
  time {
    font-weight: 500;
    color: ${({ theme }) => theme.text};
  }
`;

TimerStyle.defaultProps = { theme: { ...componentsTheme.light } };

export default function TimeDisplay() {
  const [curTime, setCurTime] = useState<Date | undefined>(undefined);
  const { theme } = useRecoilValue<ThemeTypes>(themeState);

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
    <ThemeProvider theme={componentsTheme[theme]}>
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
    </ThemeProvider>
  );
}
