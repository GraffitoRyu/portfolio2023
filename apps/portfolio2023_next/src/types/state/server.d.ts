/**
 * Client-Server 동기화 상태관리를 위한 사전설정 데이터 타입
 */
interface JotaiServerStateSetType {
  [setKey: string]: string;
  /**
   * 상태관리 저장을 위한 키
   */
  key: string;
  /**
   * 상태관리 기본값
   */
  defaultValue: string;
}
