"use client";

import { useParams } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useSetRecoilState } from "recoil";

// types
import { DetailLayoutStateTypes } from "@/types/state";

// state
import { detailLayoutState } from "@/states/detail";

export default function ProjectsLayout({
  children,
  detail,
}: {
  children: ReactNode;
  detail?: ReactNode | null;
}) {
  const { category } = useParams();
  console.log(`projects/layout :: category - `, category);

  const setDetailOpen =
    useSetRecoilState<DetailLayoutStateTypes>(detailLayoutState);

  useEffect(() => {
    const isOpen = category ? true : false;
    console.log(`projects/layout :: isOpen - `, isOpen);

    setDetailOpen(prev => ({ ...prev, open: isOpen }));
  }, [category, setDetailOpen]);

  return (
    <>
      {children}
      {detail}
    </>
  );
}
