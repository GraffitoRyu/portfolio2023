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

const themeManage = atom<SystemThemeStateTypes>({
  isOpen: false, // page header; 테마 메뉴 오픈 여부
  isSystem: true, // 현재 활성화된 테마가 시스템 테마인지의 여부
  theme: "dark",
});

/**
 * 시스템 테마 상태관리
 * @state
 */
export const themeState = atom(
  get => get(themeManage),
  (
    get,
    set,
    update: (props: SystemThemeStateTypes) => SystemThemeStateTypes,
  ) => {
    const prev = get(themeManage);

    const newState = update(prev);

    set(themeManage, newState); // Update themeManage atom instead of themeState

    // themeState의 상태를 업데이트
    set(themeAtom, newState.theme); // themeAtom을 업데이트
  },
);
