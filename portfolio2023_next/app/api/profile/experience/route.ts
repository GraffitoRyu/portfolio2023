import { NextResponse } from "next/server";
import { getFirebaseData } from "@/utils/data/api.util";
import cacheOptions from "@/lib/cache.lib";

/**
 * 경험 내용 조회 API
 * @api
 * @route /api/profile/experience
 * @return {Promise<NextResponse<ExperienceAPIDataTypes[]>>}
 */
export async function GET(): Promise<NextResponse<ExperienceAPIDataTypes[]>> {
  const res = await getFirebaseData<ExperienceAPIDataTypes[]>({
    routeUrl: "/api/profile/experience",
    queryUrl: "/experience",
    failResponse: [],
  });

  return NextResponse.json(res, { ...cacheOptions });
}
