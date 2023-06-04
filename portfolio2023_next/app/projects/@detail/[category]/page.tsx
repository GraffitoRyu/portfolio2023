"use client";

import { ProjectDetailContainer } from "@/components/roots/ProjectDetailContainer";
import { useParams } from "next/navigation";

export default function DetailProject() {
  const { category } = useParams();
  return (
    <ProjectDetailContainer>
      <h1 style={{ color: "#fff" }}>{category} detail</h1>
    </ProjectDetailContainer>
  );
}
