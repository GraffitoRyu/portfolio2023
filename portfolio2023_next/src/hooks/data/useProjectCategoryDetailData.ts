"use client";

import { useAtomValue } from "jotai";

import { projectCategoryDetailDataState } from "@/jotai/pages/project.detail.state";
import { pageDetailLoadState } from "@/jotai/load.state";
import { useMemo } from "react";

export default function useProjectCategoryDetailData() {
  const { category } = useAtomValue(pageDetailLoadState);

  const data = useAtomValue(projectCategoryDetailDataState(category));

  const title = useMemo(
    (): string[] | undefined => data?.summary.title || undefined,
    [data?.summary.title],
  );

  return { category, data, title };
}
