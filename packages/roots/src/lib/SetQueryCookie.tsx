"use client";

import { useCallback, useEffect } from "react";
import { setServerState } from "@portfolio/util-jotai";

/**
 * 쿠키 요청값 업데이트
 * @component
 * @desc
 * - 클라이언트에서 정보를 받아 서버 쿠키로 요청이 필요한 경우 사용
 */
export default function SetQueryCookie() {
  /**
   * 언어설정 쿠키 요청값 업데이트
   */
  const setLocaleCookie = useCallback(() => {
    if (typeof window === "undefined") return;
    const locale = localStorage.getItem("systemLocale");
    setServerState("systemLocale", locale, "ko");
  }, []);

  // 클라이언트에서 실행
  useEffect(() => {
    setLocaleCookie();
  }, [setLocaleCookie]);

  return null;
}
