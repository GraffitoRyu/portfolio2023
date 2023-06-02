import React from "react";

// components
import PageSection from "@/components/pageSection/PageSection";
import PageVisual from "@/components/pageSection/pageVisual/Visual";
import PageIntro from "@/components/pageSection/pageVisual/Intro";
import SectionHeader from "@/components/pageSection/Header";
import SectionContents from "@/components/pageSection/Contents";
import Career from "@/components/profile/Career";
import Experience from "@/components/profile/Experience";
import Tools from "@/components/profile/Tools";

export default function Profile() {
  return (
    <>
      <PageSection className="side-h-padding" isVisual={true}>
        <PageVisual title={["Ready for", "interaction"]} />
        <SectionHeader empty={true} />
        <SectionContents>
          <PageIntro
            title={[
              "인터랙션 이벤트 구현에 관심이 많은",
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
          title="career"
          desc={["지난 5년간 실무 경험을 쌓은 ", "근무 경력입니다."]}
        />
        <SectionContents>
          {/* @ts-expect-error Async Server Component */}
          <Career />
        </SectionContents>
      </PageSection>
      <PageSection className="side-h-padding side-v-padding">
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
          {/* @ts-expect-error Async Server Component */}
          <Experience />
        </SectionContents>
      </PageSection>
      <PageSection className="side-h-padding side-v-padding">
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
