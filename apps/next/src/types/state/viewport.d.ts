/**
 * 프로필 > 경력; 각 항목 open 여부에 따른 높이값 상태관리
 * @state
 */
type CareerDetailHeight = {
  [code: string]: number;
};

/**
 * 뷰포트 사이즈 상태관리
 * @state
 */
type ViewportStateTypes = {
  windowWidth: number;
  windowHeight: number;
  headerHeight: number;
  columnWidth: number;
  careerExpandHeight: CareerDetailHeight;
  detailHeaderHeight: number;
};
