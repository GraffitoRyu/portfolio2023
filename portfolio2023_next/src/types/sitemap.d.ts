/**
 * 사이트맵; 카테고리
 */
type SitemapCategoryType = "portfolio" | "recruit" | "contact" | "resume";

/**
 * 사이트맵; 카테고리별 사이트맵 데이터
 */
type SitemapDataType = {
  /**
   * 사이트맵; react map key
   */
  key: string;
  /**
   * 사이트맵; 메뉴 영어코드
   */
  code: string;
  /**
   * 사이트맵; 메뉴 명칭
   */
  name: string;
  /**
   * 사이트맵; 메뉴 경로
   */
  path: string;
  /**
   * 사이트맵; 컨텐츠 복사 가능 여부
   */
  isCopy?: boolean;
  /**
   * 사이트맵; 컨텐츠 다운로드 가능 여부
   */
  isDownload?: boolean;
  /**
   * 사이트맵; 외부 경로 여부
   */
  isExternal?: boolean;
};

/**
 * 사이트맵; 유형별 데이터 컬렉션
 */
type SitemapCollectionType = {
  [category: SitemapCategoryType | string]: SitemapDataType[];
};
