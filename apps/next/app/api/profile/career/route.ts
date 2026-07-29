import { NextResponse } from "next/server";
import { dataError, getData } from "@/data/server";
import cacheOptions from "@/lib/cache";
import { careerData } from "@graffitoryu/preset-data";

/**
 * 커리어 조회 API
 * @api
 * @method GET
 * @route /api/profile/career
 * @return {Promise<NextResponse<CareerAPIDataType[]>>}
 */
export async function GET() {
  try {
    const res = await getData<CareerAPIDataType[]>({
      routeUrl: "/api/profile/career",
      sourcePath: "/career",
      localData: careerData,
      isValid: Array.isArray,
    });

    return NextResponse.json(res, { ...cacheOptions });
  } catch {
    return NextResponse.json(dataError, { status: 502 });
  }
}
