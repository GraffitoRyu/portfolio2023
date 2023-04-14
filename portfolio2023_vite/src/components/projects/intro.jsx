import React from "react";

export default function profileIntro() {
  const desc = [
    "참여했던 공개가 가능한 프로젝트 중 일부를 정리하였습니다.",
    "주로 프론트엔드 개발에 참여하였으며 마크업 단계에서부터 작업하였습니다.",
    "또한 개발 단계에서 레이아웃이나 아이콘 작업이 필요한 경우",
    "Figma를 통해 구도를 잡아 작업을 진행하였습니다.",
  ];

  return (
    <>
      <h2>
        <div className="intro-title">최근 참여한 프로젝트를 소개합니다.</div>
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
