import { sizePreset } from "@/styles/styled/preset/size";

// px값을 rem으로 변환
// 시안 기준을 2560px너비 100%로 함
/**
 * @property {number} px : 픽셀 단위의 number
 * @return {string} rem 변환된 단위 값
 */
export function rem(px: number): string {
  return `${px / sizePreset.common.remStd}rem`;
}

export function remToPx(px: number): number {
  if (typeof px === "number")
    return (px / sizePreset.common.remStd) * getRootFontSize();
  return px;
}

export function getRootFontSize(): number {
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
  return 25.6;
}

/**
 * @property {number | string} v : number인 경우 rem 변환, string인 경우 단위가 붙은 것으로 간주하고 그대로 return
 * @return {number | string} 단위 변환 값
 */
export const getUnit = (v: number | string): number | string =>
  typeof v === "string" ? v : rem(v);

/**
 * @property {number} total : 레이아웃 그리드 컬럼의 총 개수
 * @property {number} col : 할당할 컬럼 수
 * @return {number} 컬럼 수에 대응하는 너비 값 (%)
 */
export const widthRatio = (total: number, col: number): number => {
  return Math.floor((100 / total) * col * 10000) / 10000;
};
