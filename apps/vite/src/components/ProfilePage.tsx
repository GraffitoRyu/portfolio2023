import { PageSection } from "@graffitoryu/ui";
import type { ReactNode } from "react";
import type {
  CareerData,
  ExperienceData,
  ProfileData,
  StackData,
  StackKeyData,
} from "@graffitoryu/preset-data";

const sections = [
  { id: "profile-intro", label: "소개" },
  { id: "profile-career", label: "경력" },
  { id: "profile-experience", label: "경험" },
  { id: "profile-stacks", label: "기술" },
] as const;

function formatPeriod(value: string) {
  if (value === "") return "재직중";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
  }).format(date);
}

function EmptyState({ children }: { children: string }) {
  return <p className="profile-empty">{children}</p>;
}

function SectionHeader({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <header className="profile-section-header">
      <p className="eyebrow">Profile</p>
      <h2>{title}</h2>
      <p>{children}</p>
    </header>
  );
}

function CareerList({ career }: { career: CareerData[] }) {
  if (career.length === 0) {
    return <EmptyState>표시할 경력 정보가 없습니다.</EmptyState>;
  }

  return (
    <ul className="career-list">
      {career.map(({ code, summary, details }) => (
        <li key={code}>
          <details className="career-item">
            <summary>
              <span className="career-period">
                <time dateTime={summary.period[0]}>
                  {formatPeriod(summary.period[0])}
                </time>
                <span aria-hidden="true">—</span>
                <time dateTime={summary.period[1] || undefined}>
                  {formatPeriod(summary.period[1])}
                </time>
              </span>
              <strong>{summary.role}</strong>
              <span>{summary.company}</span>
              <span className="career-toggle" aria-hidden="true" />
            </summary>
            <div className="career-detail">
              <div>
                <h3>담당 업무</h3>
                <ul>
                  {details.task.map(task => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>주요 활용기술</h3>
                <p>{details.stacks.join(", ")}</p>
              </div>
              <div>
                <h3>참여 프로젝트</h3>
                <ul>
                  {details.projects.map(project => (
                    <li key={project}>{project}</li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
}

function ExperienceList({ experience }: { experience: ExperienceData[] }) {
  if (experience.length === 0) {
    return <EmptyState>표시할 경험 정보가 없습니다.</EmptyState>;
  }

  return (
    <ol className="experience-list">
      {experience.map(({ code, title, desc }, index) => (
        <li key={code}>
          <p className="experience-index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3>{title || code}</h3>
          <ul>
            {desc.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

function StackList({
  stackKeys,
  stacks,
}: {
  stackKeys: StackKeyData[];
  stacks: StackData[];
}) {
  if (stackKeys.length === 0 || stacks.length === 0) {
    return <EmptyState>표시할 기술 정보가 없습니다.</EmptyState>;
  }

  return (
    <ul className="stack-list">
      {stackKeys.map(category => {
        const items = stacks.filter(stack => stack.category === category.code);

        if (items.length === 0) return null;

        return (
          <li key={category.code}>
            <h3>{category.name}</h3>
            <ul>
              {items.map(stack => (
                <li key={stack.code}>{stack.name}</li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

export default function ProfilePage({
  career,
  experience,
  stackKeys,
  stacks,
}: ProfileData) {
  return (
    <article className="profile-page">
      <nav className="profile-section-nav" aria-label="프로필 섹션">
        <ol>
          {sections.map(section => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.label}</a>
            </li>
          ))}
        </ol>
      </nav>

      <PageSection className="profile-visual" id="profile-intro">
        <p className="profile-kicker">Ready for interaction</p>
        <div className="profile-intro-grid">
          <p className="profile-intro-label">Frontend Developer</p>
          <div>
            <h1>
              인터랙션 이벤트 구현에 관심이 많은 프론트엔드 개발자
              <strong> 류대현</strong>입니다.
            </h1>
            <p>
              2018년 웹 디자인과 웹 퍼블리싱으로 시작하여, 2020년부터는
              프론트엔드 개발 위주로 경험을 쌓았습니다. 컴포넌트 기반 구조와
              인터랙티브한 반응형 웹을 각각 효율적으로 구축하기 위해 항상
              연구하고 있습니다.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection className="profile-section" id="profile-career">
        <SectionHeader title="Career">
          지난 6년간 실무 경험을 쌓은 근무 경력입니다.
        </SectionHeader>
        <CareerList career={career} />
      </PageSection>

      <PageSection className="profile-section" id="profile-experience">
        <SectionHeader title="Experience">
          개인적인 작업부터 협업에 이르기까지 프로젝트에 참여하면서 경험한
          것들입니다.
        </SectionHeader>
        <ExperienceList experience={experience} />
      </PageSection>

      <PageSection className="profile-section" id="profile-stacks">
        <SectionHeader title="Tech Stacks">
          지난 5년간 경험한 기술들입니다. 항상 새로운 기술을 받아들이고 익히기
          위해 지속적으로 노력하고 있습니다.
        </SectionHeader>
        <StackList stackKeys={stackKeys} stacks={stacks} />
      </PageSection>
    </article>
  );
}
