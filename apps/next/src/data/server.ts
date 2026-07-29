import { unstable_cache } from "next/cache";

import { nextAPILog } from "@/utils/data/log";
import { cacheTime } from "@/lib/cache";
import { getFirebaseData } from "./firebase";

type GetDataOptions<TResponse> = {
  routeUrl: string;
  sourcePath: string;
  localData: TResponse;
  isValid: (data: unknown) => data is TResponse;
  code?: string;
  searchParams?: URLSearchParams;
  log?: object;
};

const getRemoteData = unstable_cache(
  async (sourcePath: string, code?: string): Promise<unknown> =>
    getFirebaseData(sourcePath, code),
  ["firebase"],
  { revalidate: cacheTime },
);

export const dataError = { error: "DATA_SOURCE_UNAVAILABLE" } as const;

export const getData = async <TResponse>({
  routeUrl,
  sourcePath,
  localData,
  isValid,
  code,
  searchParams,
  log,
}: GetDataOptions<TResponse>): Promise<TResponse> => {
  if (process.env.NODE_ENV === "development") {
    return localData;
  }

  try {
    const logData: object = { ...log };
    if (typeof searchParams !== "undefined") {
      Object.assign(logData, { searchParams });
    }

    nextAPILog(
      "get",
      routeUrl,
      sourcePath,
      Object.keys(logData).length > 0 ? logData : undefined,
    );

    const data = await getRemoteData(sourcePath, code);
    if (!isValid(data)) {
      throw new Error(`[Data Error] source: ${sourcePath}`);
    }

    return data;
  } catch (error) {
    nextAPILog("get", routeUrl, sourcePath, { error });
    throw error;
  }
};
