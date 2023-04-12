import { useRecoilValue } from "recoil";

// components
import PageVisual from "../../components/common/pageVisual";
import ProjectListItem from "../../components/projects/projectListItem";

// data
import { projectList } from "../../hooks/recoil/projectList";

export default function pageContents(props) {
  const projectListData = useRecoilValue(projectList);

  return (
    <main id="pageContents" className="page-contents page-projects">
      <PageVisual borderText="Selected" filledText="projects" />
      <section className="page-section side-padding">
        <ul className="project-list">
          {projectListData.map((d, i) => (
            <ProjectListItem data={d} key={d.key} />
          ))}
        </ul>
      </section>
    </main>
  );
}
