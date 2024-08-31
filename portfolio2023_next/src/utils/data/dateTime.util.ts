import { convert2Digit } from "./convert.util";
import { isValidDateType } from "./validation.util";

/**
 * 접속위치에 따른 시간대 보정
 * @util
 * @param {Date} date 보정할 시간
 * @return {Date} 보정된 시간
 */
export const correctTimezone = (date: Date): Date => {
  // 한국 시간(KST)의 UTC offset: +9시간
  const koreaTimezoneOffset = 9 * 60; // 분 단위 (9시간 * 60분)

  // 현재 로컬 시간대의 UTC offset (분 단위)
  const localTimezoneOffset = date.getTimezoneOffset();

  // UTC 기준 시간을 KST로 변환
  const correctionInMinutes = koreaTimezoneOffset - localTimezoneOffset;

  // 분을 밀리초로 변환하여 시간 보정
  const correctedTime = date.getTime() + correctionInMinutes * 60 * 1000;

  return new Date(correctedTime);
};

/**
 * Date 타입 데이터를 yyyy-mm-dd로 변환
 * @util
 * @param {unknown} date
 * @param {object} [options]
 * @param {Intl.DateTimeFormatOptions} [options.formatOptions]
 * @param {boolean} [options.isKorean]
 * @param {boolean} [options.isISOString]
 * @return {string} yyyy-mm-dd
 */
export const dateFormat = (
  date: unknown,
  options?: {
    isCorrection?: boolean;
    formatOptions?: Intl.DateTimeFormatOptions;
    formatTimezone?: string;
    isKorean?: boolean;
    isISOString?: boolean;
  },
): string => {
  if (isValidDateType(date)) {
    const d = new Date(date as string | number | Date);
    const year = d.getFullYear();
    const month = convert2Digit(d.getMonth() + 1);
    const day = convert2Digit(d.getDate());
    const defaultDateFormat = options?.isCorrection
      ? correctTimezone(d).toISOString()
      : `${year}-${month}-${day}`;

    if (options?.isISOString) return defaultDateFormat;

    const onlyDate = defaultDateFormat.split("T")[0];

    if (options?.isKorean) {
      const ymd = onlyDate.split("-");
      return `${ymd[0]}년 ${ymd[1]}월 ${ymd[2]}일`;
    }

    if (typeof options?.formatOptions !== "undefined")
      return new Intl.DateTimeFormat(
        options?.formatTimezone ? options.formatTimezone : "ko-KR",
        {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          ...options.formatOptions,
        },
      ).format(d);
    return onlyDate;
  }
  return String(date);
};

/**
 * Date 타입 데이터를 HH:MM:SS 시간으로 변환
 * @util
 * @param {string | Date} date
 * @return {string} HH:MM:SS
 */
export const timeFormat = (date: string | Date): string => {
  if (isValidDateType(date)) {
    const d = new Date(date as string | number | Date);
    const defaultDateFormat = correctTimezone(d)
      .toISOString()
      .split("T")[1]
      .split(".")[0];

    return defaultDateFormat;
  }
  return String(date);
};

export const currentTime = (): string =>
  new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).format(new Date());
