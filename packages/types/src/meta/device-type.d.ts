/**
 * 반응형 구분 타입
 * @state
 * @desc
 * - desktop; size <= 1280
 * - tablet; 768 <= size < 1280
 * - mobile; size < 768
 * - 위 기준과 다르게 컴포넌트 단위에서 적용이 필요한 경우, 별도로 체크함
 */
export type BreakPointType = "desktop" | "tablet" | "mobile";

/**
 * 반응형 화면모드 상태관리 타입
 * @state
 * @desc
 * - hardware; 접속 기기의 userAgent를 기준으로 한 화면모드
 * - viewport; 화면 사이즈를 기준으로 한 화면모드
 */
export type ResponsiveDeviceStateType = {
  /**
   * 접속 기기의 userAgent를 기준으로 한 화면모드
   */
  hardware: BreakPointType;
  /**
   * 화면 사이즈를 기준으로 한 화면모드
   */
  viewport: BreakPointType;
};
