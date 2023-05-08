import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

// components
import PageHeader from "../../components/section/PageHeader";
import TransContainer from "./TransContainer";
import ProjectDetails from "../projectDetails/Container";
import TransCover from "../../components/trans/Cover";

// state
import { headerState } from "../../hooks/state/header";

// util
import { setCSSProps } from "../../hooks/util/cssProperty";

export default function PageTemplate() {
  // 고정 요소 배치
  const setHeader = useSetRecoilState(headerState);

  const updateHeaderHeight = () => {
    if (document.querySelector("#pageHeader")) {
      const height = document.querySelector("#pageHeader").offsetHeight;
      setCSSProps("--header-height", `${height}px`);
      setHeader(prev => ({ ...prev, height: height }));
    }
  };

  useEffect(() => {
    updateHeaderHeight();
  }, []);

  return (
    <>
      <PageHeader />
      <TransContainer />
      <ProjectDetails />
      <TransCover type="slide" />
    </>
  );
}
