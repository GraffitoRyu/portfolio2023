import { atom } from "jotai";

/**
 * 화면 사이즈 상태관리
 * @state
 * @return {ViewportStateTypes}
 */
export const viewportState = atom<ViewportStateTypes>({
  windowWidth: 0,
  windowHeight: 0,
  headerHeight: 0,
  columnWidth: 0, // 레이아웃 1 column의 너비값
  careerExpandHeight: {}, // 프로필 페이지 career 섹션의 각 아이템 확장 영역 높이값
  detailHeaderHeight: 0, // 프로젝트 상세 페이지 상단 헤더의 높이값
});

/**
 * 반응형 웹; breakpoint 상태
 * @state
 * @return {ResponsiveDeviceStateType} desktop, tablet, mobile
 */
export const responsiveDeviceState = atom<ResponsiveDeviceStateType>({
  hardware: "desktop",
  viewport: "desktop",
});

/**
 * 반응형 웹; 화면 가로/세로방향 상태
 * @state
 * @return {ViewportOrientationStateType} portrait, landscape
 */
export const viewportOrientationState =
  atom<ViewportOrientationStateType>("portrait");

/**
 * 애플 디바이스 접속여부 상태
 * @state
 * @return {boolean}
 */
export const isAppleDeviceState = atom<boolean>(false);
