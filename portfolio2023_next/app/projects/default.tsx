"use client";

import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

// components
import Projects from "./page";

// types
import { DetailLayoutStateTypes } from "@/types/state";

// state
import { detailLayoutState } from "@/states/detail";
import { useParams } from "next/navigation";

export default function Default() {
  console.log("projects/default");
  const { category } = useParams();
  const setDetailLayout =
    useSetRecoilState<DetailLayoutStateTypes>(detailLayoutState);

  useEffect(() => {
    setDetailLayout(prev => ({ ...prev, open: category ? true : false }));
  }, [category, setDetailLayout]);

  return <Projects />;
}
