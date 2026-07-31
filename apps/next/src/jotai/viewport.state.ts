import { atom } from "jotai";
import { atomFamily } from "jotai/utils";

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
 * 프로필 > 경력; 각 아이템 확장 높이 상태관리
 * @state
 */
export const careerExpandHeightState = atomFamily((itemCode: string) =>
  atom(
    get => get(viewportState).careerExpandHeight[itemCode],
    (get, set, height: number) => {
      const prev = get(viewportState);
      set(viewportState, {
        ...prev,
        careerExpandHeight: {
          ...prev.careerExpandHeight,
          [itemCode]: height,
        },
      });
    },
  ),
);
