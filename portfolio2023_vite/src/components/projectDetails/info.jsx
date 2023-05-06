import { useSearchParams } from "react-router-dom";

// data
import { getRootPathname } from "../../data/sitemap";

// util
import getDetailsData from "../../hooks/util/getDetailsData";

export default function DetailsInfo() {
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
                <img src={`${getRootPathname()}img/tools/${t}.png`} alt={t} />
              </figure>
            ))}
          </dd>
        </dl>
      </div>
      <div className="details-introduce w-full lg:w-1/2">
        <dl className="details-info-item w-full">
          <dt>서비스 소개</dt>
          {d?.service?.desc.map((desc, i) => generateDesc(desc, i))}
        </dl>
        <dl className="details-info-item w-full h-auto">
          <dt>업무 경험</dt>
          {d?.experience?.desc.map((desc, i) => generateDesc(desc, i))}
          <dd></dd>
        </dl>
      </div>
    </section>
  );
}

function generateDesc(d, i1) {
  const depth1 = typeof d !== "string" ? d.depth1 : d;
  const depth2 = typeof d !== "string" && d?.depth2 ? d.depth2 : undefined;
  return (
    <dd key={`d1_${i1}`}>
      {depth2 ? (
        <>
          <span>{depth1}</span>
          <ul>
            {depth2.map((d2, i2) => (
              <li key={`d2_${i2}`}>{d2}</li>
            ))}
          </ul>
        </>
      ) : (
        depth1
      )}
    </dd>
  );
}
