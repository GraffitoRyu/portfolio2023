import { useEffect } from "react";

/**
 * 콘솔로그; 클라이언트 사이드용
 * @hook
 * @param {unknown[]} arg
 */
export default function useLog(...arg: unknown[]) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") return;
    console.log(...arg);
  }, [arg]);
}

/**
 * 콘솔 추적; 클라이언트 사이드용
 * @hook
 * @param {unknown[]} arg
 */
export function useTrace(...arg: unknown[]) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") return;
    console.trace(...arg);
  }, [arg]);
}
