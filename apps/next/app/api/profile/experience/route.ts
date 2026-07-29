import { NextResponse } from "next/server";
import { dataError, getData } from "@/data/server";
import cacheOptions from "@/lib/cache";
import { experienceData } from "@graffitoryu/preset-data";

/**
 * 경험 내용 조회 API
 * @api
 * @method GET
 * @route /api/profile/experience
 * @return {Promise<NextResponse<ExperienceAPIDataTypes[]>>}
 */
export async function GET() {
  try {
    const res = await getData<ExperienceAPIDataTypes[]>({
      routeUrl: "/api/profile/experience",
      sourcePath: "/experience",
      localData: experienceData,
      isValid: Array.isArray,
    });

    return NextResponse.json(res, { ...cacheOptions });
  } catch {
    return NextResponse.json(dataError, { status: 502 });
  }
}
