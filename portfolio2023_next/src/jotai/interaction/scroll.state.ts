import { atom } from "jotai";

/**
 * 스크롤 참조 ref 관리
 * @state
 * @return {ScrollRefStateTypes}
 */
export const scrollPageRefState = atom<ScrollRefStateTypes>({
  // common
  container: null,
  sectionVisual: null,
  footer: null,
  // profile > career
  sectionCareer: null,
  careerContents: null, // career 섹션 컨텐츠 묶음
  careerItems: {}, // career 각 컨텐츠 (HTMLDetailsElement | null)
  careerOpen: {}, // career 각 컨텐츠 아이템 별 열림 여부 (boolean)
  // profile > experience
  sectionExperience: null,
  experienceContents: null, // experience 섹션 컨텐츠 묶음
  // profile > tech stacks
  sectionStacks: null,
  stackContents: null,
  // projects
  projectList: null, // 프로젝트 목록 묶음
});

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
