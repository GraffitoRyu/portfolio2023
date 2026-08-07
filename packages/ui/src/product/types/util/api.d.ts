/**
 * 서버에 저장된 상태값 응답 공통타입
 */
interface ServerStateCommonResponseType {
  state: string;
  message: string;
}

/**
 * API GET response
 */
interface GetServerStateAPIResponseType extends ServerStateCommonResponseType {
  data: {
    key: string;
    value: string; // stringify된 데이터 -> fetch 후 parse
  };
}

/**
 * API POST request
 */
interface PostServerStateAPIRequestType {
  key: string;
  value: string;
}

/**
 * API POST response
 */
interface PostServerStateAPIResponseType extends ServerStateCommonResponseType {
  data: {
    key: string;
    value: string; // stringify된 데이터 -> fetch 후 parse
  };
}
