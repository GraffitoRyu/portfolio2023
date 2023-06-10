"use client";

import { useParams } from "next/navigation";
import { ReactNode } from "react";

export default function ProjectsLayout({
  children,
  detail,
}: {
  children: ReactNode;
  detail: ReactNode;
}) {
  const { category } = useParams();

  return (
    <>
      {children}
      {category ? detail : null}
    </>
  );
}
