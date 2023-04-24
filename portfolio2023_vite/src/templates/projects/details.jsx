import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";

// components
import CloseBtn from "../../components/buttons/close";

// state
import { detailsState } from "../../hooks/state/projectDetails";

// data
import { projectsData } from "../../data/projects";

export default function projectDetails() {
  const [urlParams, setUrlParams] = useSearchParams();
  const [details, setDetails] = useRecoilState(detailsState);
  const [data, setData] = useState(undefined);

  const closeDetails = () => {
    console.log(`close - details`);

    // update url params
    urlParams.delete("category");
    setUrlParams(urlParams);

    // close details
    setDetails({ open: false, category: undefined });
    setData(undefined);
  };

  useEffect(() => {
    const category = urlParams.get("category");

    if (category) {
      setDetails({ open: true, category: category });
      const p = projectsData.find(d => d.pathQuery === category) ?? undefined;
      setData(p);
    }
  }, [details.open]);

  return (
    <div
      className="project-details-container w-full fixed bottom-0 left-0 overflow-overlay"
      style={{ transform: `translate(0,${details.open && data ? 0 : "100%"})` }}
    >
      <header className="details-header w-full flex items-center">
        <h2 className="project-title">Lorem ipsum</h2>
        <CloseBtn
          className="details-close ml-auto"
          btnClickCallback={() => closeDetails()}
        />
      </header>
    </div>
  );
}
