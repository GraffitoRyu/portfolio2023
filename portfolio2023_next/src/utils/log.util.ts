import { dateFormat } from "./data/dateTime.util";

/**
 * 콘솔로그; 개발용
 * @param {unknown[]} arg
 */
export function consoleLog(...arg: unknown[]) {
  if (process.env.NODE_ENV === "production") return;
  return console.log(...arg);
}

/**
 * 콘솔로그; Next.js API Route 디버깅용
 * @param {string} method GET, POST, DELETE
 * @param {string} nextApiPath Next.js route API route URL
 * @param {string} DBApiPath DB API route URL
 * @param {unknown[]} messages 로그 데이터
 */
export const nextAPILog = (
  method: string,
  nextApiPath: string,
  DBApiPath: string,
  ...messages: unknown[]
) => {
  if (process.env.NODE_ENV === "production") return;

  const DATE = dateFormat(new Date());
  const TIME =
    new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    }).format(new Date()) +
    "." +
    new Date().getMilliseconds();

  const REQUEST_METHOD = method.split("-")[0].toUpperCase();
  const RESPONSE_METHOD = method.split("-")[1]
    ? method.split("-")[1].toUpperCase()
    : method.split("-")[0].toUpperCase();

  return console.log(
    // `⚡️`,
    `\n`,
    `[Next Server API] ⏱ ${DATE} ( ${TIME} )`,
    `\n  λ [${REQUEST_METHOD}] FE route`,
    `\n   ${nextApiPath}`,
    `\n  ═⏵ Ω [${RESPONSE_METHOD}] BE url`,
    `\n   ${DBApiPath}`,
    `\n`,
    ...(messages?.[0] ? [` ◇-`, ...messages] : []),
    `\n`,
  );
};
