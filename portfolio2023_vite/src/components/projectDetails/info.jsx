import { useSearchParams } from "react-router-dom";
import getDetailsData from "../../hooks/util/getDetailsData";

export default function detailsInfo() {
  const [urlParams] = useSearchParams();
  const d = getDetailsData(urlParams.get("category"));
  const userLocale = navigator.language;
  const dateOptions = {
    month: "short",
    year: "numeric",
  };
  return (
    <section className="details-section side-padding details-info w-full lg:flex">
      <div className="details-summary w-full lg:w-1/2">
        <dl className="details-info-item w-1/4 lg:w-1/2">
          <dt>담당 업무</dt>
          {d?.summary?.role.map((r, i) => (
            <dd key={`role_${i}`}>{r}</dd>
          ))}
        </dl>
        <dl className="details-info-item w-1/4 lg:w-1/2">
          <dt>작업 및 담당 기간</dt>
          <dd>
            <time>
              {d?.summary?.period[0].toLocaleString(userLocale, dateOptions)}
            </time>
            <span></span>
            <time>
              {d?.summary?.period[1].toLocaleString(userLocale, dateOptions)}
            </time>
          </dd>
        </dl>
        <dl className="details-info-item w-1/4 lg:w-1/2">
          <dt>서비스 제공</dt>
          <dd>{d?.service?.provider}</dd>
        </dl>
        <dl className="details-info-item w-1/4 lg:w-1/2">
          <dt>서비스 형태</dt>
          <dd>{d?.service?.platform}</dd>
        </dl>
        <dl className="details-info-item tech-stacks w-full">
          <dt>활용 기술</dt>
          <dd className="tech-stacks flex items-center flex-wrap">
            {d?.experience?.stacks.map(t => (
              <figure
                className="tech-stacks-item flex items-center justify-center"
                title={t}
                key={t}
              >
                <img src={`/img/tools/${t}.png`} alt={t} />
              </figure>
            ))}
          </dd>
        </dl>
      </div>
      <div className="details-introduce w-full lg:w-1/2">
        <dl className="details-info-item w-full">
          <dt>서비스 소개</dt>
          {d?.service?.desc.map((desc, i) => (
            <dd key={`desc_${i}`}>{desc}</dd>
          ))}
        </dl>
        <dl className="details-info-item w-full h-auto">
          <dt>업무 경험</dt>
          {d?.experience?.desc.map((desc, i) => (
            <dd key={`desc_${i}`}>{desc}</dd>
          ))}
          <dd></dd>
        </dl>
      </div>
    </section>
  );
}
