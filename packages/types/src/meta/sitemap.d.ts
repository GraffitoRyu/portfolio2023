/**
 * 사이트맵; 카테고리
 */
export type SitemapCategoryType =
  "portfolio" | "recruit" | "contact" | "resume";

export type RouteCode = "profile" | "projects";
export type RoutePath = "/" | "/projects";

type SitemapBaseData = {
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
};

export type SitemapRouteData = SitemapBaseData & {
  kind: "route";
  code: RouteCode;
  path: RoutePath;
};

export type SitemapExternalData = SitemapBaseData & {
  kind: "external";
};

export type SitemapCopyData = SitemapBaseData & {
  kind: "copy";
};

export type SitemapDownloadData = SitemapBaseData & {
  kind: "download";
};

/**
 * 사이트맵; 동작 종류가 명시된 카테고리별 사이트맵 데이터
 */
export type SitemapDataType =
  | SitemapRouteData
  | SitemapExternalData
  | SitemapCopyData
  | SitemapDownloadData;

/**
 * 사이트맵; 유형별 데이터 컬렉션
 */
export type SitemapCollectionType = {
  [category: SitemapCategoryType | string]: SitemapDataType[];
};
