"use client";

import { useEffect, useMemo } from "react";
import { useAtom } from "jotai";

// style components
import { ProjectLoadingProgress } from "@/styles/styled/components/ProjectList";

// state
import { pageDetailLoadState } from "@/jotai/load.state";

export default function ProjectLoadingBar() {
  const [
    { clicked, category, dataStatus, open, openComplete, loading },
    setDetailLoad,
  ] = useAtom(pageDetailLoadState);

  const isHide = useMemo(() => (loading ? "" : "hide"), [loading]);

  /**
   * 1. category
   * 2. dataStatus : loading
   * 3. dataStats: success
   * 4. open: true
   */
  const percent = useMemo((): number => {
    const condition: PageDetailLoadProgressStateType = {
      clicked: clicked ? 20 : 0,
      category: category ? 20 : 0,
      loading: dataStatus === "loading" ? 20 : 0,
      success: dataStatus === "success" ? 40 : 0,
      open: open ? 20 : 0,
    };

    return Object.values(condition).reduce((acc, cur) => acc + cur, 0);
  }, [category, clicked, dataStatus, open]);

  useEffect(() => {
    if (openComplete) {
      setDetailLoad(prev => ({ ...prev, loading: false }));
      setTimeout(() => {
        setDetailLoad(prev => ({ ...prev, clicked: false }));
      }, 800);
    }
  }, [openComplete, setDetailLoad]);

  return (
    <ProjectLoadingProgress
      className={isHide}
      value={percent}
      max="100"
    ></ProjectLoadingProgress>
  );
}
