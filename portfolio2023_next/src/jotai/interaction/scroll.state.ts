import { atom } from "jotai";
import { atomFamily } from "jotai/utils";

/**
 * 스크롤 참조 ref 관리
 * @state
 * @return {ScrollRefStateTypes}
 */
export const scrollPageRefState = atom<ScrollRefStateTypes>({
  // common
  container: null,
  body: null,
  sectionVisual: null,
  footer: null,
  // profile > career
  sectionCareer: null,
  careerContents: null, // career 섹션 컨텐츠 묶음
  // careerItems: {}, // career 각 컨텐츠 (HTMLDetailsElement | null)
  // careerOpen: {}, // career 각 컨텐츠 아이템 별 열림 여부 (boolean)
  // profile > experience
  sectionExperience: null,
  experienceContents: null, // experience 섹션 컨텐츠 묶음
  // profile > tech stacks
  sectionStacks: null,
  stackContents: null,
  // projects
  projectList: null, // 프로젝트 목록 묶음
});

/**
 * 스크롤 참조 ref 각 섹션별 상태관리; 페이지 스크롤 ref 관리
 * @state
 */
export const scrollPageSectionRefState = atomFamily((sectionCode: string) =>
  atom(
    get => get(scrollPageRefState)[sectionCode],
    (get, set, state: ScrollRefType) => {
      const prev = get(scrollPageRefState);
      set(scrollPageRefState, {
        ...prev,
        [sectionCode]: state,
      });
    },
  ),
);

/**
 * 프로필 > 커리어; 상세요소 참조 ref 관리
 * @state
 */
export const scrollCareerRefState = atom<CareerItemsRefTypes>({});

/**
 * 프로필 > 커리어; 상세요소 참조 ref 각 아이템별 관리
 * @state
 */
export const scrollCareerEachItemRefState = atomFamily((itemCode: string) =>
  atom(
    get => get(scrollCareerRefState)[itemCode],
    (get, set, state: HTMLDetailsElement | null) => {
      const prev = get(scrollCareerRefState);
      set(scrollCareerRefState, {
        ...prev,
        [itemCode]: state,
      });
    },
  ),
);

/**
 * 프로필 > 커리어; 상세요소 토글상태 관리
 * @state
 * @desc
 * - 각 항목 토글상태에 따라 스크롤 애니메이션 재계산 필요
 */
export const careerOpenState = atom<CareerItemsOpenTypes>({});
/**
 * 프로필 > 커리어; 각 상세요소 토글상태 관리
 * @state
 * @desc
 * - 각 항목 토글상태에 따라 스크롤 애니메이션 재계산 필요
 */
export const careerEachOpenState = atomFamily((itemCode: string) =>
  atom(
    get => get(careerOpenState)[itemCode],
    (get, set, state: boolean) => {
      const prev = get(careerOpenState);
      set(careerOpenState, {
        ...prev,
        [itemCode]: state,
      });
    },
  ),
);

// /**
//  * 리사이즈에 따른 sticky container의 height
//  */
// export const scrollRefSizeState = atom<ScrollRefSizeType>({
//   stickyHeight: 0,
// });

/**
 * 프로젝트 상세 참조 ref 관리
 * @state
 * @return {DetailScrollRefStateTypes}
 */
export const scrollDetailRefState = atom<DetailScrollRefStateTypes>({
  container: null,
  sectionVisual: null,
  visualTitle: null,
});

/**
 * 스크롤 참조 ref 각 섹션별 상태관리; 프로젝트 상세 스크롤 ref 관리
 * @state
 */
export const scrollDetailSectionRefState = atomFamily((sectionCode: string) =>
  atom(
    get => get(scrollDetailRefState)[sectionCode],
    (get, set, state: ScrollRefType) => {
      const prev = get(scrollDetailRefState);
      set(scrollDetailRefState, {
        ...prev,
        [sectionCode]: state,
      });
    },
  ),
);

/**
 * 스크롤 높이 상태관리; 페이지
 * @state
 */
export const scrollPageHeightState = atom<number>(0);

/**
 * 스크롤 높이 상태관리; 프로젝트 상세
 * @state
 */
export const scrollDetailHeightState = atom<number>(0);
