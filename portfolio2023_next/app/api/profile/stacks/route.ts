import { NextResponse } from "next/server";
import { getFirebaseData } from "@/util/api.util";
import cacheOptions from "@/lib/cache.lib";

/**
 * 기술 스택 조회 API
 * @api
 * @route /api/profile/stacks
 * @return {Promise<NextResponse<StackAPIDataTypes[]>>}
 */
export async function GET(): Promise<NextResponse<StackAPIDataTypes[]>> {
  const res = await getFirebaseData<StackAPIDataTypes[]>({
    routeUrl: "/api/profile/stacks",
    queryUrl: "/stacks",
    failResponse: [],
  });

  return NextResponse.json(res, { ...cacheOptions });
}
