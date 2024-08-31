import { cookies } from "next/headers";
import type { NextRequest, NextResponse } from "next/server";
import { serverStateSet } from "./preset";

import { parseData, string } from "@/utils/data/convert.util";

/**
 * 서버와 클라이언트에서 상태값 동기화 활용을 위한 초기화 세팅
 * @util
 * @param {NextRequest} req
 * @param {NextResponse} res
 */
export function initServerCookieState(req: NextRequest, res: NextResponse) {
  // 초기 상태값 배열을 모두 서버에 저장
  serverStateSet.forEach(({ key, defaultValue }) => {
    // 쿠키에 저장된 상태값 추출
    const cookieValue = req.cookies.get(key) || undefined;

    // console.log(`[middleware :: ${key}] request - cookie:`, cookieValue);

    // 쿠키 데이터 없을 떄 초기화 적용
    if (!cookieValue) {
      // console.log(`[middleware :: ${key}] defaultValue:`, defaultValue);

      res.cookies.set(key, string(defaultValue), { path: "/", httpOnly: true });
    }

    // console.log(
    //   `[middleware :: ${key}] response - cookie`,
    //   res.cookies.get(key),
    // );
  });
}

/**
 * 서버 컴포넌트에서 서버의 상태값 추출
 * @util
 * @param {string} stateKey
 * @param {unknown} alt 기본 상태 값
 * @return {unknown} 상태값
 */
export const getServerState = <StateValueType>(
  stateKey: string,
  alt: StateValueType,
): StateValueType => {
  const state = cookies().get(stateKey)?.value || undefined;
  return state ? (parseData(state) as StateValueType) : alt;
};
