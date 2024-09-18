import PageSectionContents from "@/components/pageFrame/pageSection/Contents";
import PageSectionHeader from "@/components/pageFrame/pageSection/Header";
import PageSectionContainer from "@/components/pageFrame/pageSection/Container";
import PageVisualUpper from "@/components/pageFrame/pageSection/pageVisual/Upper";
import PageVisualLower from "@/components/pageFrame/pageSection/pageVisual/Lower";

/**
 * 프로필 > 비주얼; 섹션 컨테이너
 * @component
 */
export default function ProfileVisualSectionContainer() {
  return (
    <PageSectionContainer
      page="profile"
      code="visual"
      className="side-h-padding"
    >
      <PageVisualUpper title={["Ready for ", "interaction"]} />
      <PageSectionHeader empty={true} />
      <PageSectionContents sectionClassName="intro" sideClassName="intro">
        <PageVisualLower
          category="profile/visual"
          title={[
            "인터랙션 이벤트 구현에 관심이 많은 ",
            <>
              프론트엔드 개발자 <strong>류대현</strong>입니다.
            </>,
          ]}
          desc={[
            "2018년 웹 디자인과 웹 퍼블리싱으로 시작하여, ",
            "2020년부터는 프론트엔드 개발 위주로 경험을 쌓았습니다. ",
            "컴포넌트 기반 구조와, 인터랙티브한 반응형 웹을 ",
            "각각 효율적으로 구축하기 위해 항상 연구하고 있습니다.",
          ]}
        />
      </PageSectionContents>
    </PageSectionContainer>
  );
}
