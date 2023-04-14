import React from "react";

export default function profileIntro() {
  const desc = [
    "2018년 웹 디자인과 웹 퍼블리싱으로 시작하여,",
    "2020년부터는 프론트엔드 개발 위주로 경험을 쌓았습니다.",
    "컴포넌트 기반 구조와, 인터랙티브한 반응형 웹을",
    "각각 효율적으로 구축하기 위해 항상 연구하고 있습니다.",
  ];

  return (
    <>
      <h2>
        <div className="intro-title">인터랙션 이벤트 구현에 관심이 많은</div>
        <div className="intro-title">
          프론트엔드 개발자 <strong>류대현</strong>입니다.
        </div>
      </h2>
      <p>
        {desc.map((d, i) => (
          <React.Fragment key={`desc_${i}`}>
            <span>{d}</span>
            {i < desc.length - 1 ? <br /> : ""}
          </React.Fragment>
        ))}
      </p>
    </>
  );
}
