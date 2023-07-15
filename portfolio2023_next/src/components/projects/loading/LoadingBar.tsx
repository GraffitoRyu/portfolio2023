"use client";

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

// style components
import { ProjectLoadingProgress } from "@/styles/styled/components/ProjectList";

// state
import { detailLayoutState } from "@/states/detail";

// type
import { DetailLayoutStateTypes } from "@/types/state";

export default function ProjectLoadingBar() {
  const [
    { category, dataStatus, open, openComplete, loading },
    setDetailLayout,
  ] = useRecoilState<DetailLayoutStateTypes>(detailLayoutState);
  const [percent, setPercent] = useState<number>(0);
  const [hide, setHide] = useState<string>("hide");

  /**
   * 1. category
   * 2. dataStatus : loading
   * 3. dataStats: success
   * 4. open: true
   */

  useEffect(() => {
    const condition = {
      category: category ? 25 : 0,
      loading: dataStatus === "loading" ? 25 : 0,
      success: dataStatus === "success" ? 50 : 0,
      open: open ? 25 : 0,
    };

    const curProgress = Object.values(condition).reduce(
      (acc, cur) => acc + cur,
      0
    );
    setPercent(curProgress);
  }, [category, dataStatus, open]);

  useEffect(() => {
    if (openComplete) setDetailLayout(prev => ({ ...prev, loading: false }));
  }, [openComplete, setDetailLayout]);

  useEffect(() => {
    setHide(loading ? "" : "hide");
  }, [loading]);

  return (
    <ProjectLoadingProgress
      className={`${hide}`}
      value={percent}
      max="100"
    ></ProjectLoadingProgress>
  );
}
