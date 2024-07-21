/**
 * 프로필 > 경력; 스크롤 참조를 위한 각 항목 ref
 * @state
 */
interface CareerItemsRefTypes {
  [sectionKey: string]: HTMLDetailsElement | null;
}
/**
 * 프로필 > 경력; 스크롤 참조를 위한 각 항목 open 상태관리
 * @state
 */
interface CareerOpenTypes {
  [sectionKey: string]: boolean;
}

/**
 * 스크롤 참조를 위한 ref 상태관리
 * @state
 */
type ScrollRefStateTypes = {
  container: HTMLElement | null;
  sectionVisual: HTMLElement | null;
  sectionCareer: HTMLElement | null;
  careerContents: HTMLElement | null; // career 섹션 컨텐츠 묶음
  careerItems: CareerItemsRefTypes; // career 각 컨텐츠
  careerOpen: CareerOpenTypes; // career 각 컨텐츠 아이템 별 열림 여부
  sectionExperience: HTMLElement | null;
  experienceContents: HTMLElement | null; // experience 섹션 컨텐츠 묶음
  sectionStacks: HTMLElement | null;
  stackContents: HTMLElement | null;
  projectList: HTMLElement | null; // 프로젝트 목록 묶음
  footer: HTMLElement | null;
  // container: HTMLDivElement | null;
  // header: HTMLElement | null; // <header />
  // visualSection: HTMLElement | null;
  // career: HTMLDivElement | null;
  // careerSection: HTMLElement | null;
  // careerItems: CareerItemsRefTypes; // <details />
  // careerOpen: CareerOpenTypes;
  // experience: HTMLDivElement | null;
  // experienceSection: HTMLElement | null; // <section />
  // stacks: HTMLDivElement | null;
  // stacksSection: HTMLElement | null;
  // projectList: HTMLDivElement | null;
  // footer: HTMLElement | null; // <footer />
};

// interface ScrollRefSizeType {
//   stickyHeight: number;
// }

/**
 * 프로젝트 > 프로젝트 상세; 스크롤 참조를 위한 ref 상태관리
 * @state
 */
type DetailScrollRefStateTypes = {
  container: HTMLElement | null; // <article />
  // scrollHeight: number;
  sectionVisual: HTMLElement | null;
  // header: HTMLElement | null; // <header/>
  // visual: HTMLDivElement | null;
  visualTitle: HTMLHeadingElement | null;
};
