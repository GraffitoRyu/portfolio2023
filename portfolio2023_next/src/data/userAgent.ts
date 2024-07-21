/**
 * userAgent > apple 디바이스 체크 키워드
 * @type {UserAgentDeviceType}
 */
const apple: UserAgentDeviceType = [
  "iPhone",
  "iPad",
  "iPod",
  "Mac",
  "macintosh",
];

/**
 * userAgent > 태블릿 체크 키워드
 * @type {UserAgentDeviceType}
 */
const tablet: UserAgentDeviceType = ["Tablet", "iPad", "playbook", "silk"];

/**
 * userAgent > 모바일 디바이스 체크 키워드
 * @type {UserAgentDeviceType}
 */
const mobile: UserAgentDeviceType = [
  "Android",
  "Mobile",
  "iPhone",
  "iPod",
  "iPad",
  "BlackBerry",
  "IEMobile",
  "Kindle",
  "NetFront",
  "Silk-Accelerated",
  "hpwOS",
  "webOS",
  "Fennec",
  "Minimo",
  "Opera Mobi",
  "Opera Mini",
  "Blazer",
  "Dolfin",
  "Dolphin",
  "Skyfire",
  "Zune",
];

/**
 * userAgent 체크 키워드 콜렉션
 * @type {UserAgentDeviceCollectionType}
 * @desc
 * - apple
 * - tablet
 * - mobile
 */
const userAgentOptions: UserAgentDeviceCollectionType = {
  apple,
  tablet,
  mobile,
};

export default userAgentOptions;
