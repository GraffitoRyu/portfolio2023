"use client";

import { useParams } from "next/navigation";
import { useLayoutEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";

// type
import { DetailTypes } from "@/types/projectDetails";

// state
import { detailData } from "@/states/detail";

// util
import { getDetailData } from "@/util/getData";
import ProjectDetail from "@/components/projectDetail/DetailContainer";

export default function DetailCategory() {
  const { category } = useParams();
  console.log(`@detail/[category]/page :: category:`, category);

  const { isLoading, status, data } = useQuery({
    queryKey: ["details", category],
    queryFn: () => getDetailData(category),
  });

  const setDetails = useSetRecoilState<DetailTypes>(detailData);

  // 프로젝트 상세 데이터 React-query로 가져오기
  useLayoutEffect(() => {
    console.log(`[ReactQuery] status: ${status}`);
    if (status === "success") {
      console.log(`[ReactQuery] details: `, data);
      setDetails(prev => ({ ...prev, [data.code]: data }));
    }
  }, [data, setDetails, status]);

  if (!category || isLoading) return null;

  return <ProjectDetail />;
}
