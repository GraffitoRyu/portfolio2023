"use client";

import { useParams } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";

// type
import { pageStateTypes } from "@/types/state";
import { DetailTypes } from "@/types/projectDetails";

// state
import { pageState } from "@/states/page";
import { detailData } from "@/states/detail";

// util
import { getDetailData } from "@/util/getData";

export default function OpenDetail() {
  const { category } = useParams();

  const { isLoading, status, data } = useQuery({
    queryKey: ["details", category],
    queryFn: () => getDetailData(category),
  });

  const setBottomSheetOpen = useSetRecoilState<pageStateTypes>(pageState);
  const setDetails = useSetRecoilState<DetailTypes>(detailData);

  // 프로젝트 상세 데이터 React-query로 가져오기
  useLayoutEffect(() => {
    console.log(`[ReactQuery] status: ${status}`);
    if (status === "success") {
      console.log(`[ReactQuery] details: `, data);
      setDetails(prev => ({ ...prev, [data.code]: data }));
    }
  }, [data, setDetails, status]);

  // 상세 bottom sheet 열기
  useEffect(() => {
    setBottomSheetOpen(prev => ({
      ...prev,
      bottomSheetOpen: category ? true : false,
    }));
  }, [category, setBottomSheetOpen]);

  if (!category || isLoading) return;

  return <></>;
}
