import { revalidateTag } from "next/cache";

import { nextAPILog } from "@/utils/data/log";
import { getFirebaseData } from "./firebase";

type GetDataOptions<TResponse> = {
  routeUrl: string;
  sourcePath: string;
  localData: TResponse;
  failResponse: TResponse;
  searchParams?: URLSearchParams;
  log?: object;
};

export const getData = async <TResponse>({
  routeUrl,
  sourcePath,
  localData,
  failResponse,
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

    const data = await getFirebaseData<TResponse>(sourcePath);
    revalidateTag(routeUrl, "max");

    return data;
  } catch (error) {
    nextAPILog("get", routeUrl, sourcePath, { error });
    return failResponse;
  }
};
