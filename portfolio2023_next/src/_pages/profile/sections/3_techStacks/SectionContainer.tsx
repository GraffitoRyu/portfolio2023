import SectionContents from "@/components/pageFrame/pageSection/Contents";
import SectionHeader from "@/components/pageFrame/pageSection/Header";
import PageSection from "@/components/pageFrame/pageSection/PageSection";
import TechStacksContainer from "./Container";

/**
 * 프로필 > 기술스택; 섹션 컨테이너
 * @component
 */
export default function ProfileTechStacksSectionContainer() {
  return (
    <PageSection
      page="profile"
      code="stacks"
      className="side-h-padding side-v-padding"
    >
      <SectionHeader
        title="Tech Stacks"
        desc={[
          "지난 5년 간 경험한 기술들입니다. ",
          "항상 새로운 기술을 받아들이고 익히기 위해",
          "지속적으로 노력하고 있습니다.",
        ]}
      />
      <SectionContents
        code="stacks"
        sectionClassName="stacks"
        // sideContents={<StackLegend />}
      >
        <TechStacksContainer />
      </SectionContents>
    </PageSection>
  );
}
