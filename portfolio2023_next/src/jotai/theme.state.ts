import { atom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

/**
 * 테마 로컬 스토리지 생성
 */
const localThemeStorage = createJSONStorage<SystemThemeType>(() =>
  typeof window === "undefined"
    ? {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
      }
    : localStorage,
);

/**
 * 선택 테마 상태관리
 * @state
 */
export const themeAtom = atomWithStorage<SystemThemeType>(
  "theme",
  "dark",
  localThemeStorage,
);

/**
 * 시스템 테마 상태관리
 * @state
 */
export const themeState = atom(
  get => ({
    isOpen: false, // page header; 테마 메뉴 오픈 여부
    isSystem: true, // 현재 활성화된 테마가 시스템 테마인지의 여부
    theme: get(themeAtom),
  }),
  (
    get,
    set,
    update: (props: SystemThemeStateTypes) => SystemThemeStateTypes,
  ) => {
    const prev = get(themeState);
    const d = update(prev);
    // themeState의 상태를 업데이트
    set(themeAtom, d.theme); // themeAtom을 업데이트
    set(themeState, () => d);
  },
);
