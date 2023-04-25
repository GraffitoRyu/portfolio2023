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
    <section className="details-section details-info w-full flex">
      <div className="details-summary flex flex-wrap">
        <dl className="summary-item">
          <dt>담당 업무</dt>
          {d?.summary?.role.map((r, i) => (
            <dd key={`role_${i}`}>{r}</dd>
          ))}
        </dl>
        <dl className="summary-item">
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
          {d?.summary?.role.map((r, i) => (
            <dd key={`role_${i}`}>{r}</dd>
          ))}
        </dl>
      </div>
    </section>
  );
}
