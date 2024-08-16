import { NextResponse } from "next/server";
import { getFirebaseData } from "@/utils/data/api.util";
import cacheOptions from "@/lib/cache.lib";

/**
 * 기술 스택 key 조회 API
 * @api
 * @method GET
 * @route /api/profile/stacks/key
 * @return {Promise<NextResponse<StackKeyAPIDataTypes[]>>}
 */
export async function GET(): Promise<NextResponse<StackKeyAPIDataTypes[]>> {
  const res = await getFirebaseData<StackKeyAPIDataTypes[]>({
    routeUrl: "/api/profile/stacks/key",
    queryUrl: "/stackKeys",
    failResponse: [],
  });

  return NextResponse.json(res, { ...cacheOptions });
}
