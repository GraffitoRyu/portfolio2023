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
 * @param {string | Date} [date] 날짜 데이터. 없을 경우 오늘날짜 반환
 * @return {string} yyyy-mm-dd
 */
export const formatDate = (date?: string | Date): string => {
  if (typeof date === "undefined") {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1}-${d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()}`;
  }
  if (!isValidDateType(date)) return "";
  const d = new Date(date);
  return `${d.getFullYear()}-${d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1}-${d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()}`;
};

export const currentTime = (): string =>
  new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).format(new Date());
