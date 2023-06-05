"use client";

import { pageState, pageStateTypes } from "@/states/page";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export default function OpenDetail() {
  const { category } = useParams();
  const setBottomSheetOpen = useSetRecoilState<pageStateTypes>(pageState);

  useEffect(() => {
    setBottomSheetOpen(prev => ({
      ...prev,
      bottomSheetOpen: category ? true : false,
    }));
  }, [category, setBottomSheetOpen]);

  return <></>;
}
