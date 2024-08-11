/**
 * validation; 날짜 변환을 허용할 유효 number 시간값 체크
 * @util
 * @validation
 * @param {number} dateNumber
 * @return {boolean}
 */
export const isValidDateNumber = (dateNumber: number): boolean => {
  const DATE_MIN = 1672498800000; // 2023-01-01T00:00:00
  const DATE_MAX = 4828172400000; // 2123-01-01T00:00:00
  return DATE_MIN < dateNumber && dateNumber < DATE_MAX;
};

/**
 * validation; 날짜 데이터 체크
 * @util
 * @validation
 * @param {unknown} date 날짜
 * @return {boolean}
 */
export const isValidDateType = (date: unknown): boolean => {
  if (!date) return false;
  if (
    typeof date === "string" ||
    (typeof date === "number" && isValidDateNumber(date)) ||
    date instanceof Date
  )
    return new Date(date) instanceof Date && !isNaN(new Date(date).valueOf());
  return false;
};

/**
 * validation; 시간 데이터 HH:MM:SS 포맷 체크
 * @util
 * @validation
 * @param {string} time
 * @return {boolean}
 */
export const isValidTimeStringFormat = (time: string): boolean => {
  const hms = time.split(":");
  if (hms.length !== 3 || hms.some(t => isNaN(Number(t)))) return false;

  // hour
  if (Number(hms[0]) < 0 || Number(hms[0]) > 24) return false;
  // minutes
  if (Number(hms[1]) < 0 || Number(hms[1]) > 59) return false;
  // seconds
  if (Number(hms[2]) < 0 || Number(hms[2]) > 59) return false;

  return true;
};
