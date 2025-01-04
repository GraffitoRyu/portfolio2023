import { NextRequest, NextResponse } from "next/server";
import { initServerCookieState } from "@/jotai/server/util.server";
import setViewportDeviceInfo from "@/utils/cross-browsing/check-device";

/**
 * Next.js 미들웨어
 */
export default function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // 접속 디바이스 체크
  setViewportDeviceInfo(req, res);

  // 상태값 서버 초기화 세팅
  initServerCookieState(req, res);

  return res;
}
