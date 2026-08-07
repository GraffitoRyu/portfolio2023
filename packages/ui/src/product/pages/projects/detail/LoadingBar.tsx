"use client";

import { useEffect, useMemo, useState } from "react";
import { useAtom } from "jotai";

// style components
import { StyledProjectLoadingProgress } from "@graffitoryu/ui/product/styles/styled/components/ProjectList";

// state
import { pageDetailLoadState } from "@graffitoryu/ui/product/jotai/load.state";

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
    if (openComplete) {
      setDetailLoad(prev => ({ ...prev, loading: false }));
      setTimeout(() => {
        if (isHide === false) setHide(true);
        setDetailLoad(prev => ({ ...prev, clicked: false }));
      }, 800);
    }
  }, [isHide, loading, openComplete, setDetailLoad]);

  const progress = useMemo((): number => {
    if (openComplete) return 100;

    /**
     * 1. category
     * 2. dataStatus : loading
     * 3. dataStats: success
     * 4. open: true
     */
    const condition: PageDetailLoadProgressStateType = {
      clicked: clicked ? 20 : 0,
      category: category ? 20 : 0,
      loading: dataStatus === "loading" ? 20 : 0,
      success: dataStatus === "success" ? 40 : 0,
      open: open ? 20 : 0,
    };

    return Object.values(condition).reduce((acc, cur) => acc + cur, 0);
  }, [category, clicked, dataStatus, open, openComplete]);

  return (
    <StyledProjectLoadingProgress
      className={isHide ? "hide" : ""}
      value={progress}
      max="100"
    ></StyledProjectLoadingProgress>
  );
}
