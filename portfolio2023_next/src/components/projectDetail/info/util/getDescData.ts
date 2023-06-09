import { DetailInfoDescTypes } from "@/types/projectDetails";
import { ExpDepthType, ProjectsType } from "@/types/projects";

/**
 * @desc 프로젝트 설명을 위한 데이터 가공
 * @param {ProjectsType} data detailData[category]
 * @return [introduce, experience]
 */
export function getDescData(data: ProjectsType): DetailInfoDescTypes[] {
  const { service, experience } = data;
  const introduceData = new DescriptionItems(
    "introduce",
    "프로젝트 소개",
    service.desc
  );
  const expData = new DescriptionItems(
    "experience",
    "작업 경험",
    experience.desc
  );
  return [introduceData, expData];
}

export class DescriptionItems implements DetailInfoDescTypes {
  code: string;
  title: string;
  contents: Array<ExpDepthType | string>;
  constructor(
    code: string,
    title: string,
    contents: Array<ExpDepthType | string>
  ) {
    this.code = code;
    this.title = title;
    this.contents = contents;
  }
}
