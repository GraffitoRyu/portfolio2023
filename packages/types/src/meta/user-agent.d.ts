/**
 * 접속 디바이스 체크를 위한 userAgent 키워드 데이터 타입
 */
export type UserAgentDeviceType = string[];

/**
 * 접속 디바이스 체크를 위한 userAgent 키워드 컬렉션 타입
 */
export type UserAgentDeviceCollectionType = {
  /**
   * 접속 기기의 애플 디바이스 여부
   */
  apple: UserAgentDeviceType;
  /**
   * 접속 기기의 태블릿 여부
   */
  tablet: UserAgentDeviceType;
  /**
   * 접속 기기의 모바일 디바이스 여부
   */
  mobile: UserAgentDeviceType;
};
