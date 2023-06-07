"use client";

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// style components
import {
  TransBox,
  TransTitle,
  TransitionCover,
} from "@/styles/styled/components/TransCover";

// state
import { pageState } from "@/states/page";

// data
import { transCoverData } from "@/data/transCover";

// types
import { pageStateTypes } from "@/types/state";
import { transCoverTypes } from "@/types/transCover";

export default function TransCover() {
  const { init, cover, loaded } = useRecoilValue<pageStateTypes>(pageState);
  const [loading, setLoading] = useState("");
  const [data, setData] = useState<transCoverTypes>(transCoverData[cover]);

  useEffect(() => {
    setData(transCoverData[cover]);
  }, [cover]);

  useEffect(() => {
    if (init) {
      if (loaded) setTimeout(() => setLoading(""), 1600);
      else setLoading("loading");
    }
  }, [init, loaded]);

  return (
    <TransitionCover className={loading}>
      <TransBox>
        <TransTitle>{data.title}</TransTitle>
      </TransBox>
    </TransitionCover>
  );
}
