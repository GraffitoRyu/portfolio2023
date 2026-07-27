import type { UtilDateTimeFormatOptions } from "@graffitoryu/types";
import { convert2Digit } from "./convert";
import { isValidDateType } from "./validation";

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
 * @param {UtilDateTimeFormatOptions} [options]
 * @param {Intl.DateTimeFormatOptions} [options.formatOptions]
 * @param {Intl.LocalesArgument} [options.formatTimezone] 시간 기준; 기본값 ko-KR
 * @param {boolean | boolean[]} [options.isKorean] // ymd 또는 [year, month?, day?]
 * @param {boolean} [options.isCorrection] 시간 보정
 * @param {boolean} [options.isISOString] ISO 문자열
 * @return {string} yyyy-mm-dd 또는 각 옵션에 대한 날짜포맷
 */
export const dateFormat = (
  date: unknown,
  options?: Partial<UtilDateTimeFormatOptions>,
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
      const [y, m, d] = onlyDate.split("-");
      if (options.isKorean === true) return `${y}년 ${m}월 ${d}일`;
      const __ymd = options.isKorean.map((apply, index) => {
        switch (index) {
          case 0:
            return apply ? `${y}년` : "";
          case 1:
            return apply ? `${m}월` : "";
          case 2:
            return apply ? `${d}일` : "";
          default:
            return "";
        }
      });
      return __ymd.join(" ");
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
 * @param {UtilDateTimeFormatOptions} [options]
 * @param {Intl.DateTimeFormatOptions} [options.formatOptions]
 * @param {Intl.LocalesArgument} [options.formatTimezone] 시간 기준; 기본값 ko-KR
 * @param {boolean | boolean[]} [options.isKorean] // ymd 또는 [year, month?, day?]
 * @param {boolean} [options.isCorrection] 시간 보정
 * @param {boolean} [options.isISOString] ISO 문자열
 * @return {string} HH:MM:SS
 */
export const timeFormat = (
  date: unknown,
  options?: Partial<UtilDateTimeFormatOptions>,
): string => {
  if (isValidDateType(date)) {
    const d = new Date(date as string | number | Date);
    const defaultDateFormat = options?.isCorrection
      ? correctTimezone(d).toISOString().split("T")[1].split(".")[0]
      : `${convert2Digit(d.getHours())}:${convert2Digit(d.getMinutes())}:${convert2Digit(d.getSeconds())}`;

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
