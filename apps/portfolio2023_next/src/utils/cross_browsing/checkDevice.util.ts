import { NextResponse, type NextRequest } from "next/server";
import userAgentOptions from "@/data/userAgent";

/**
 * 반응형 웹 breakpoint 감지
 * @util
 * @cross_browsing
 * @param {string} userAgent
 * @return {BreakPointType} "desktop", "tablet", "mobile"
 */
const checkResponsiveDevice = (userAgent: string): BreakPointType => {
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
const checkAppleDevice = (userAgent: string): "true" | "false" => {
  const { apple } = userAgentOptions;
  const isApple = apple.some(agent => userAgent.includes(agent));
  return isApple ? "true" : "false";
};

/**
 * 감지된 기기환경 저장
 * @util
 * @cross_browsing
 * @param {NextRequest} req
 * @param {NextResponse} res
 * @return {NextResponse}
 */
export default function setViewportDeviceInfo(
  req: NextRequest,
  res: NextResponse,
): NextResponse {
  const userAgent = req.headers.get("user-agent") || "";
  const responseUpdate = res;

  // 접속 디바이스의 브레이크 포인트 체크
  responseUpdate.headers.set(
    "X-Responsive-Device",
    checkResponsiveDevice(userAgent),
  );

  // 접속 디바이스의 애플 기기 여부 체크
  responseUpdate.headers.set("X-Apple-Device", checkAppleDevice(userAgent));

  return responseUpdate;
}
