// components
import PageVisual from "../../components/common/pageVisual";

export default function pageContents() {
  return (
    <main
      id="pageContents"
      className="page-contents page-profile relative top-0"
    >
      <PageVisual borderText="Ready for" filledText="interaction" />
      <section className="page-section side-padding intro-section lg:flex items-start">
        <header className="section-header lg:w-1/2"></header>
        <div className="section-contents lg:w-1/2">
          <h2>
            <div className="intro-title-upper">
              인터랙션 이벤트 구현에 관심이 많은
            </div>
            <div className="intro-title-lower">
              프론트엔드 개발자 <strong>류대현</strong>입니다.
            </div>
          </h2>
          <p>
            <span>2018년 웹 디자인과 웹 퍼블리싱으로 시작하여,</span>
            <br />
            <span>2020년부터는 프론트엔드 개발 위주로 경험을 쌓았습니다.</span>
            <br />
            <span>컴포넌트 기반 구조와, 인터랙티브한 반응형 웹을</span>
            <br />
            <span>각각 효율적으로 구축하기 위해 항상 연구하고 있습니다.</span>
          </p>
        </div>
      </section>
      <section className="page-section side-padding lg:flex items-start">
        <header className="section-header lg:w-1/2">
          <h2>Career</h2>
          <p>
            <span>지난 5년간 실무 경험을 쌓은 </span>
            <br />
            <span>근무 경력입니다.</span>
          </p>
        </header>
        <div className="section-contents lg:w-1/2">컨텐츠 영역</div>
      </section>
      <section className="page-section side-padding lg:flex items-start">
        <header className="section-header lg:w-1/2">
          <h2>Experience</h2>
          <p>
            <span>현업에서는 다음의 경험으로 </span>
            <br />
            <span>스펙트럼을 넓혔습니다. </span>
            <br />
            <span>여기에 더해, 보편적인 트렌드에 </span>
            <br />
            <span>발맞춰 가기 위한 연구를 </span>
            <br />
            <span>진행중입니다.</span>
          </p>
        </header>
        <div className="section-contents lg:w-1/2">컨텐츠 영역</div>
      </section>
      <section className="page-section side-padding lg:flex items-start">
        <header className="section-header lg:w-1/2">
          <h2>Tools</h2>
          <p>
            <span>경험을 쌓으며 다루게된 </span>
            <br />
            <span>활용 가능한 기술 스택입니다.</span>
          </p>
        </header>
        <div className="section-contents lg:w-1/2">컨텐츠 영역</div>
      </section>
    </main>
  );
}
