"use client";

import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

// state
import { pageState, pageStateTypes } from "@/states/page";

export default function Default() {
  const setPage = useSetRecoilState<pageStateTypes>(pageState);

  useEffect(() => {
    setPage(prev => ({
      ...prev,
      bottomSheetOpen: false,
    }));
  }, [setPage]);

  return null;
}
