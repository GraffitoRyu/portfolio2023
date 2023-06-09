//type
import { ProjectsType } from "@/types/projects";
import { DetailInfoSummaryTypes } from "@/types/projectDetails";

/**
 * @desc summary 데이터 가공
 * @param {ProjectType} data detailData[category]
 * @return [role, period, provider, platform, stacks] : 각
 */
export function getSummaryData(data: ProjectsType): DetailInfoSummaryTypes[] {
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

export class SummaryItems implements DetailInfoSummaryTypes {
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
