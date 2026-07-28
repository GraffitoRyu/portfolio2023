import { NextResponse } from "next/server";
import { getData } from "@/data/server";
import cacheOptions from "@/lib/cache";
import { stacksData } from "@graffitoryu/preset-data";

/**
 * 기술 스택 조회 API
 * @api
 * @method GET
 * @route /api/profile/stacks
 * @return {Promise<NextResponse<StackAPIDataTypes[]>>}
 */
export async function GET(): Promise<NextResponse<StackAPIDataTypes[]>> {
  const res = await getData<StackAPIDataTypes[]>({
    routeUrl: "/api/profile/stacks",
    sourcePath: "/stacks",
    localData: stacksData,
    failResponse: [],
  });

  return NextResponse.json(res, { ...cacheOptions });
}
