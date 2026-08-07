/**
 * 커서 컴포넌트 hover 상태
 */
type CursorHoverStateType = "text" | "clickable" | "";

/**
 * 커서 컴포넌트 상태 관리
 * @state
 */
type CursorStateTypes = {
  /**
   * x: e.clientX
   */
  x: number;
  /**
   * y: e.clientY
   */
  y: number;
  /**
   * 커서 hover 상태
   * "text", "clickable", ""
   */
  hover: CursorHoverStateType;
  /**
   * 텍스트 요소의 line-height
   */
  height: number;
};
