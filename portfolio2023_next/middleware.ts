import setViewportDeviceInfo from "@/util/cross_browsing/checkDevice";
import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const userAgent = req.headers.get("user-agent") || "";

  const res = NextResponse.next();

  // 접속 디바이스 체크
  const updateDeviceInfo = setViewportDeviceInfo(res, userAgent);

  return updateDeviceInfo;
}
