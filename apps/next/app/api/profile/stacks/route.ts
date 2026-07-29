import { NextResponse } from "next/server";
import { dataError, getData } from "@/data/server";
import cacheOptions from "@/lib/cache";
import { stacksData } from "@graffitoryu/preset-data";

/**
 * 기술 스택 조회 API
 * @api
 * @method GET
 * @route /api/profile/stacks
 * @return {Promise<NextResponse<StackAPIDataTypes[]>>}
 */
export async function GET() {
  try {
    const res = await getData<StackAPIDataTypes[]>({
      routeUrl: "/api/profile/stacks",
      sourcePath: "/stacks",
      localData: stacksData,
      isValid: Array.isArray,
    });

    return NextResponse.json(res, { ...cacheOptions });
  } catch {
    return NextResponse.json(dataError, { status: 502 });
  }
}
