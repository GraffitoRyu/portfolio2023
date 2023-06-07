"use client";

import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

// components
import Projects from "./page";

// types
import { pageStateTypes } from "@/types/state";

// state
import { pageState } from "@/states/page";

export default function Default() {
  const setPage = useSetRecoilState<pageStateTypes>(pageState);

  useEffect(() => {
    setPage(prev => ({ ...prev, bottomSheetOpen: false }));
  }, [setPage]);

  return <Projects />;
}
