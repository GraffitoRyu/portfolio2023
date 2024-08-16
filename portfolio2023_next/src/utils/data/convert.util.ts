/**
 * 텍스트 capitalize 첫글자 대문자
 * @util
 * @param {string} value 텍스트
 * @return {string}
 */
export const capitalize = (value: string): string => {
  const first = value.charAt(0).toUpperCase();
  const others = value.slice(1);
  return `${first}${others}`;
};
