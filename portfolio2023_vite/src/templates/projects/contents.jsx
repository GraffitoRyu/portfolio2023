import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

// components
import PageSection from "../../components/section/pageSection";
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
    </>
  );
}
