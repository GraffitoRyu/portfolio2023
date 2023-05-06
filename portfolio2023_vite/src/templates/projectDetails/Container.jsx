import { useEffect, useRef, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

// components
import DetailsIntro from "../../components/projectDetails/Intro";
import DetailsInfo from "../../components/projectDetails/Info";
import DetailsMedia from "../../components/projectDetails/Media";

// state
import { detailsState } from "../../hooks/state/projectDetails";
import { scrollState } from "../../hooks/state/scroll";

// data
import { detailsRoute } from "../../data/projects";

// util
import windowScroll from "../../hooks/util/windowScroll";
import useComputedStyle from "../../hooks/util/useComputedStyle";

export default function ProjectDetails() {
  // const { category } = useParams();
  const [urlParams] = useSearchParams();
  const projectDetailsRef = useRef();
  const [details, setDetails] = useRecoilState(detailsState);
  const [isExist, setIsExist] = useState(false);

  const initDetailsOpen = () => {
    const category = urlParams.get("category");
    if (category) {
      setDetails(prev => ({ ...prev, open: true, category: category }));
      const e = detailsRoute.find(d => d.pathQuery === category) ? true : false;
      setIsExist(e);

      setTimeout(() => {
        setDetails(prev => ({ ...prev, openComplete: true }));
      }, details.openDuration);
    } else {
      setDetails(prev => ({
        ...prev,
        open: false,
        category: undefined,
        imgLoaded: false,
      }));
      setIsExist(false);
    }
  };

  const detailsScrollRef = useRef();
  const setScrollPos = useSetRecoilState(scrollState);

  const updateOpenDuration = () => {
    const openDuration = projectDetailsRef?.current
      ? useComputedStyle(projectDetailsRef.current, "transition-duration") *
        1000
      : 800;
    setDetails(prev => ({ ...prev, openDuration: openDuration / 2 }));
  };

  const updateDetailsSCrollPos = () => {
    if (detailsScrollRef?.current) {
      const pos = detailsScrollRef.current.scrollTop;
      setScrollPos(prev => ({ ...prev, details: pos }));
    }
  };

  useEffect(() => {
    updateOpenDuration();
    updateDetailsSCrollPos();
    windowScroll(detailsScrollRef.current, updateDetailsSCrollPos);
  }, []);

  useEffect(() => {
    if (details.open) detailsScrollRef.current.scrollTop = 0;
    initDetailsOpen();
  }, [details.open, urlParams]);

  return (
    <div
      className="project-details-container overflow-hidden w-full fixed bottom-0 left-0"
      ref={projectDetailsRef}
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
