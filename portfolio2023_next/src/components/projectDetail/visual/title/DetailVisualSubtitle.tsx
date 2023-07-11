"use client";

import { useParams } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// style components
import { PDVisualSubtitle } from "@/styles/styled/components/ProjectDetail";

// state
import { detailData, detailLayoutState } from "@/states/detail";

// type
import { DetailTypes } from "@/types/projectDetails";
import { DetailLayoutStateTypes } from "@/types/state";

export default function DetailVisualSubtitle() {
  const { category } = useParams();
  const data = useRecoilValue<DetailTypes>(detailData);
  const [desc, setDesc] = useState<string>("");

  const { openComplete } =
    useRecoilValue<DetailLayoutStateTypes>(detailLayoutState);
  const [delayIndex, setDelayIndex] = useState<number>(0);
  const [hide, setHide] = useState<string>("hide");

  useLayoutEffect(() => {
    if (category && data[category]?.summary?.desc) {
      setDesc(data[category].summary.desc);
      const titleLength = data[category].summary.title?.length ?? 0;
      setDelayIndex(titleLength);
    } else {
      setDesc("");
      setDelayIndex(0);
    }
  }, [category, data]);

  useEffect(() => {
    setHide(openComplete ? "" : "hide");
  }, [openComplete]);

  return (
    <PDVisualSubtitle className={`${hide}`} $index={delayIndex}>
      {desc}
    </PDVisualSubtitle>
  );
}
