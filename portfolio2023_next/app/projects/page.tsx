import React from "react";

import SectionContents from "@/components/pageSection/Contents";
import SectionHeader from "@/components/pageSection/Header";
import PageIntro from "@/components/pageSection/Intro";
import PageSection from "@/components/pageSection/PageSection";
import PageVisual from "@/components/pageSection/Visual";
import ProjectList from "@/components/projects/List";

export default function Projects() {
  return (
    <>
      <PageSection className="intro-section" isVisual={true}>
        <PageVisual title={["Selected", "projects"]} />
        <SectionHeader empty={true} />
        <SectionContents>
          <PageIntro
            title={["최근 참여한 프로젝트를 소개합니다."]}
            desc={[
              "참여했던 공개가 가능한 프로젝트 중 일부를 정리하였습니다. ",
              "주로 프론트엔드 개발에 참여하였으며 마크업 단계에서부터 작업하였습니다. ",
              "또한 개발 단계에서 레이아웃이나 아이콘 작업이 필요한 경우 ",
              "Figma를 통해 구도를 잡아 작업을 진행하였습니다.",
            ]}
          />
        </SectionContents>
      </PageSection>
      {/* @ts-expect-error Async Server Component */}
      <ProjectList />
    </>
  );
}