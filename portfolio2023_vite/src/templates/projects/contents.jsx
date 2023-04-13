import { useRecoilValue } from "recoil";

// components
import PageVisual from "../../components/common/pageVisual";
import ProjectListItem from "../../components/projects/projectListItem";

// data
import { projectList } from "../../hooks/recoil/projectList";

export default function pageContents(props) {
  const projectListData = useRecoilValue(projectList);

  return (
    <main
      id="pageContents"
      className="page-contents page-projects relative top-0"
    >
      <PageVisual borderText="Selected" filledText="projects" />
      <section className="page-section side-padding intro-section lg:flex items-start">
        <header className="section-header lg:w-1/2"></header>
        <div className="section-contents lg:w-1/2">
          <h2>
            <div className="intro-title-upper">
              최근 참여한 프로젝트를 소개합니다.
            </div>
          </h2>
          <p>
            <span>
              참여했던 공개가 가능한 프로젝트 중 일부를 정리하였습니다.
            </span>
            <br />
            <span>
              주로 프론트엔드 개발에 참여하였으며 마크업 단계에서부터
              작업하였습니다.
            </span>
            <br />
            <span>
              또한 개발 단계에서 레이아웃이나 아이콘 작업이 필요한 경우
            </span>
            <br />
            <span>Figma를 통해 구도를 잡아 작업을 진행하였습니다.</span>
          </p>
        </div>
      </section>
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
