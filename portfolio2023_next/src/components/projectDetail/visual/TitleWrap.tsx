import { useParams } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// components
import ParseDescNewLine from "@/components/util/ParseDescNewLine";

// style components
import { PDTitle } from "@/styles/styled/components/ProjectDetail";

// types
import { DetailTypes } from "@/types/projectDetails";

// state
import { detailData } from "@/states/detail";

export default function DetailTitleWrap() {
  const { category } = useParams();
  const data = useRecoilValue<DetailTypes>(detailData);

  const [title, setTitle] = useState<string[]>([]);
  const [subtitle, setSubtitle] = useState<string>("");

  useLayoutEffect(() => {
    if (!category) return;

    const d = data[category];
    if (d?.summary?.title) setTitle(d.summary.title);
    if (d?.summary?.desc) setSubtitle(d.summary.desc);
  }, [category, data]);

  return (
    <PDTitle>
      <h2>
        <ParseDescNewLine data={title} breakLine={false} />
      </h2>
      <p>{subtitle}</p>
    </PDTitle>
  );
}
