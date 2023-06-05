"use client";

import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

// state
import { pageState, pageStateTypes } from "@/states/page";

export default function Default() {
  const setBottomSheetOpen = useSetRecoilState<pageStateTypes>(pageState);

  useEffect(() => {
    setBottomSheetOpen(prev => ({
      ...prev,
      bottomSheetOpen: false,
    }));
  }, [setBottomSheetOpen]);

  return <></>;
}
