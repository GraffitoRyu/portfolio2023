import { NextResponse } from "next/server";
import { dataError, getData } from "@/data/server";
import cacheOptions from "@/lib/cache";
import { stackKeysData } from "@graffitoryu/preset-data";

/**
 * 기술 스택 key 조회 API
 * @api
 * @method GET
 * @route /api/profile/stacks/key
 * @return {Promise<NextResponse<StackKeyAPIDataTypes[]>>}
 */
export async function GET() {
  try {
    const res = await getData<StackKeyAPIDataTypes[]>({
      routeUrl: "/api/profile/stacks/key",
      sourcePath: "/stackKeys",
      localData: stackKeysData,
      isValid: Array.isArray,
    });

    return NextResponse.json(res, { ...cacheOptions });
  } catch {
    return NextResponse.json(dataError, { status: 502 });
  }
}
