import { useEffect, useState } from "react";
import { ThemeProvider, styled } from "styled-components";
import { useRecoilValue } from "recoil";

// type
import { ModeTypes } from "@/types/themeColors/pageHeader";

// util
import { rem } from "@/util/unit";

// state
import { ThemeStateTypes, themeState } from "@/states/theme";

const timerColors: ModeTypes = {
  light: {
    bar: "#707070",
    text: "#909090",
  },
  dark: {
    bar: "#909090",
    text: "#909090",
  },
};

const TimerContainer = styled.div`
  border-top: ${rem(4)} solid ${({ theme }) => theme.bar};
  border-bottom: ${rem(4)} solid transparent;
  padding: 0 ${rem(40)} 0 ${rem(2)};
  time {
    font-weight: 500;
    color: ${({ theme }) => theme.text};
  }
`;

export default function TimeDisplay() {
  const [curTime, setCurTime] = useState<Date | undefined>(undefined);
  const { theme } = useRecoilValue<ThemeStateTypes>(themeState);
  const [colors, setColors] = useState(timerColors.light);

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

  useEffect(() => {
    setColors(timerColors[theme]);
  }, [theme]);

  return (
    <ThemeProvider theme={colors}>
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
    </ThemeProvider>
  );
}
