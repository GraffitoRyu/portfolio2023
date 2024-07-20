import { revalidateTag } from "next/cache";

import { nextAPILog } from "./log.util";
import { firebaseDB, firebaseRef, firebaseGet } from "@/lib/firebase.lib";

/**
 * firebase API Fetch 요청
 * @util
 * @param {UtilGenerateGetApiUrlProps} props
 * @property {string} routeUrl Next.js API route URL
 * @property {string} queryUrl DB API query URL
 * @property {URLSearchParams} [searchParams] 쿼리 스트링
 * @property {object} [log] 디버깅을 위한 로그 데이터
 * @return {string} API 요청을 위한 최종 조합 URL
 */
export const getFirebaseData = async <TFetchDataType>({
  routeUrl,
  queryUrl,
  failResponse,
  searchParams,
  log,
}: UtilGenerateGetApiUrlProps<TFetchDataType>): Promise<TFetchDataType> => {
  try {
    const targetReference = firebaseRef(firebaseDB, queryUrl);

    // 쿼리 참조 데이터
    const referData: object = { ...log };
    if (typeof searchParams !== "undefined")
      Object.assign(referData, { searchParams });

    // 요청 모니터링 서버 로그
    nextAPILog(
      "get",
      routeUrl,
      queryUrl,
      Object.keys(referData).length > 0 ? referData : undefined,
    );

    // 데이터 요청
    const snapshotResponse = await firebaseGet(targetReference);

    // 에러 발생시
    if (!snapshotResponse.exists()) {
      throw new Error(`[API Error] route: ${routeUrl}`);
    }

    // 데이터 유효성 검사 및 갱신
    revalidateTag(routeUrl);

    return snapshotResponse.val();
  } catch (error) {
    // 요청 모니터링 서버 로그
    nextAPILog("get", routeUrl, queryUrl, { error });

    return failResponse;
  }
};
