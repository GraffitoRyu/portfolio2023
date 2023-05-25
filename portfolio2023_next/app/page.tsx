import PageSection from "@/components/pageSection/PageSection";
import SectionHeader from "@/components/pageSection/Header";
import SectionContents from "@/components/pageSection/Contents";
import Career from "@/components/profile/Career";
import Experience from "@/components/profile/Experience";
import Tools from "@/components/profile/Tools";

export default function Profile() {
  return (
    <>
      <div className="page-section intro-section">
        <h1>프로필</h1>
      </div>
      <PageSection>
        <SectionHeader
          title="career"
          desc={["지난 5년간 실무 경험을 쌓은 ", "근무 경력입니다."]}
        />
        <SectionContents>
          <Career />
        </SectionContents>
      </PageSection>
      <PageSection>
        <SectionHeader
          title="experience"
          desc={[
            "현업에서는 다음의 경험으로 ",
            "스펙트럼을 넓혔습니다. ",
            "여기에 더해, 보편적인 트렌드에 ",
            "발맞춰 가기 위한 연구를 ",
            "진행중입니다.",
          ]}
        />
        <SectionContents>
          <Experience />
        </SectionContents>
      </PageSection>
      <PageSection>
        <SectionHeader
          title="tools"
          desc={["경험을 쌓으며 다루게된 ", "활용 가능한 기술 스택입니다."]}
        />
        <SectionContents>
          <Tools />
        </SectionContents>
      </PageSection>
    </>
  );
}
