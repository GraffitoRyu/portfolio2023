/**
 * 페이지 로드 상태 및 전환 상태 타입
 * @state
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
 * @state
 */
type PageDetailLoadStateTypes = {
  clicked: boolean; // 프로젝트 상세보기 클릭 여부
  category: string; // 상세 아이템
  loading: boolean; // 로딩 진행바 숨김/보임
  open: boolean; // 열림 상태
  openComplete: boolean; // 열림 트랜지션 후 완료
  dataStatus: string;
};

/**
 * 페이지 프로젝트 상세 로그 진행상태 관리 타입
 * @state
 */
type PageDetailLoadProgressStateType = {
  [stateKey: string]: number;
  clicked: number; // 20; 프로젝트 상세보기 클릭 여부
  category: number; // 20; 상세 아이템
  loading: number; // 20; 로딩 진행바 숨김/보임
  success: number; // 40; 완료 여부
  open: number; // 20; 열림 상태
};
