"use client";

import { useParams } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

// style components
import {
  PDVisualTitle,
  PDVisualTitleLine,
} from "@/styles/styled/components/ProjectDetail";

// state
import { detailData, detailLayoutState } from "@/states/detail";

// type
import { DetailTypes } from "@/types/projectDetails";
import {
  DetailLayoutStateTypes,
  DetailScrollRefStateTypes,
} from "@/types/state";
import { detailScrollRefState } from "@/states/scroll";

export default function DetailVisualTitle() {
  const { category } = useParams();
  const data = useRecoilValue<DetailTypes>(detailData);
  const [title, setTitle] = useState<string[]>([""]);

  const setDetailScrollRef =
    useSetRecoilState<DetailScrollRefStateTypes>(detailScrollRefState);

  const updateScrollRef = useCallback(
    (node: HTMLHeadingElement | null) => {
      setDetailScrollRef(prev => ({ ...prev, visualTitle: node }));
    },
    [setDetailScrollRef]
  );

  const { openComplete } =
    useRecoilValue<DetailLayoutStateTypes>(detailLayoutState);
  const [hide, setHide] = useState<string>("hide");

  useLayoutEffect(() => {
    if (category && data[category]?.summary?.title?.length > 0) {
      setTitle(data[category].summary.title);
    } else {
      setTitle([]);
    }
  }, [category, data]);

  useEffect(() => {
    setHide(openComplete ? "" : "hide");
  }, [openComplete]);

  return (
    <PDVisualTitle className={`${hide}`} ref={updateScrollRef}>
      {title.map((t: string, i: number) => (
        <PDVisualTitleLine key={`detailTitle_${t}_${i}`} $index={i}>
          {t}
        </PDVisualTitleLine>
      ))}
    </PDVisualTitle>
  );
}
