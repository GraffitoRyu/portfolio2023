import PageSectionContents from "@/components/pageFrame/pageSection/Contents";
import PageSectionHeader from "@/components/pageFrame/pageSection/Header";
import PageSectionContainer from "@/components/pageFrame/pageSection/Container";
import CareerList from "./List";

/**
 * 프로필 > 커리어; 섹션 컨테이너
 * @component
 */
export default function ProfileCareerSectionContainer() {
  return (
    <PageSectionContainer
      page="profile"
      code="career"
      className="side-h-padding side-v-padding"
    >
      <PageSectionHeader
        title="Career"
        desc={["지난 6년간 실무 경험을 쌓은 ", "근무 경력입니다."]}
      />
      <PageSectionContents code="career" sectionClassName="career">
        <CareerList />
      </PageSectionContents>
    </PageSectionContainer>
  );
}
