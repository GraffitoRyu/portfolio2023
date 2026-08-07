import { sizePreset } from "@graffitoryu/ui/product/styles/styled/preset/size";

/**
 * px값을 rem으로 변환
 * @util
 * @style
 * @property {number} px : 픽셀 단위의 number
 * @return {string} rem 변환된 단위 값
 * @desc
 * - 시안 기준을 2560px너비 100%로 함
 */
export const rem = (px: number): string =>
  `${px / sizePreset.common.remStd}rem`;

/**
 * px값을 rem으로 변환 ??? 다시 살펴볼 것
 * @util
 * @style
 * @property {number} px : 픽셀 단위의 number
 * @return {number}
 * @desc
 * - 시안 기준을 2560px너비 100%로 함
 */
export const remToPx = (px: number): number =>
  typeof px === "number"
    ? (px / sizePreset.common.remStd) * getRootFontSize()
    : px;

/**
 * 현재 페이지의 html 기준 font-size 추출
 * @util
 * @style
 * @return {number} font-size
 */
export const getRootFontSize = (): number => {
  if (typeof window !== "undefined") {
    const _html = document.querySelector("html");
    if (_html) {
      return parseFloat(
        window
          .getComputedStyle(_html)
          .getPropertyValue("font-size")
          .replace("px", ""),
      );
    }
  }
  return sizePreset.common.remStd;
};

/**
 * css 단위 변환
 * @util
 * @style
 * @property {number | string} v : number인 경우 rem 변환, string인 경우 단위가 붙은 것으로 간주하고 그대로 return
 * @return {number | string} 단위 변환 값
 */
export const getUnit = (v: number | string): number | string =>
  typeof v === "string" ? v : rem(v);

/**
 * 컬럼 대비 width 계산
 * @util
 * @property {number} total : 레이아웃 그리드 컬럼의 총 개수
 * @property {number} col : 할당할 컬럼 수
 * @return {number} 컬럼 수에 대응하는 너비 값 (%)
 */
export const widthRatio = (total: number, col: number): number =>
  Math.floor((100 / total) * col * 10000) / 10000;
