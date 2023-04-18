// components
import PageVisual from "../../components/common/pageVisual";
import PageSection from "../../components/common/pageSection";
import Intro from "../../components/projects/intro";
import ProjectList from "../../components/projects/list";

export default function pageContents(props) {
  return (
    <main
      id="pageContents"
      className="page-contents page-projects relative top-0 parallax-frame"
    >
      <PageVisual borderText="Selected" filledText="projects" />
      <PageSection
        sectionCode="intro"
        header={undefined}
        contents={<Intro />}
      />
      <section className="page-section">
        <ProjectList />
      </section>
    </main>
  );
}
