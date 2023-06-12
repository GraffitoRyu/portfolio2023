import { useSearchParams } from "next/navigation";
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
  const params = useSearchParams();
  const code = params.get("code");
  const data = useRecoilValue<DetailTypes>(detailData);
  const [title, setTitle] = useState<string>("");

  useLayoutEffect(() => {
    if (!code) return;

    const d = data[code];
    if (d?.summary?.title) setTitle(d.summary.title.join(" "));
  }, [code, data]);

  return (
    <PDHeaderTitleContainer>
      <PDHeaderPageName>프로젝트</PDHeaderPageName>
      <PDHeaderProjectName>{title}</PDHeaderProjectName>
    </PDHeaderTitleContainer>
  );
}
