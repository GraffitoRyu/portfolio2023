/**
 * 프로젝트 상세; 요약정보 데이터
 */
interface ProjectsDetailInfoSummaryTypes {
  /**
   * 프로젝트 코드
   */
  code: string;
  /**
   * 프로젝트 요약정보 항목명
   */
  title: string;
  /**
   * 프로젝트 요약정보 컨텐츠
   */
  contents: string | string[];
  /**
   * 프로젝트 분류
   */
  type: string;
}

/**
 * 프로젝트 상세; 설명정보 데이터
 */
interface ProjectsDetailInfoDescTypes {
  /**
   * 프로젝트 코드
   */
  code: string;
  /**
   * 프로젝트 설명정보 항목명
   */
  title: string;
  /**
   * 프로젝트 설명정보 컨텐츠
   */
  contents: string[] | undefined;
}
