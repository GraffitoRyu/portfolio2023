/**
 * API Fetch URL 생성 유틸함수 props
 */
type UtilGenerateApiUrlProps = {
  routeUrl: string;
  queryUrl: string;
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
