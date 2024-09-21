"use client";

import { useMemo } from "react";
import { useAtomValue } from "jotai";

// states
import { pageDetailLoadState } from "@/jotai/load.state";
import { projectCategoryDetailDataState } from "@/jotai/pages/project.detail.state";

export default function useProjectCategoryDetailData() {
  const { category, openComplete } = useAtomValue(pageDetailLoadState);

  const data = useAtomValue(projectCategoryDetailDataState(category));

  const title = useMemo(
    () => data?.summary.title || undefined,
    [data?.summary.title],
  );

  return { category, data, title, openComplete };
}
