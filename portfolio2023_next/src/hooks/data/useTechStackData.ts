"use client";

import { useMemo } from "react";

// fetch
import {
  useQueryProfileStackKeys,
  useQueryProfileStacksData,
} from "@/lib/query.lib";

/**
 * 프로필 > 기술스택; 데이터 추출 Hook
 * @hook
 * @return index, rawData, stackData
 */
export default function useTechStackData() {
  const { data: index = [] } = useQueryProfileStackKeys();
  const { data: rawData } = useQueryProfileStacksData();

  const stackData = useMemo(() => {
    if (typeof index === "undefined" || typeof rawData === "undefined")
      return {};

    const dataIndex: string[] = index.map((d: StackKeyAPIDataTypes) => d.code);

    const filterData = dataIndex.map((key: string) => {
      const filtered: StackAPIDataTypes[] = rawData.filter(
        (r: StackAPIDataTypes) => r.category === key,
      );
      return [key, filtered];
    });

    return Object.fromEntries(filterData);
  }, [index, rawData]);

  return { index, rawData, stackData };
}
