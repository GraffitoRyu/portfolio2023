import { atom } from "jotai";

/**
 * 페이지 로드 및 전환 상태관리
 * @state
 * @return {PageLoadStateTypes}
 */
export const pageLoadState = atom<PageLoadStateTypes>({
  /**
   * 새로고침 후 첫 진입
   * @type {boolean}
   */
  init: false,
  /**
   * 인트로 애니메이션 종료 여부
   * @type {boolean}
   */
  initComplete: false,
  /**
   * 현재 페이지
   * @type {string} profile, projects
   */
  currentPage: "profile",
  /**
   * 페이지 전환 페이지 코드
   * @type {string} profile, projects
   */
  changePageName: "profile",
  /**
   * 로딩 완료 여부
   * @type {boolean}
   */
  loaded: false,
  /**
   * 로딩 애니메이션 종료 여부
   * @type {boolean}
   */
  loadComplete: false,
  /**
   * 404 page
   * @type {boolean}
   */
  notFound: false,
});

/**
 * 프로젝트 상세 페이지 로드 상태관리
 * @state
 * @return {PageDetailLoadStateTypes}
 */
export const pageDetailLoadState = atom<PageDetailLoadStateTypes>({
  /**
   * 프로젝트 상세보기 클릭 여부
   * @type {boolean}
   */
  clicked: false,
  /**
   * 상세 아이템
   * @type {string}
   */
  category: "",
  /**
   * 로딩 진행바 숨김/보임
   * @type {boolean}
   */
  loading: false,
  /**
   * 열림 상태
   * @type {boolean}
   */
  open: false,
  /**
   * 열림 트랜지션 후 완료
   * @type {boolean}
   */
  openComplete: false,
  /**
   * 로딩바 상태 키
   * @type {string} 'pending' | 'error' | 'success' | ""
   * @see https://tanstack.com/query/latest/docs/framework/react/reference/useQuery return - status: QueryStatus
   * @example
   * ```tsx
   * export default function ProjectDetailContainer() {
   *  ...
   *  const { status } = useQueryProjectsDetailData();
   *  ...
   *  useEffect(() => {
   *    setState(prev => ({
   *      ...,
   *      dataStatus: status,
   *    }))
   *  }, [])
   *  ...
   * }
   * ```
   */
  dataStatus: "",
});
