import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// components
import DetailInfoItem from "./DetailInfoItem";

// style components
import {
  PCDescContainer,
  PDSummaryContainer,
} from "@/styles/styled/components/ProjectDetail";

// state
import { detailData } from "@/states/detail";

// types
import { DetailInfoSummaryTypes, DetailTypes } from "@/types/projectDetails";
import { ProjectsType } from "@/types/projects";
import DetailInfoContents from "./DetailInfoContents";

export default function DetailInfoContainer() {
  const { category } = useParams();
  const data = useRecoilValue<DetailTypes>(detailData);
  const [summary, setSummary] = useState<DetailInfoSummaryTypes[]>([]);

  useEffect(() => {
    const d = data[category];
    if (d) {
      const summaryData = getSummaryData(d);
      setSummary(summaryData);
    }
  }, [category, data]);

  return (
    <>
      <PDSummaryContainer>
        {summary.map((s: DetailInfoSummaryTypes, si: number) => (
          <DetailInfoItem key={`summary_${si}`} title={s.title}>
            <DetailInfoContents
              code={s.code}
              type={s.type}
              contents={s.contents}
            />
          </DetailInfoItem>
        )) ?? ""}
      </PDSummaryContainer>
      <PCDescContainer></PCDescContainer>
    </>
  );
}

/**
 * @desc summary 데이터 가공
 * @return [role, period, provider, platform, stacks] : 각
 */
function getSummaryData(data: ProjectsType): DetailInfoSummaryTypes[] {
  const { summary, service, experience } = data;
  const role = new SummaryItems("role", "담당 업무", summary.role, "list");
  const period = new SummaryItems(
    "period",
    "작업/담당 기간",
    summary.period,
    "period"
  );
  const provider = new SummaryItems(
    "provider",
    "서비스 제공",
    service.provider,
    "string"
  );
  const platform = new SummaryItems(
    "platform",
    "서비스 형태",
    service.platform,
    "string"
  );
  const stacks = new SummaryItems(
    "stacks",
    "활용 기술",
    experience.stacks,
    "stacks"
  );

  return [role, period, provider, platform, stacks];
}

class SummaryItems implements DetailInfoSummaryTypes {
  code: string;
  title: string;
  contents: string | string[];
  type: string;

  constructor(
    code: string,
    title: string,
    contents: string | string[],
    type: string
  ) {
    this.code = code;
    this.title = title;
    this.contents = contents;
    this.type = type;
  }
}
