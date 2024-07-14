import { NextRequest, NextResponse } from "next/server";
import setViewportDeviceInfo from "@/util/cross_browsing/checkDevice";

/**
 * Next.js 미들웨어
 */
export default function middleware(req: NextRequest) {
  const userAgent = req.headers.get("user-agent") || "";

  const res = NextResponse.next();

  // 접속 디바이스 체크
  const updateDeviceInfo = setViewportDeviceInfo(res, userAgent);

  return updateDeviceInfo;
}
