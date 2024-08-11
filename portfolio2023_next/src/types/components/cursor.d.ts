/**
 * 커서 컴포넌트 hover 상태
 */
type CursorHoverStateType = "text" | "link" | "";

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
   * "text", "link", ""
   */
  hover: CursorHoverStateType;
};
