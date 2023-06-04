// px값을 rem으로 변환
// 시안 기준을 2560px너비 100%로 함
/**
 * @property {number} px : 픽셀 단위의 number
 * @return {string} rem 변환된 단위 값
 */
export function rem(px: number): string {
  return `${px / 25.6}rem`;
}

/**
 * @property {number | string} v : number인 경우 rem 변환, string인 경우 단위가 붙은 것으로 간주하고 그대로 return
 * @return {string} 단위 변환 값
 */
export const getUnit: (v: number | string) => number | string = v =>
  typeof v === "string" ? v : rem(v);