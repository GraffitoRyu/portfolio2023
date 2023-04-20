export default function career() {
  const data = [
    {
      key: "3secondz",
      period: [new Date("2019-11-15"), new Date("2023-01-06")],
      role: "프론트엔드 엔지니어",
      company: "3SECONDZ",
      desc: "자사 솔루션 서비스 웹페이지 프론트엔드, 퍼블리싱 개발 및 유지보수 담당",
    },
    {
      key: "kweb",
      period: [new Date("2018-11-01"), new Date("2019-03-31")],
      role: "웹 퍼블리셔",
      company: "케이웹미디어",
      desc: "홈페이지 리뉴얼 프로젝트 퍼블리싱 외주 참여",
    },
    {
      key: "inct",
      period: [new Date("2018-01-01"), new Date("2018-10-31")],
      role: "웹 디자이너/퍼블리셔",
      company: "아이앤시티",
      desc: "기업 클라이언트 웹 페이지 디자인 및 퍼블리싱 제작 담당",
    },
  ];

  const userLocale = navigator.language;
  const dateOptions = {
    month: "short",
    year: "numeric",
  };

  return (
    <ul className="career-list">
      {data.map(d => (
        <li className="career-item" key={d.key}>
          <div className="period flex items-center">
            <time>{d.period[0].toLocaleString(userLocale, dateOptions)}</time>
            <span></span>
            <time>{d.period[1].toLocaleString(userLocale, dateOptions)}</time>
          </div>
          <h3 className="flex items-center">
            <strong className="role">{d.role}</strong>
            <span className="company flex items-center">{d.company}</span>
          </h3>
          <p>{d.desc}</p>
        </li>
      ))}
    </ul>
  );
}
