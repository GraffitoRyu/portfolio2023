import { Suspense } from "react";

import SectionContents from "@/components/pageFrame/pageSection/Contents";
import SectionHeader from "@/components/pageFrame/pageSection/Header";
import PageSection from "@/components/pageFrame/pageSection/PageSection";
import ProfileExperienceContents from "./Contents";

/**
 * 프로필 > 경험; 섹션 컨테이너
 * @component
 * @route /
 */
export default function ProfileExperienceSectionContainer() {
  return (
    <PageSection
      page="profile"
      code="experience"
      className="side-h-padding side-v-padding"
    >
      <SectionHeader
        title="Experience"
        desc={[
          "개인적인 작업부터 협업에 이르기 까지 ",
          "프로젝트에 참여하면서 경험한 것들입니다.",
        ]}
      />
      <SectionContents code="experience" sectionClassName="experience">
        <Suspense fallback={null}>
          <ProfileExperienceContents />
        </Suspense>
      </SectionContents>
    </PageSection>
  );
}
