export const detailsRoute = [
  { key: "ts", pathQuery: "teamsolution" },
  { key: "rs", pathQuery: "racesolution" },
  { key: "sm", pathQuery: "solutionmaster" },
  { key: "lvl", pathQuery: "lapvslap" },
];

export const detailsData = [
  {
    key: "ts",
    summary: {
      title: "TeamSolution",
      desc: "실시간 텔레메트리 데이터 모니터링 및 실시간 주행 관제 솔루션",
      role: ["프론트엔드 개발", "웹 퍼블리싱", "유지보수"],
      period: [
        new Date("2019-11-01T00:00:00"),
        new Date("2022-11-01T00:00:00"),
      ],
    },
    service: {
      provider: "3SECONDZ",
      platform: "웹 기반 솔루션",
      desc: [
        "자사 하드웨어 제품 XYRO를 통한 텔레메트리 데이터를, 실시간으로 웹 페이지에 시각화하여 각 차량의 상태를 모니터링하는 서비스를 메인으로 함",
        "크게 개인용 페이지 / 매니저 페이지 / 솔루션 페이지로 구성",
        "최대 5인 구성의 팀 단위 주행을 실시간 모니터링 및 리플레이 서비스 제공",
        "개인 회원 및 매니저 회원의 관리 페이지 개선 및 유지보수",
        "TeamSolution 모바일 앱의 웹뷰 페이지 개선 및 유지보수",
      ],
      link: [
        {
          key: "ts_home",
          name: "3SECONDZ",
          url: "https://www.3secondz.com/",
        },
        {
          key: "ts_service",
          name: "3SECONDZ 서비스 플랫폼",
          url: "https://www.3secondz.com/service",
        },
        {
          key: "ts_introduce",
          name: "서비스 소개",
          url: "https://3secondz.com/service/info_teamsolution",
        },
        {
          key: "ts_demo",
          name: "라이브 데모",
          url: "https://3secondz.com/livedemo",
        },
      ],
    },
    experience: {
      stacks: [
        "html",
        "css",
        "javascript",
        "jquery",
        "sass",
        "ejs",
        "d3.js",
        "googlemaps",
        "zeplin",
        "ajax",
        "websocket",
        "json",
        "git",
      ],
      desc: [
        "입사 당시 어느정도 기반이 구축된 상태에서 업무 투입",
        "Node.js + Gulp 기반 환경에서의 첫 실무 경험",
        "Scss 첫 실무 활용",
        "모바일 앱 웹뷰 페이지에 대한 반응형 처리",
        "메인 라이브러리로 jQuery를 활용",
        "그래픽 요소(주행트랙, 주행위치, 라인차트 등)는 d3.js로 구현",
        "faye를 통해 웹소켓 채널 수신 및 JSON 데이터 활용",
        "jQuery Ajax를 통해 데이터 송수신 처리",
        {
          depth1: "위젯 기능 중 일부에 대한 후속 도입 시 개발 참여",
          depth2: [
            "컴포넌트 재생성 기법을 활용",
            "Ajax로 관련 데이터 조회하여 요소 재생성",
            "웹소켓을 통핸 데이터 수신으로 현재 상태 동기화 처리",
            "속도, 기어, G plot 등의 실시간 정보를 표현하는 HUD 위젯 구현",
          ],
        },
      ],
    },
  },
  {
    key: "rs",
    summary: {
      title: "RaceSolution\n & HUD for broadcast",
      desc: "국내 최대 모터스포츠 경기 SUPERRACE의 관제 솔루션 및 방송 중계 오버레이 HUD",
      role: ["프론트엔드 개발", "웹 퍼블리싱", "유지보수"],
      period: [
        new Date("2022-04-01T00:00:00"),
        new Date("2022-10-01T00:00:00"),
      ],
    },
    service: {
      provider: "3SECONDZ",
      platform: "웹 기반 솔루션",
      desc: [
        "모터스포츠 경기의 실시간 주행 관제를 위한 솔루션으로 개발",
        "유튜브를 포함한 경기 중계 화면에서, 선수 개인 주행화면 송출 시 오버레이되는 HUD 화면 개발",
      ],
      link: [
        {
          key: "rs_home",
          name: "3SECONDZ",
          url: "https://www.3secondz.com/",
        },
        {
          key: "rs_press",
          name: "언론보도",
          url: "https://sports.chosun.com/news/ntype.htm?id=202203250100155390009498&servicedate=20220324",
        },
        {
          key: "rs_hud",
          name: "HUD 방송영상",
          url: "https://www.youtube.com/channel/UCTErTefCM2D-OH5D9CN8urQ",
        },
      ],
    },
    experience: {
      stacks: [
        "html",
        "css",
        "javascript",
        "jquery",
        "sass",
        "ejs",
        "d3.js",
        "googlemaps",
        "zeplin",
        "ajax",
        "websocket",
        "json",
        "git",
      ],
      desc: [
        "기존의 TeamSoluton과 동일한 기술을 활용하여, 기능을 확장",
        "Ajax를 통해 엔트리를 조회하여 jQuery로 관제할 엔트리 테이블을 재생성",
        "재생성된 이벤트에 대한 이벤트 재부여 및 다중 선택항목에 대해 일괄 API 호출 등 기능 구현",
        "방송 화면의 오버레이될 HUD 컨트롤 페이지 개발",
        "실시간으로 수신받은 텔레메트리 데이터를, CSS를 활용하여 SVG 이미지를 움직여 표현하도록 구현",
        "Ajax를 통한 경기선수 검색 기능 구현",
      ],
    },
  },
  {
    key: "sm",
    summary: {
      title: "SolutionMaster",
      desc: "기관 및 R&D 목적으로 다수의 주행 차량을 관리 및 관제하기 위한 종합 관리 솔루션",
      role: ["프론트엔드 개발", "웹 퍼블리싱", "유지보수"],
      period: [
        new Date("2021-02-01T00:00:00"),
        new Date("2022-12-01T00:00:00"),
      ],
    },
    service: {
      provider: "3SECONDZ",
      platform: "웹 기반 솔루션",
      desc: [
        "제한없는 다수의 차량에 대한 주행 정보 관리 및 실시간 텔레메트리 관제 서비스 제공",
        "차량 관리만을 위한 관리 페이지와, 실시간 모니터링 및 조작을 위한 관제 페이지, 리플레이 페이지 제공",
      ],
      link: [
        {
          key: "sm_home",
          name: "3SECONDZ",
          url: "https://www.3secondz.com/",
        },
      ],
    },
    experience: {
      stacks: [
        "html",
        "css",
        "javascript",
        "jquery",
        "sass",
        "ejs",
        "d3.js",
        "googlemaps",
        "zeplin",
        "ajax",
        "websocket",
        "json",
        "git",
      ],
      desc: [
        "등록된 여러 정보를 일괄 관리하기 위한 매니저 페이지 제공을 위해 Ajax와 컴포넌트 재생성 등을 활용",
        "모달을 통한 정보 편집 기능 구현",
        "주행 세션 개설 시, 위한 컨트롤러에서 히든 트랙 기능을 추가",
        "주행 세션 개설 시, 원하는 시간 예약을 위한 시간 선택 기능 구현",
        "웹소켓을 통해, 현재 개설된 세션 정보에 따라 인디케이터가 동작하도록 구현",
        "웹소켓을 통해, 등록된 자사 하드웨어의 상태 실시간 모니터링",
      ],
    },
  },
  {
    key: "lvl",
    summary: {
      title: "Session Report;\n Lap vs Lap",
      desc: "주행 세션 데이터 분석 서비스",
      role: ["프론트엔드 개발", "웹 퍼블리싱", "유지보수"],
      period: [
        new Date("2021-07-01T00:00:00"),
        new Date("2022-12-01T00:00:00"),
      ],
    },
    service: {
      provider: "3SECONDZ",
      platform: "웹 기반 솔루션",
      desc: [
        "분석 대상 드라이버에 대한 주행 데이터 분석을 제공",
        "권한에 따라 접근 가능한 주행 데이터에 대한 비교 분석 서비스 제공",
      ],
      link: [
        {
          key: "lvl_home",
          name: "3SECONDZ",
          url: "https://www.3secondz.com/",
        },
        {
          key: "lvl_lapvslap",
          name: "라이브 데모",
          url: "https://www.3secondz.com/demo",
        },
      ],
    },
    experience: {
      stacks: [
        "html",
        "css",
        "javascript",
        "jquery",
        "sass",
        "ejs",
        "d3.js",
        "googlemaps",
        "zeplin",
        "ajax",
        "websocket",
        "json",
        "git",
      ],
      desc: [
        "TeamSolution을 기반으로 하나, 주행 트랙 표현을 위한 매커니즘을 재구성하여 모듈화 리뉴얼 진행",
        "d3.js를 활용하여 텔레메트리 데이터 채널에 대한 라인 차트를 생성, 확대/축소/패닝 등 탐색을 위한 인터랙션 구현",
        "트랙 탐색을 위한 확대/축소/패닝 동작에 대해, 마우스, 트랙패드, 터치 인터랙션을 각각 구현",
        "주행 데이터의 기준 인덱스 별로 재생 동작 구현",
        "주행 데이터 비교를 위해, 주행 세션 데이터에 대한 전역 상태객체를 두고 상태 데이터 교체 운용을 위한 체계 구축",
        "데이터의 탐색 기준 인덱스에 대해 상호 교체 운용을 위한 체계 구축",
      ],
    },
  },
];

export const projectsData = detailsRoute.map(r => {
  const details = detailsData.find(d => d.key === r.key);
  return { ...r, ...details };
});
