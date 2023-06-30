import React from "react";

// components
import PageSection from "@/components/pageSection/PageSection";
import PageVisual from "@/components/pageSection/pageVisual/Visual";
import PageIntro from "@/components/pageSection/pageVisual/Intro";
import SectionHeader from "@/components/pageSection/Header";
import SectionContents from "@/components/pageSection/Contents";
import Career from "@/components/profile/career/Career";
import Experience from "@/components/profile/experience/Experience";
import TechStacks from "@/components/profile/techStacks/Stacks";
import StackLegend from "@/components/profile/techStacks/StackLegend";

export default function Profile() {
  return (
    <>
      <PageSection className="side-h-padding visual-section">
        <PageVisual title={["Ready for ", "interaction"]} />
        <SectionHeader empty={true} />
        <SectionContents sectionClassName="intro" sideClassName="intro">
          <PageIntro
            title={[
              "인터랙션 이벤트 구현에 관심이 많은 ",
              <React.Fragment key="strongLine">
                프론트엔드 개발자 <strong>류대현</strong>입니다.
              </React.Fragment>,
            ]}
            desc={[
              "2018년 웹 디자인과 웹 퍼블리싱으로 시작하여, ",
              "2020년부터는 프론트엔드 개발 위주로 경험을 쌓았습니다. ",
              "컴포넌트 기반 구조와, 인터랙티브한 반응형 웹을 ",
              "각각 효율적으로 구축하기 위해 항상 연구하고 있습니다.",
            ]}
          />
        </SectionContents>
      </PageSection>
      <PageSection className="side-h-padding side-v-padding">
        <SectionHeader
          title="Career"
          desc={["지난 5년간 실무 경험을 쌓은 ", "근무 경력입니다."]}
        />
        <SectionContents sectionClassName="career">
          <Career />
        </SectionContents>
      </PageSection>
      <PageSection className="side-h-padding side-v-padding">
        <SectionHeader
          title="Experience"
          desc={[
            "개인적인 작업부터 협업에 이르기 까지 ",
            "프로젝트에 참여하면서 경험한 것들입니다.",
          ]}
        />
        <SectionContents sectionClassName="experience">
          <Experience />
        </SectionContents>
      </PageSection>
      <PageSection className="side-h-padding side-v-padding">
        <SectionHeader
          title="Tech Stacks"
          desc={[
            "지난 5년 간 경험한 기술들입니다. ",
            "항상 새로운 기술을 받아들이고 익히기 위해",
            "지속적으로 노력하고 있습니다.",
          ]}
        />
        <SectionContents
          sectionClassName="stacks"
          sideContents={<StackLegend />}
        >
          <TechStacks />
        </SectionContents>
      </PageSection>
    </>
  );
}
