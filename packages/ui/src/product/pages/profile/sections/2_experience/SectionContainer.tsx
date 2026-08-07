import PageSectionContents from "@graffitoryu/ui/product/components/pageFrame/pageSection/Contents";
import PageSectionHeader from "@graffitoryu/ui/product/components/pageFrame/pageSection/Header";
import PageSectionContainer from "@graffitoryu/ui/product/components/pageFrame/pageSection/Container";
import ProfileExperienceContents from "./Contents";

/**
 * 프로필 > 경험; 섹션 컨테이너
 * @component
 * @route /
 */
export default function ProfileExperienceSectionContainer() {
  return (
    <PageSectionContainer
      page="profile"
      code="experience"
      className="side-h-padding side-v-padding"
    >
      <PageSectionHeader
        title="Experience"
        desc={[
          "개인적인 작업부터 협업에 이르기 까지 ",
          "프로젝트에 참여하면서 경험한 것들입니다.",
        ]}
      />
      <PageSectionContents
        code="experienceContents"
        sectionClassName="experience"
      >
        <ProfileExperienceContents />
      </PageSectionContents>
    </PageSectionContainer>
  );
}
