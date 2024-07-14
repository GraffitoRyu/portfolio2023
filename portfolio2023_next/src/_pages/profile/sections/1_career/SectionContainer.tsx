import { Suspense } from "react";

import SectionContents from "@/components/pageFrame/pageSection/Contents";
import SectionHeader from "@/components/pageFrame/pageSection/Header";
import PageSection from "@/components/pageFrame/pageSection/PageSection";
import CareerList from "./List";

/**
 * 프로필 > 커리어; 섹션 컨테이너
 * @component
 */
export default function ProfileCareerSectionContainer() {
  return (
    <PageSection
      page="profile"
      code="career"
      className="side-h-padding side-v-padding"
    >
      <SectionHeader
        title="Career"
        desc={["지난 6년간 실무 경험을 쌓은 ", "근무 경력입니다."]}
      />
      <SectionContents code="career" sectionClassName="career">
        <Suspense fallback={null}>
          <CareerList />
        </Suspense>
      </SectionContents>
    </PageSection>
  );
}
