import { atom } from "jotai";

/**
 * 스크롤 참조 ref 관리
 * @state
 */
export const scrollPageRefState = atom<ScrollRefStateTypes>({
  container: null,
  sectionVisual: null,
  sectionCareer: null,
  careerContents: null, // career 섹션 컨텐츠 묶음
  careerItems: {}, // career 각 컨텐츠 (HTMLDetailsElement | null)
  careerOpen: {}, // career 각 컨텐츠 아이템 별 열림 여부 (boolean)
  sectionExperience: null,
  experienceContents: null, // experience 섹션 컨텐츠 묶음
  sectionStacks: null,
  stackContents: null,
  projectList: null, // 프로젝트 목록 묶음
  footer: null,
});

// /**
//  * 리사이즈에 따른 sticky container의 height
//  */
// export const scrollRefSizeState = atom<ScrollRefSizeType>({
//   stickyHeight: 0,
// });

/**
 * 프로젝트 상세 참조 ref 관리
 */
export const scrollDetailRefState = atom({
  container: null,
  sectionVisual: null,
});
