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
 * 접속위치에 따른 시간대 보정
 * @util
 * @param {Date} date 보정할 시간
 * @return {Date} 보정된 시간
 */
export const correctTimezone = (date: Date): Date => {
  // 분을 ms로 변환 (60초 * 1000ms)
  const MILLISECONDS = 60 * 1000;

  // 한국 시간(KST)으로 보정
  const koreaTimezoneOffset = -540; // 한국 시간대의 UTC offset: -540분 (UTC+9)

  // getTimezoneOffset: 현재 시간과 UTC 시간 차이를 분 단위로 추출
  const localTimezoneOffset = date.getTimezoneOffset(); // 현재 로컬 시간대와 UTC 차이 (분 단위)

  // 로컬 시간대에 따른 보정
  const correction = (koreaTimezoneOffset - localTimezoneOffset) * MILLISECONDS;

  return new Date(date.getTime() + correction);
};

/**
 * 날짜 데이터를 yyyy-mm-dd 문자열로 변환
 * @util
 * @param {string | Date} date 날짜 데이터. 없을 경우 오늘날짜 반환
 * @param {object} [options]
 * @param {Intl.DateTimeFormatOptions} [options.formatOptions]
 * @param {boolean} [options.isKorean]
 * @param {boolean} [options.isISOString]
 * @return {string} yyyy-mm-dd
 */
export const dateFormat = (
  date: string | Date,
  options?: {
    formatOptions?: Intl.DateTimeFormatOptions;
    isKorean?: boolean;
    isISOString?: boolean;
  },
): string => {
  if (isValidDateType(date)) {
    const d = new Date(date as string | number | Date);
    const defaultDateFormat = correctTimezone(d).toISOString();

    if (options?.isISOString) return defaultDateFormat;

    const onlyDate = defaultDateFormat.split("T")[0];

    if (options?.isKorean) {
      const ymd = onlyDate.split("-");
      return `${ymd[0]}년 ${ymd[1]}월 ${ymd[2]}일`;
    }

    if (typeof options?.formatOptions !== "undefined")
      return new Intl.DateTimeFormat("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        ...options.formatOptions,
      }).format(d);
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
