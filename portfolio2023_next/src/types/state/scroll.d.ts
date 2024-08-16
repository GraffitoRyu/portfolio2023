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
  /**
   * <ScrollContainer />
   */
  container: HTMLElement | null;
  /**
   * <PageSection page="profile" code="visual" />
   */
  sectionVisual: HTMLElement | null;
  /**
   * <PageSection page="profile" code="career" />
   */
  sectionCareer: HTMLElement | null;
  /**
   * career 섹션 컨텐츠 묶음
   */
  careerContents: HTMLElement | null;
  /**
   * career 각 컨텐츠
   */
  careerItems: CareerItemsRefTypes;
  /**
   * career 각 컨텐츠 아이템 별 열림 여부
   */
  careerOpen: CareerOpenTypes;
  /**
   * <PageSection page="profile" code="experience" />
   */
  sectionExperience: HTMLElement | null;
  /**
   * experience 섹션 컨텐츠 묶음
   */
  experienceContents: HTMLElement | null;
  /**
   * <PageSection page="profile" code="stacks" />
   */
  sectionStacks: HTMLElement | null;
  stackContents: HTMLElement | null;
  /**
   * 프로젝트 목록 묶음
   * <PageSection page="projects" code="projectList" />
   */
  projectList: HTMLElement | null;
  /**
   * <PageFooter />
   */
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
  /**
   * <ProjectDetailContainer /> (<article />)
   */
  container: HTMLElement | null;
  // scrollHeight: number;
  /**
   * <DetailVisualViewport />
   */
  sectionVisual: HTMLElement | null;
  // header: HTMLElement | null; // <header/>
  // visual: HTMLDivElement | null;
  /**
   * <DetailVisualTitle />
   */
  visualTitle: HTMLHeadingElement | null;
};
