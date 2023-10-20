import { useQuery } from "@tanstack/react-query";
import { getDetailData } from "@/util/getData";

export default function useGetDetailByCodeQuery(code: string | null) {
  return useQuery({
    queryKey: ["detail", code],
    queryFn: () => getDetailData(code),
    enabled: typeof code === "string",
  });
}
