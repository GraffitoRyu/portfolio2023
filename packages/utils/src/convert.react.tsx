import { Fragment } from "react";

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
    <Fragment key={commonKey(index, options?.key || "convertArrayToJsx")}>
      {index !== 0 && (
        <>
          {new Array(options?.phraseGap || 1).fill({}).map((_, i) => (
            <br
              key={commonKey(
                i,
                `${options?.key || "convertArrayToJsx"}_${index}_br`,
              )}
            />
          ))}
        </>
      )}
      {content}
    </Fragment>
  ));
};
