import { useParams } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// components
import DetailInfoItem from "./DetailInfoItem";
import DetailInfoContents from "./DetailInfoContents";

// style components
import {
  PCDescContainer,
  PDSummaryContainer,
} from "@/styles/styled/components/ProjectDetail";

// state
import { detailData } from "@/states/detail";

// types
import {
  DetailInfoDescTypes,
  DetailInfoSummaryTypes,
  DetailTypes,
} from "@/types/projectDetails";

// util
import { getSummaryData } from "./util/getSummaryData";
import { getDescData } from "./util/getDescData";
import { ExpDepthType } from "@/types/projects";

export default function DetailInfoContainer() {
  const { category } = useParams();
  const data = useRecoilValue<DetailTypes>(detailData);
  const [summary, setSummary] = useState<DetailInfoSummaryTypes[]>([]);
  const [desc, setDesc] = useState<DetailInfoDescTypes[]>([]);

  useLayoutEffect(() => {
    if (!category) return;

    const d = data[category];
    if (d) {
      const summaryData = getSummaryData(d);
      const descData = getDescData(d);
      setSummary(summaryData);
      setDesc(descData);
    }
  }, [category, data]);

  return (
    <>
      <PDSummaryContainer>
        {summary.map((s: DetailInfoSummaryTypes, si: number) => (
          <DetailInfoItem
            key={`summary_${s.code}_${si}`}
            title={s.title}
            className={s.code !== "stacks" ? "w-1/2" : "w-full"}
          >
            <DetailInfoContents<string | string[]>
              code={s.code}
              type={s.type}
              contents={s.contents}
            />
          </DetailInfoItem>
        )) ?? ""}
      </PDSummaryContainer>
      <PCDescContainer>
        {desc.map((d: DetailInfoDescTypes, di: number) => (
          <DetailInfoItem
            key={`desc_${d.code}_${di}`}
            title={d.title}
            className="w-full"
          >
            <DetailInfoContents<(ExpDepthType | string)[] | undefined>
              code={d.code}
              type="list"
              contents={d.contents}
            />
          </DetailInfoItem>
        ))}
      </PCDescContainer>
    </>
  );
}
