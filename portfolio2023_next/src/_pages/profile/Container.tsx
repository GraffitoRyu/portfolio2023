import ProfileVisualSectionContainer from "./sections/0_visual/SectionContainer";
import ProfileTechStacksSectionContainer from "./sections/3_techStacks/SectionContainer";
import ProfileCareerSectionContainer from "./sections/1_career/SectionContainer";
import ProfileExperienceSectionContainer from "./sections/2_experience/SectionContainer";

/**
 * 프로필; 페이지 컨테이너
 * @component
 */
export default function ProfileContainer() {
  return (
    <>
      <ProfileVisualSectionContainer />
      <ProfileCareerSectionContainer />
      <ProfileExperienceSectionContainer />
      <ProfileTechStacksSectionContainer />
    </>
  );
}
