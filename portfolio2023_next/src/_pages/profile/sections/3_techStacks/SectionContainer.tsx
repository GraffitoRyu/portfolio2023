import PageSectionContents from "@/components/pageFrame/pageSection/Contents";
import PageSectionHeader from "@/components/pageFrame/pageSection/Header";
import PageSectionContainer from "@/components/pageFrame/pageSection/Container";
import TechStacksContainer from "./Container";

/**
 * 프로필 > 기술스택; 섹션 컨테이너
 * @component
 */
export default function ProfileTechStacksSectionContainer() {
  return (
    <PageSectionContainer
      page="profile"
      code="stacks"
      className="side-h-padding side-v-padding"
    >
      <PageSectionHeader
        title="Tech Stacks"
        desc={[
          "지난 5년 간 경험한 기술들입니다. ",
          "항상 새로운 기술을 받아들이고 익히기 위해",
          "지속적으로 노력하고 있습니다.",
        ]}
      />
      <PageSectionContents
        code="stacks"
        sectionClassName="stacks"
        // sideContents={<StackLegend />}
      >
        <TechStacksContainer />
      </PageSectionContents>
    </PageSectionContainer>
  );
}
