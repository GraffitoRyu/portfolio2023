/**
 * API Fetch URL 생성 유틸함수 props
 */
type UtilGenerateApiUrlProps = {
  /**
   * Next.js api 라우트
   * - 프론트 api url
   */
  routeUrl: string;
  /**
   * 백엔드 api 라우트
   * - 요청 쿼리 url
   */
  queryUrl: string;
  /**
   * 로그에 출력할 데이터 객체
   */
  log?: object;
};

/**
 * GET : API Fetch URL 생성 유틸함수 props
 */
type UtilGenerateGetApiUrlProps<TFailResponseType> = UtilGenerateApiUrlProps & {
  searchParams?: URLSearchParams;
  failResponse: TFailResponseType;
};

/**
 * POST : API Fetch URL 생성 유틸함수 props
 */
type UtilGenerateGetApiUrlProps = UtilGenerateApiUrlProps & {
  json?: object;
};
