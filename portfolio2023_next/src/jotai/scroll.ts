import { atom } from "jotai";

export const scrollPageRefState = atom({
  container: null,
  sectionVisual: null,
  sectionCareer: null,
  careerContents: null, // career 섹션 컨텐츠 묶음
  careerItems: {}, // career 각 컨텐츠
  careerOpen: {}, // career 각 컨텐츠 아이템 별 열림 여부
  sectionExperience: null,
  experienceContents: null, // experience 섹션 컨텐츠 묶음
  sectionStack: null,
  stackContents: null,
  projectList: null, // 프로젝트 목록 묶음
});

export const scrollDetailRefState = atom({
  container: null,
  sectionVisual: null,
});
