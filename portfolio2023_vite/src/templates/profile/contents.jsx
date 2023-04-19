// components
import PageVisual from "../../components/common/pageVisual";
import PageSection from "../../components/common/pageSection";
import Intro from "../../components/profile/intro";
import Career from "../../components/profile/career";
import Experience from "../../components/profile/experience";
import Tools from "../../components/profile/tools";

export default function pageContents() {
  return (
    <>
      {/* <main id="pageContents" className="page-contents page-profile"> */}
      <PageSection
        page="profile"
        index={0}
        section_code="visual"
        borderText="Ready for"
        filledText="interaction"
      />
      <PageSection
        page="profile"
        index={1}
        section_code="intro"
        header={{ empty: true }}
        contents={<Intro />}
      />
      <PageSection
        page="profile"
        index={2}
        section_code="career"
        header={{
          empty: false,
          title: "career",
          desc: ["지난 5년간 실무 경험을 쌓은", "근무 경력입니다."],
        }}
        contents={<Career />}
      />
      <PageSection
        page="profile"
        index={3}
        section_code="experience"
        header={{
          empty: false,
          title: "experience",
          desc: [
            "현업에서는 다음의 경험으로",
            "스펙트럼을 넓혔습니다.",
            "여기에 더해, 보편적인 트렌드에",
            "발맞춰 가기 위한 연구를",
            "진행중입니다.",
          ],
        }}
        contents={<Experience />}
      />
      <PageSection
        page="profile"
        index={4}
        section_code="tools"
        header={{
          empty: false,
          title: "tools",
          desc: ["경험을 쌓으며 다루게된", "활용 가능한 기술 스택입니다."],
        }}
        contents={<Tools />}
      />
      {/* </main> */}
    </>
  );
}
