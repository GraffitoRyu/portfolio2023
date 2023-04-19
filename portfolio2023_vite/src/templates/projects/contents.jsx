// components
import PageSection from "../../components/common/pageSection";
import Intro from "../../components/projects/intro";
import ProjectList from "../../components/projects/list";

export default function pageContents(props) {
  return (
    <>
      {/* <main id="pageContents" className="page-contents page-projects"> */}
      <PageSection
        page="projects"
        index={0}
        section_code="visual"
        borderText="Selected"
        filledText="projects"
      />
      <PageSection
        page="projects"
        index={1}
        section_code="intro"
        header={{ empty: true }}
        contents={<Intro />}
      />
      <PageSection
        page="projects"
        index={2}
        section_code="projectsList"
        header={undefined}
        contents={<ProjectList />}
      />
      {/* </main> */}
    </>
  );
}
