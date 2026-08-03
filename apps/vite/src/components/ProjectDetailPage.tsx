import { Link } from "@tanstack/react-router";
import { ProjectDetail } from "@graffitoryu/ui";

import {
  assets,
  type ProjectData,
  type ProjectMediaData,
} from "@graffitoryu/preset-data";

type ProjectDetailPageProps = {
  project: ProjectData;
};

const stackLabels = {
  languages: "Languages",
  frameworks: "Frameworks & Libraries",
  data: "Data",
  collaboration: "Collaboration",
} as const;

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const {
    code,
    summary,
    service,
    sub_visual: subVisual,
    experience,
    media,
  } = project;
  const projectAssets = getProjectAssets(code);

  return (
    <ProjectDetail
      className="project-detail"
      aria-labelledby="project-detail-title"
    >
      <header className="project-detail-header">
        <p>
          Projects <span aria-hidden="true">/</span> {summary.title.join(" ")}
        </p>
        <nav aria-label="프로젝트 외부 링크">
          {service?.link.map(link => (
            <a key={link.code} href={link.url} target="_blank" rel="noreferrer">
              {link.name} ↗
            </a>
          ))}
        </nav>
        <Link
          className="project-detail-close"
          to="/projects"
          replace
          aria-label="프로젝트 상세 페이지 닫기"
        >
          <span aria-hidden="true">×</span>
        </Link>
      </header>

      <section className="project-detail-hero">
        {projectAssets ? (
          <img
            className="project-detail-background"
            src={projectAssets.intro}
            alt=""
          />
        ) : null}
        <div className="project-detail-hero-content">
          <dl className="project-detail-summary">
            <SummaryItem
              title="Type"
              contents={service?.serviceType ?? "---"}
            />
            <SummaryItem
              title="Provider"
              contents={service?.provider ?? "---"}
            />
            <SummaryItem
              title="Period"
              contents={formatPeriod(summary.period)}
            />
            <SummaryItem title="Role" contents={summary.role.join(" / ")} />
          </dl>
          <div className="project-detail-title-wrap">
            <h2 id="project-detail-title">
              {summary.title.map(line => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <p>{summary.desc}</p>
          </div>
        </div>
      </section>

      {service ? (
        <section
          className="project-detail-service"
          aria-labelledby="service-title"
        >
          <p className="eyebrow">Service</p>
          <h3 id="service-title">{service.provider}</h3>
          <ul>
            {service.desc.map(description => (
              <li key={description}>{description}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {subVisual?.src ? (
        <figure className="project-detail-sub-visual">
          <img
            src={subVisual.src}
            alt={subVisual.alt ?? `${summary.title.join(" ")} 프로젝트 화면`}
          />
        </figure>
      ) : null}

      {experience ? (
        <>
          <section
            className="project-detail-stacks"
            aria-labelledby="stacks-title"
          >
            <p className="eyebrow">Tech stacks</p>
            <h3 id="stacks-title">사용 기술</h3>
            <dl>
              {Object.entries(experience.stacks).map(([key, values]) => (
                <div key={key}>
                  <dt>{stackLabels[key as keyof typeof stackLabels]}</dt>
                  <dd>{values.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section
            className="project-detail-experience"
            aria-labelledby="experience-title"
          >
            <h3 id="experience-title">Experience</h3>
            <ol>
              {experience.desc.map(description => (
                <li key={description}>{description}</li>
              ))}
            </ol>
          </section>
        </>
      ) : null}

      {media && media.length > 0 ? (
        <section
          className="project-detail-media"
          aria-label="프로젝트 이미지와 영상"
        >
          {media.map(item => (
            <ProjectMedia key={`${item.referType}-${item.src}`} media={item} />
          ))}
        </section>
      ) : null}
    </ProjectDetail>
  );
}

function SummaryItem({ title, contents }: { title: string; contents: string }) {
  return (
    <div>
      <dt>{title}</dt>
      <dd>{contents}</dd>
    </div>
  );
}

function ProjectMedia({ media }: { media: ProjectMediaData }) {
  if (media.referType === "video") {
    return (
      <figure className="project-detail-media-item project-detail-video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${media.src}`}
          title={media.alt}
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <figcaption>{media.alt}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="project-detail-media-item">
      <img src={media.src} alt={media.alt} loading="lazy" />
      <figcaption>{media.alt}</figcaption>
    </figure>
  );
}

function getProjectAssets(code: string) {
  return code in assets.public.projects
    ? assets.public.projects[code as keyof typeof assets.public.projects]
    : undefined;
}

function formatPeriod(period: string[]) {
  return period
    .map(value => {
      const [year, month] = value.slice(0, 7).split("-");
      return `${year}. ${month}.`;
    })
    .join(" — ");
}
