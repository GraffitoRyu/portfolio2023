import { NextResponse } from "next/server";
import userAgentOptions from "@/data/userAgent";

const checkResponsiveDevice = (userAgent: string): BreakPointType => {
  const { mobile, tablet } = userAgentOptions;
  const isTablet = tablet.some((agent) => userAgent.includes(agent));
  const isMobile = mobile.some((agent) => userAgent.includes(agent));

  if (isMobile) {
    return isTablet ? "tablet" : "mobile";
  }
  return "desktop";
};

const checkAppleDevice = (userAgent: string): "true" | "false" => {
  const { apple } = userAgentOptions;
  const isApple = apple.some((agent) => userAgent.includes(agent));
  return isApple ? "true" : "false";
};

export default function setViewportDeviceInfo(
  response: NextResponse,
  userAgent: string,
): NextResponse {
  const responseUpdate = response;

  // 접속 디바이스의 브레이크 포인트 체크
  responseUpdate.headers.set(
    "X-Responsive-Device",
    checkResponsiveDevice(userAgent),
  );

  // 접속 디바이스의 애플 기기 여부 체크
  responseUpdate.headers.set("X-Apple-Device", checkAppleDevice(userAgent));

  return responseUpdate;
}
