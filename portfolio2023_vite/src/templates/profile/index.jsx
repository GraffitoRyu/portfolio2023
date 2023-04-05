import React, { useEffect, useState } from 'react';

import PageVisual from "../../components/common/pageVisual";

export default function profilePage(props) {
  return (
    <main id="pageContents" className="page-contents page-profile">
      <PageVisual borderText="Ready for" filledText="interaction" />
      <section className="page-section side-padding flex items-start">
        <header className="section-header">
          <h2>Career</h2>
          <p>
            지난 5년간 실무 경험을 쌓은 <br />
            근무 경력입니다.
          </p>
        </header>
        <div className="section-contents">컨텐츠 영역</div>
      </section>
      <section className="page-section side-padding flex items-start">
        <header className="section-header">
          <h2>Experience</h2>
          <p>
            현업에서는 다음의 경험으로 <br />
            스펙트럼을 넓혔습니다. <br />
            여기에 더해, 보편적인 트렌드에 <br />
            발맞춰 가기 위한 연구를 <br />
            진행중입니다.
          </p>
        </header>
        <div className="section-contents">컨텐츠 영역</div>
      </section>
      <section className="page-section side-padding flex items-start">
        <header className="section-header">
          <h2>Tools</h2>
          <p>
            경험을 쌓으며 다루게된 <br />
            활용 가능한 기술 스택입니다.
          </p>
        </header>
        <div className="section-contents">컨텐츠 영역</div>
      </section>
    </main>
  );
}