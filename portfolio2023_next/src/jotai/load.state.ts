import { atom } from "jotai";

/**
 * 페이지 로드 및 전환 상태관리
 */
export const pageLoadState = atom<PageLoadStateTypes>({
  init: false, // 새로고침 후 첫 진입
  initComplete: false, // 인트로 애니메이션 종료 여부
  currentPage: "profile", // 현재 페이지
  changePageName: "profile", // 페이지 전환 페이지 코드
  loaded: false, // 로딩 완료 여부
  loadComplete: false, // 로딩 애니메이션 종료 여부
  notFound: false, // 404 page
});

/**
 * 프로젝트 상세 페이지 로드 상태관리
 */
export const pageDetailLoadState = atom<PageDetailLoadStateTypes>({
  clicked: false, // 프로젝트 상세보기 클릭 여부
  category: "", // 상세 아이템
  loading: false, // 로딩 진행바 숨김/보임
  open: false, // 열림 상태
  openComplete: false, // 열림 트랜지션 후 완료
  dataStatus: "",
});
