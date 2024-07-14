type CursorTypes = {
  x: number;
  y: number;
  hover: string;
};

type DeviceTypes = {
  apple: boolean;
  mobile: boolean;
  tablet: boolean;
  orientation: string;
};

type CareerDetailHeight = {
  [code: string]: number;
};

/**
 * 뷰포트 사이즈 상태관리
 */
type ViewportStateTypes = {
  windowWidth: number;
  windowHeight: number;
  headerHeight: number;
  columnWidth: number;
  careerExpandHeight: CareerDetailHeight;
  detailHeaderHeight: number;
};

/**
 * 페이지 로드 상태 및 전환 상태 타입
 */
type PageLoadStateTypes = {
  init: boolean; // 새로고침 후 첫 진입
  initComplete: boolean; // 인트로 애니메이션 종료 여부
  currentPage: string; // 현재 페이지
  changePageName: string; // 페이지 전환 페이지 코드
  loaded: boolean; // 로딩 완료 여부
  loadComplete: boolean; // 로딩 애니메이션 종료 여부
  notFound: boolean; // 404 page
};

/**
 * 페이지 프로젝트 상세 로드 상태 타입
 */
interface PageDetailLoadStateTypes {
  clicked: boolean; // 프로젝트 상세보기 클릭 여부
  category: string; // 상세 아이템
  loading: boolean; // 로딩 진행바 숨김/보임
  open: boolean; // 열림 상태
  openComplete: boolean; // 열림 트랜지션 후 완료
  dataStatus: string;
}

/**
 * 테마 종류
 */
type ThemeType = "light" | "dark";

/**
 * 테마 메뉴 종류
 */
type ThemeMenuType = ThemeType | "system";

/**
 * 테마 상태관리 데이터 타입
 */
type ThemeStateTypes = {
  isOpen: boolean;
  isSystem: boolean;
  theme: ThemeType;
};

interface CareerItemsRefTypes {
  [sectionKey: string]: HTMLDetailsElement | null;
}

interface CareerOpenTypes {
  [sectionKey: string]: boolean;
}

/**
 * 스크롤 참조를 위한 ref 상태관리
 */
interface ScrollRefStateTypes {
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
}

// interface ScrollRefSizeType {
//   stickyHeight: number;
// }

interface DetailScrollRefStateTypes {
  container: HTMLElement | null; // <article />
  scrollHeight: number;
  header: HTMLElement | null; // <header/>
  visual: HTMLDivElement | null;
  visualTitle: HTMLHeadingElement | null;
}
