import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

// components
import DetailsIntro from "../../components/projectDetails/intro";
import DetailsInfo from "../../components/projectDetails/info";
import DetailsMedia from "../../components/projectDetails/media";

// state
import { detailsState } from "../../hooks/state/projectDetails";

// data
import { detailsRoute } from "../../data/projects";
import { scrollState } from "../../hooks/state/scroll";
import windowScroll from "../../hooks/util/windowScroll";

export default function projectDetails() {
  const [urlParams] = useSearchParams();
  const [details, setDetails] = useRecoilState(detailsState);
  const [isExist, setIsExist] = useState(false);

  const initDetailsOpen = () => {
    const category = urlParams.get("category");
    if (category) {
      setDetails(prev => ({ ...prev, open: true, category: category }));
      const e = detailsRoute.find(d => d.pathQuery === category) ? true : false;
      setIsExist(e);
    }
  };

  const detailsScrollRef = useRef();
  const setScrollPos = useSetRecoilState(scrollState);

  const updateDetailsSCrollPos = () => {
    if (detailsScrollRef?.current) {
      const pos = detailsScrollRef.current.scrollTop;
      setScrollPos(prev => ({ ...prev, details: pos }));
    }
  };

  useEffect(() => {
    if (details.open) detailsScrollRef.current.scrollTop = 0;
    initDetailsOpen();
  }, [details.open]);

  useEffect(() => {
    updateDetailsSCrollPos();
    windowScroll(detailsScrollRef.current, updateDetailsSCrollPos);
  }, []);

  return (
    <div
      className="project-details-container overflow-hidden w-full fixed bottom-0 left-0"
      style={{
        transform: `translate(0,${details.open && isExist ? 0 : "100%"})`,
      }}
    >
      <article
        className="project-details w-full h-full custom-scrollbar"
        ref={detailsScrollRef}
      >
        <DetailsIntro />
        <DetailsInfo />
        <DetailsMedia />
      </article>
    </div>
  );
}
