/**
 * 스크롤 참조 ref 데이터
 * @state
 */
type ScrollRefType =
  | HTMLElement
  | HTMLHeadingElement
  | HTMLDetailsElement
  | null;

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
interface CareerItemsOpenTypes {
  [itemKey: string]: boolean;
}

/**
 * 스크롤 참조를 위한 ref 상태관리
 * @state
 */
type ScrollRefStateTypes = {
  [sectionCode: string]: ScrollRefType;
  /**
   * <ScrollContainer />; 스크롤 바가 생성되는 영역
   */
  container: ScrollRefType;
  /**
   * <PageSection page="profile" code="visual" />
   */
  sectionVisual: ScrollRefType;
  /**
   * <PageSection page="profile" code="career" />
   */
  sectionCareer: ScrollRefType;
  /**
   * career 섹션 컨텐츠 묶음
   */
  careerContents: ScrollRefType;
  // /**
  //  * career 각 컨텐츠
  //  */
  // careerItems: CareerItemsRefTypes;
  // /**
  //  * career 각 컨텐츠 아이템 별 열림 여부
  //  */
  // careerOpen: CareerOpenTypes;
  /**
   * <PageSection page="profile" code="experience" />
   */
  sectionExperience: ScrollRefType;
  /**
   * experience 섹션 컨텐츠 묶음
   */
  experienceContents: ScrollRefType;
  /**
   * <PageSection page="profile" code="stacks" />
   */
  sectionStacks: ScrollRefType;
  stackContents: ScrollRefType;
  /**
   * 프로젝트 목록 묶음
   * <PageSection page="projects" code="projectList" />
   */
  projectList: ScrollRefType;
  /**
   * <PageFooter />
   */
  footer: ScrollRefType;
};

/**
 * 프로젝트 > 프로젝트 상세; 스크롤 참조를 위한 ref 상태관리
 * @state
 */
type DetailScrollRefStateTypes = {
  [sectionCode: string]: ScrollRefType;
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
