import { Fragment } from "react";

import SectionContents from "@/components/pageFrame/pageSection/Contents";
import SectionHeader from "@/components/pageFrame/pageSection/Header";
import PageSection from "@/components/pageFrame/pageSection/PageSection";
import PageIntro from "@/components/pageFrame/pageSection/pageVisual/Intro";
import PageVisual from "@/components/pageFrame/pageSection/pageVisual/Visual";

/**
 * 프로필 > 비주얼; 섹션 컨테이너
 * @component
 */
export default function ProfileVisualSectionContainer() {
  return (
    <PageSection page="profile" code="visual" className="side-h-padding">
      <PageVisual title={["Ready for ", "interaction"]} />
      <SectionHeader empty={true} />
      <SectionContents sectionClassName="intro" sideClassName="intro">
        <PageIntro
          title={[
            "인터랙션 이벤트 구현에 관심이 많은 ",
            <Fragment key="strongLine">
              프론트엔드 개발자 <strong>류대현</strong>입니다.
            </Fragment>,
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
  );
}
