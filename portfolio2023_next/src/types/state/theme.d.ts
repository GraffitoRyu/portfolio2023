/**
 * 테마 종류
 * @state
 */
type ThemeType = "light" | "dark";

/**
 * 테마 메뉴 종류
 * @state
 */
type ThemeMenuType = ThemeType | "system";

/**
 * 테마 상태관리 데이터 타입
 * @state
 */
type ThemeStateTypes = {
  /**
   * page header; 테마 선택메뉴 열림 상태
   * @type {boolean}
   */
  isOpen: boolean;
  /**
   * 시스템 테마 사용 여부
   * @type {boolean}
   */
  isSystem: boolean;
  /**
   * 현재 사용중인 테마
   * @type {ThemeType} "light" | "dark" | "system"
   */
  theme: ThemeType;
};
