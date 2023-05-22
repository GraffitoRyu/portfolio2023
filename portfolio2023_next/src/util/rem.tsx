// px값을 rem으로 변환
export default function rem(px: number) {
  // 시안 기준을 2560px너비 100%로 함
  return `${px / 25.6}rem`;
}
