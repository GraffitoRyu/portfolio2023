"use client";

import { useParams } from "next/navigation";
import { useLayoutEffect } from "react";
import { useSetRecoilState } from "recoil";

// components
import ProjectDetail from "@/components/projectDetail/DetailContainer";

// type
import { DetailTypes } from "@/types/projectDetails";

// state
import { detailData } from "@/states/detail";

// util
import useGetDetailByCategoryQuery from "@/hooks/useGetDetailQuery";

export default function DetailCategory() {
  const { category } = useParams();
  console.log(`projects/@detail/[category]/page :: category:`, category);

  const { isLoading, isError, status, data } =
    useGetDetailByCategoryQuery(category);

  const setDetails = useSetRecoilState<DetailTypes>(detailData);

  // 프로젝트 상세 데이터 React-query로 가져오기
  useLayoutEffect(() => {
    if (!category) return;

    console.log(`[ReactQuery] status: ${status}`);
    if (status === "success") {
      console.log(`[ReactQuery] details: `, data);
      setDetails(prev => ({ ...prev, [data.code]: data }));
    }
  }, [category, data, setDetails, status]);

  if (!category || isLoading || isError) return null;

  return isLoading ? null : <ProjectDetail />;
}
