import { NextResponse } from "next/server";
import { getFirebaseData } from "@/utils/data/api.util";
import cacheOptions from "@/lib/cache";

/**
 * 커리어 조회 API
 * @api
 * @method GET
 * @route /api/profile/career
 * @return {Promise<NextResponse<CareerAPIDataType[]>>}
 */
export async function GET(): Promise<NextResponse<CareerAPIDataType[]>> {
  const res = await getFirebaseData<CareerAPIDataType[]>({
    routeUrl: "/api/profile/career",
    queryUrl: "/career",
    failResponse: [],
  });

  return NextResponse.json(res, { ...cacheOptions });
}
