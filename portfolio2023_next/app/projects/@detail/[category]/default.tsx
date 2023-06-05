"use client";

import { pageState, pageStateTypes } from "@/states/page";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export default function OpenDetail() {
  const { category } = useParams();
  const setPage = useSetRecoilState<pageStateTypes>(pageState);

  useEffect(() => {
    setPage(prev => ({
      ...prev,
      bottomSheetOpen: category ? true : false,
    }));
  }, [category, setPage]);

  return null;
}
