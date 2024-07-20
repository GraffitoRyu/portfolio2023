/**
 * 날짜 형식 데이터 타입 체크
 * @util
 * @param {unknown} value 날짜 여부를 검사할 데이터
 * @return {boolean}
 */
export const isValidDateType = (value: unknown): boolean => {
  return (
    value instanceof Date ||
    (typeof value === "string" &&
      value !== "" &&
      new Date(value) instanceof Date &&
      !isNaN(new Date(value).valueOf()))
  );
};

/**
 * 날짜 데이터를 yyyy-mm-dd 문자열로 변환
 * @util
 * @param {string | Date} date 날짜 데이터. 없을 경우 오늘날짜 반환
 * @return {string} yyyy-mm-dd
 */
export const formatDate = (
  date: string | Date,
  formatOptions?: Intl.DateTimeFormatOptions,
  isKorean?: boolean,
): string => {
  if (isValidDateType(date)) {
    const d = new Date(date as string | Date);
    const corr = d.getTimezoneOffset() * 60000;
    const defaultDateFormat = new Date(d.getTime() - corr)
      .toISOString()
      .split("T")[0];

    if (isKorean) {
      const ymd = defaultDateFormat.split("-");
      return `${ymd[0]}년 ${ymd[1]}월 ${ymd[2]}일`;
    }

    if (typeof formatOptions !== "undefined")
      return new Intl.DateTimeFormat("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        ...formatOptions,
      }).format(d);
    return defaultDateFormat;
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
    const d = new Date(date as string | Date);
    const corr = d.getTimezoneOffset() * 60000;
    const defaultDateFormat = new Date(d.getTime() - corr)
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
