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

type ThemeStateTypes = {
  isOpen: boolean;
  isSystem: boolean;
  theme: "light" | "dark";
};

interface CareerItemsRefTypes {
  [index: string]: HTMLDetailsElement | null;
}

interface CareerOpenTypes {
  [index: string]: boolean;
}

interface ScrollRefStateTypes {
  container: HTMLDivElement | null;
  stickyHeight: number;
  header: HTMLElement | null; // <header />
  visualSection: HTMLElement | null;
  career: HTMLDivElement | null;
  careerSection: HTMLElement | null;
  careerItems: CareerItemsRefTypes; // <details />
  careerOpen: CareerOpenTypes;
  experience: HTMLDivElement | null;
  experienceSection: HTMLElement | null; // <section />
  stacks: HTMLDivElement | null;
  stacksSection: HTMLElement | null;
  projectList: HTMLDivElement | null;
  footer: HTMLElement | null; // <footer />
}

interface DetailScrollRefStateTypes {
  container: HTMLElement | null; // <article />
  scrollHeight: number;
  header: HTMLElement | null; // <header/>
  visual: HTMLDivElement | null;
  visualTitle: HTMLHeadingElement | null;
}
