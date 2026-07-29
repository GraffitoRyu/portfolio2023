import { NextRequest, NextResponse } from "next/server";
import setViewportDeviceInfo from "@/utils/cross-browsing/check-device";

/**
 * Next.js 미들웨어
 */
export default function proxy(req: NextRequest) {
  const res = NextResponse.next();

  // 접속 디바이스 체크
  setViewportDeviceInfo(req, res);

  return res;
}
