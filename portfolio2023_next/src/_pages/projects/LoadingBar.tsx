"use client";

import { useEffect, useState } from "react";
import { useAtom } from "jotai";

// style components
import { StyledProjectLoadingProgress } from "@/styles/styled/components/ProjectList";

// state
import { pageDetailLoadState } from "@/jotai/load.state";

export default function ProjectLoadingBar() {
  const [
    { clicked, category, dataStatus, open, openComplete, loading },
    setDetailLoad,
  ] = useAtom(pageDetailLoadState);

  const [isHide, setHide] = useState<boolean>(true);

  useEffect(() => {
    if (loading === true && isHide === true) {
      setHide(false);
      return;
    }

    if (isHide === true)
      setTimeout(() => {
        setHide(true);
      }, 800);
  }, [isHide, loading]);

  useEffect(() => {
    if (openComplete) {
      setDetailLoad(prev => ({ ...prev, loading: false }));
      setTimeout(() => {
        // setHide(true);
        setDetailLoad(prev => ({ ...prev, clicked: false }));
      }, 800);
    }
  }, [openComplete, setDetailLoad]);

  /**
   * 1. category
   * 2. dataStatus : loading
   * 3. dataStats: success
   * 4. open: true
   */
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (openComplete) {
      setProgress(100);
      return;
    }

    const condition: PageDetailLoadProgressStateType = {
      clicked: clicked ? 20 : 0,
      category: category ? 20 : 0,
      loading: dataStatus === "loading" ? 20 : 0,
      success: dataStatus === "success" ? 40 : 0,
      open: open ? 20 : 0,
    };

    setProgress(Object.values(condition).reduce((acc, cur) => acc + cur, 0));
  }, [category, clicked, dataStatus, open, openComplete]);

  return (
    <StyledProjectLoadingProgress
      className={isHide ? "" : "hide"}
      value={progress}
      max="100"
    ></StyledProjectLoadingProgress>
  );
}
