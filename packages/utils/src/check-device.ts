import { userAgentOptions } from "@portfolio/preset-data";
import { BreakPointType } from "@portfolio/types";

/**
 * 반응형 웹 breakpoint 감지
 * @util
 * @cross_browsing
 * @param {string} userAgent
 * @return {BreakPointType} "desktop", "tablet", "mobile"
 */
export const checkResponsiveDevice = (userAgent: string): BreakPointType => {
  const { mobile, tablet } = userAgentOptions;
  const isTablet = tablet.some(agent => userAgent.includes(agent));
  const isMobile = mobile.some(agent => userAgent.includes(agent));

  if (isMobile) {
    return isTablet ? "tablet" : "mobile";
  }
  return "desktop";
};

/**
 * 애플 디바이스 감지
 * @util
 * @cross_browsing
 * @param {string} userAgent
 * @return {"true"|"false"}
 */
export const checkAppleDevice = (userAgent: string): "true" | "false" => {
  const { apple } = userAgentOptions;
  const isApple = apple.some(agent => userAgent.includes(agent));
  return isApple ? "true" : "false";
};
