// 현재 시간 표시기
export interface TimerColorTypes {
  bar: string;
  text: string;
}

export interface ModeTypes {
  [key: string]: TimerColorTypes;
  light: TimerColorTypes;
  dark: TimerColorTypes;
}

export const timer: ModeTypes = {
  light: {
    bar: "#707070",
    text: "#909090",
  },
  dark: {
    bar: "#909090",
    text: "#909090",
  },
};
