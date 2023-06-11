import { getDetailData } from "@/util/getData";
import { useQuery } from "@tanstack/react-query";

export default function useGetDetailByCategoryQuery(category: string) {
  return useQuery(["detail"], () => getDetailData(category), {
    enabled: typeof category === "string",
  });
}
