interface ProjectsAPIDataType {
  [index: string]:
    | string
    | SummaryType
    | ServiceType
    | ExpType
    | MediaType
    | MediaType[]
    | undefined;
  code: string;
  summary: SummaryType;
  service?: ServiceType;
  sub_visual?: MediaType;
  experience?: ExpType;
  media?: MediaType[];
}
