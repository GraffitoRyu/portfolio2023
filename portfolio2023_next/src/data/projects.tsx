type SummaryType = {
  title: string;
  desc: string;
  role: string[];
  period: Date[];
};

type LinkType = {
  key: string;
  name: string;
  url: string;
  hide: undefined | string[];
};
type ServiceType = {
  provider: string;
  platform: string;
  desc: string[];
  link: LinkType[];
};

type ExpDepthType = {
  depth1: string;
  depth2: string[];
};
type ExpType = {
  stacks: string[];
  desc: [string | ExpDepthType];
};

type MediaType = {
  referType: string;
  src: string;
  title: string;
  desc: string;
};

type ProjectsType = {
  code: string;
  summary: SummaryType;
  service: ServiceType;
  experience: ExpType;
  media: MediaType;
};

export const projectsData: ProjectsType = [
  {
    code: "teamsolution",
    summary: {
      title: "TeamSolution",
      desc: "실시간 텔레메트리 데이터 모니터링 및 실시간 주행 관제 솔루션",
      role: ["프론트엔드 개발", "웹 퍼블리싱", "유지보수"],
      period: [
        new Date("2019-11-01T00:00:00"),
        new Date("2022-11-01T00:00:00"),
      ],
    },
  },
];
