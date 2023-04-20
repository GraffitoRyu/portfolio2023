import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

// components
import PageSection from "../../components/common/pageSection";
import Intro from "../../components/projects/intro";
import ProjectList from "../../components/projects/list";

// state
import { pageState } from "../../hooks/state/page";

export default function pageContents(props) {
  const setPageState = useSetRecoilState(pageState);

  useEffect(() => {
    setPageState(prev => ({ ...prev, cur: "projects" }));
  }, []);

  return (
    <>
      {/* <main id="pageContents" className="page-contents page-projects"> */}
      <PageSection
        index={0}
        section_code="visual"
        borderText="Selected"
        filledText="projects"
      />
      <PageSection
        index={1}
        section_code="intro"
        header={{ empty: true }}
        contents={<Intro />}
      />
      <PageSection
        index={2}
        section_code="projectsList"
        header={undefined}
        contents={<ProjectList />}
      />
      {/* </main> */}
    </>
  );
}
