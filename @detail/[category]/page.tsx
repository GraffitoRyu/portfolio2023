"use client";

import { useParams } from "next/navigation";
// import { Suspense } from "react";
import { ProjectDetailContainer } from "@/components/roots/ProjectDetailContainer";

export default function ProjectDetail() {
  const { category } = useParams();
  if (!category) return <div>NOTHING</div>;
  return (
    <ProjectDetailContainer>
      {/* <Suspense fallback={<div>loading</div>}> */}
      <div style={{ color: "white" }}>{category} : Introduce</div>
      {/* </Suspense> */}
      {/* <Suspense fallback={<div>loading</div>}> */}
      <div style={{ color: "white" }}>{category} : descriptions</div>
      {/* </Suspense> */}
      {/* <Suspense fallback={<div>loading</div>}> */}
      <div style={{ color: "white" }}>{category} : media</div>
      {/* </Suspense> */}
    </ProjectDetailContainer>
  );
}
