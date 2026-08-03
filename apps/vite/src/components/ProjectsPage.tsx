import { useNavigate } from "@tanstack/react-router";
import { PageSection, ProjectCard } from "@graffitoryu/ui";

import type { ProjectItemData } from "@graffitoryu/preset-data";

type ProjectsPageProps = {
  projects: ProjectItemData[];
};

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  const navigate = useNavigate();

  return (
    <div className="projects-page">
      <PageSection className="projects-visual" aria-labelledby="projects-title">
        <p className="projects-kicker" aria-hidden="true">
          Selected projects
        </p>
        <div className="projects-intro-grid">
          <p className="projects-intro-label">Projects</p>
          <div>
            <h1 id="projects-title">최근 참여한 프로젝트를 소개합니다.</h1>
            <p>
              참여했던 공개 가능한 프로젝트 중 일부를 정리했습니다. 주로
              프론트엔드 개발과 마크업을 담당했으며, 필요한 경우 Figma로
              레이아웃과 아이콘을 직접 설계했습니다.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection className="projects-list-section" aria-label="프로젝트 목록">
        {projects.length === 0 ? (
          <p className="projects-empty">표시할 프로젝트가 없습니다.</p>
        ) : (
          <ol className="projects-list">
            {projects.map(({ code, summary }, index) => (
              <li key={code}>
                <ProjectCard
                  className="project-card"
                  aria-label={`${summary.title.join(" ")} 프로젝트 상세 보기`}
                  onClick={() =>
                    navigate({
                      to: "/projects/$category",
                      params: { category: code },
                    })
                  }
                >
                  <span className="project-card-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="project-card-period">
                    {formatPeriod(summary.period)}
                  </span>
                  <span className="project-card-title">
                    {summary.title.join(" ")}
                  </span>
                  <span className="project-card-description">
                    {summary.desc}
                  </span>
                  <span className="project-card-roles">
                    {summary.role.join(" / ")}
                  </span>
                  <span className="project-card-action" aria-hidden="true">
                    상세 보기 ↗
                  </span>
                </ProjectCard>
              </li>
            ))}
          </ol>
        )}
      </PageSection>
    </div>
  );
}

function formatPeriod(period: string[]) {
  return period
    .map(value => {
      const [year, month] = value.slice(0, 7).split("-");
      return `${year}.${month}`;
    })
    .join(" — ");
}
