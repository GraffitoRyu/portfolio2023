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
  isOpen: boolean;
  isSystem: boolean;
  theme: ThemeType;
};
