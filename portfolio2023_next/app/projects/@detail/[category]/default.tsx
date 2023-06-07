"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

// types
import { pageStateTypes } from "@/types/state";

// state
import { pageState } from "@/states/page";

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
