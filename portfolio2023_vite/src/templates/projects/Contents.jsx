// import { useEffect } from "react";
// import { useSetRecoilState } from "recoil";

// components
import SeoHelmet from "../../components/seo/Helmet";
import PageFooter from "../../components/section/PageFooter";
import PageSection from "../../components/section/PageSection";
import Intro from "../../components/projects/Intro";
import ProjectList from "../../components/projects/List";

// state
// import { pageState } from "../../hooks/state/page";

export default function PageContents() {
  // const setPageState = useSetRecoilState(pageState);

  // useEffect(() => {
  //   setPageState(prev => ({ ...prev, cur: "projects" }));
  // }, []);

  return (
    <>
      <SeoHelmet />
      <PageSection
        index={0}
        section_code="intro"
        header={{ empty: true }}
        borderText="Selected"
        filledText="projects"
        contents={<Intro />}
      />
      <PageSection
        index={1}
        section_code="projectsList"
        header={undefined}
        contents={<ProjectList />}
      />
      <PageFooter />
    </>
  );
}
