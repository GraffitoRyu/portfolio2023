// px값을 rem으로 변환
// 시안 기준을 2560px너비 100%로 함
export const rem: (px: number) => string = px => `${px / 25.6}rem`;

// rem 또는 % 단위
export const getUnit: (v: number | string) => number | string = v =>
  typeof v === "string" ? v : rem(v);
