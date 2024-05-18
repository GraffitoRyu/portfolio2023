/**
 * 사이트맵; 카테고리
 */
type SitemapCategoryType = "portfolio" | "recruit" | "contact" | "resume";

/**
 * 사이트맵; 카테고리별 사이트맵 데이터
 */
type SitemapDataType = {
  key: string; // react map key
  code: string; // 메뉴 영어코드
  name: string; // 메뉴 이름
  path: string; // 메뉴 경로
  isCopy?: boolean; // 복사 가능 여부
  isDownload?: boolean; // 다운로드 가능 여부
  isExternal?: boolean; // 외부 경로 여부
};

/**
 * 사이트맵; 유형별 데이터 컬렉션
 */
type SitemapCollectionType = {
  [category: SitemapCategoryType | string]: SitemapDataType[];
};
