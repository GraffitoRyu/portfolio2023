import { revalidateTag } from "next/cache";

import { nextAPILog } from "@/utils/data/log";
import { readFirebaseData } from "./firebase";

type GetPortfolioDataOptions<TResponse> = {
  routeUrl: string;
  sourcePath: string;
  fixtureData: TResponse;
  failureData: TResponse;
  searchParams?: URLSearchParams;
  log?: object;
};

export const getPortfolioData = async <TResponse>({
  routeUrl,
  sourcePath,
  fixtureData,
  failureData,
  searchParams,
  log,
}: GetPortfolioDataOptions<TResponse>): Promise<TResponse> => {
  if (process.env.NODE_ENV === "development") {
    return fixtureData;
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

    const data = await readFirebaseData<TResponse>(sourcePath);
    revalidateTag(routeUrl, "max");

    return data;
  } catch (error) {
    nextAPILog("get", routeUrl, sourcePath, { error });
    return failureData;
  }
};
