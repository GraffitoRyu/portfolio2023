import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// components
import ParseDescNewLine from "@/components/util/ParseDescNewLine";

// style components
import { PDTitle } from "@/styles/styled/components/ProjectDetail";

// types
import { DetailTypes } from "@/types/projects";

// state
import { detailData } from "@/states/detail";

export default function DetailTitleWrap() {
  const { category } = useParams();
  const detail = useRecoilValue<DetailTypes>(detailData);
  const [title, setTitle] = useState<string[]>([]);
  const [subtitle, setSubtitle] = useState<string>("");

  useEffect(() => {
    const d = detail[category];
    if (d?.summary?.title) setTitle(d.summary.title);
    if (d?.summary?.desc) setSubtitle(d.summary.desc);
  }, [category, detail]);

  return (
    <PDTitle>
      <h2>
        <ParseDescNewLine data={title} breakLine={false} />
      </h2>
      <p>{subtitle}</p>
    </PDTitle>
  );
}
