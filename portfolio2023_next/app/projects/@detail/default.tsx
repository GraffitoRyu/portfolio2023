"use client";

import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

// types
import { DetailLayoutStateTypes } from "@/types/state";

// state
import { detailLayoutState } from "@/states/detail";

export default function Default() {
  const setDetailLayout =
    useSetRecoilState<DetailLayoutStateTypes>(detailLayoutState);

  useEffect(() => {
    setDetailLayout(prev => ({ ...prev, open: false }));
  }, [setDetailLayout]);

  return null;
}
