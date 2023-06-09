import { useParams } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// style components
import {
  PDHeaderPageName,
  PDHeaderProjectName,
  PDHeaderTitleContainer,
} from "@/styles/styled/components/ProjectDetail";

// types
import { DetailTypes } from "@/types/projectDetails";

// state
import { detailData } from "@/states/detail";

export default function DetailHeaderTitleContainer() {
  const { category } = useParams();
  const data = useRecoilValue<DetailTypes>(detailData);
  const [title, setTitle] = useState<string>("");

  useLayoutEffect(() => {
    if (!category) return;

    const d = data[category];
    if (d?.summary?.title) setTitle(d.summary.title.join(" "));
  }, [category, data]);

  return (
    <PDHeaderTitleContainer>
      <PDHeaderPageName>프로젝트</PDHeaderPageName>
      <PDHeaderProjectName>{category ? title : ""}</PDHeaderProjectName>
    </PDHeaderTitleContainer>
  );
}
