import { Fragment } from "react";

/**
 * 데이터를 스트링으로 변환
 * @util
 * @param {unknown} value
 * @return {string}
 */
export const string = (value: unknown): string => {
  if (typeof value === "string") return value;
  return JSON.stringify(value);
};

/**
 * 세션/로컬 스토리지 데이터 parsing
 * @util
 * @param {string} data 세션/로컬 스토리지 데이터
 * @return {unknown}
 */
export const parseData = (data: string): unknown => {
  // 괄호 여부 -> object | array
  if (/^(\{|\[)/.test(data)) return JSON.parse(data);
  // 숫자 여부 -> number
  else if (!isNaN(Number(data))) return Number(data);
  // 불리언 여부 -> boolean
  else if (data === "true" || data === "false") return JSON.parse(data);
  // undefined
  else if (data === "undefined") return undefined;

  return data; // string
};

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

/**
 * 정규식 패턴으로 특수기호 제거
 * @util
 * @param {string} text
 * @return {string}
 */
export const escapeSymbol = (text: string): string => {
  // 정규식 패턴. 특수 문자를 찾습니다.
  const specialCharPattern = /([.*+?^${}()|[\]\\])/g;

  // 텍스트에서 특수 문자를 찾아서 escape 처리합니다.
  const escapedText = text.replace(specialCharPattern, "\\$1");

  return escapedText;
};

/**
 * 날짜 시간을 2-digit으로 맞춤
 * @util
 * @param {number} date_time
 * @return {string}
 */
export const convert2Digit = (date_time: number): string =>
  date_time < 10 ? `0${date_time}` : String(date_time);

/**
 * <br />이 포함된 텍스트를 jsx로 변환
 * @util
 * @param {string} text
 * @param {string} [key] jsx 키
 * @return {string | React.ReactNode}
 */
export const convertTextToJsx = (
  text: string,
  key?: string,
): string | React.ReactNode => {
  // string 이외의 컨텐츠는 그대로 출력
  if (typeof text !== "string") return text;

  // <br로 시작되는 텍스트가 인식되는 경우
  if (!text.includes("<br")) return text;

  // 정규식으로 배열 분리
  const lines = text.split(/<br\s*\/?>|<br>/);

  return lines.map((line, index) => (
    <Fragment
      key={key ? `${key}_${index}` : `convertTextToJsx_${line}_${index}`}
    >
      {index !== 0 && <br />}
      {line}
    </Fragment>
  ));
};

/**
 * 텍스트 배열을 <br />로 구분되는 jsx로 변환
 * @util
 * @param {React.ReactNode[]} text_array
 * @param {object} [options]
 * @param {string} [options.key] jsx 키
 * @param {number} [options.phraseGap] 줄바꿈 간격
 * @return {React.ReactNode}
 */
export const convertArrayToJsx = (
  text_array: React.ReactNode[],
  options?: Partial<{ key: string; phraseGap: number }>,
): React.ReactNode => {
  if (typeof text_array === "string" || !Array.isArray(text_array))
    return convertTextToJsx(text_array);

  const commonKey = (index: number, key?: string): string => `${key}_${index}`;

  return text_array.map((content, index) => (
    <Fragment key={commonKey(index, string(content))}>
      {index !== 0 && (
        <>
          {new Array(options?.phraseGap || 1).fill({}).map((_, i) => (
            <br key={commonKey(i, `${string(content)}_br`)} />
          ))}
        </>
      )}
      {content}
    </Fragment>
  ));
};
