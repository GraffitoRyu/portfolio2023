import { getDetailData } from "@/util/getData";
import { useQuery } from "@tanstack/react-query";

export default function useGetDetailByCodeQuery(code: string | null) {
  return useQuery(["detail"], () => getDetailData(code), {
    enabled: typeof code === "string",
  });
}
