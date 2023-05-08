import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

// components
import SeoHelmet from "../../components/seo/Helmet";
import PageSection from "../../components/section/PageSection";
import PageFooter from "../../components/section/PageFooter";
import Intro from "../../components/profile/Intro";
import Career from "../../components/profile/Career";
import Experience from "../../components/profile/Experience";
import Tools from "../../components/profile/Tools";

// state
// import { pageState } from "../../hooks/state/page";
import { detailsState } from "../../hooks/state/projectDetails";

export default function PageContents() {
  // const setPageState = useSetRecoilState(pageState);

  // 프로젝트 디테일 초기화
  const setDetails = useSetRecoilState(detailsState);

  useEffect(() => {
    setDetails({ open: false, category: undefined });
    // setPageState(prev => ({ ...prev, cur: "profile" }));
  }, []);

  return (
    <>
      <SeoHelmet />
      <PageSection
        index={0}
        section_code="intro"
        header={{ empty: true }}
        borderText="Ready for"
        filledText="interaction"
        contents={<Intro />}
      />
      <PageSection
        index={1}
        section_code="career"
        header={{
          empty: false,
          title: "career",
          desc: ["지난 5년간 실무 경험을 쌓은", "근무 경력입니다."],
        }}
        contents={<Career />}
      />
      <PageSection
        index={2}
        section_code="experience"
        header={{
          empty: false,
          title: "experience",
          desc: [
            "현업에서는 다음의 경험으로",
            "스펙트럼을 넓혔습니다.",
            "여기에 더해, 보편적인 트렌드에",
            "발맞춰 가기 위한 연구를",
            "진행중입니다.",
          ],
        }}
        contents={<Experience />}
      />
      <PageSection
        index={3}
        section_code="tools"
        header={{
          empty: false,
          title: "tools",
          desc: ["경험을 쌓으며 다루게된", "활용 가능한 기술 스택입니다."],
        }}
        contents={<Tools />}
      />
      <PageFooter />
    </>
  );
}
