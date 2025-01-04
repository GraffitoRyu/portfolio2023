import type { NextRequest, NextResponse } from "next/server";
import { checkResponsiveDevice, checkAppleDevice } from "@portfolio/utils";

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
