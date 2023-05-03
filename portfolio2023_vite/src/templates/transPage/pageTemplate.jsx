import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import PageHeader from "../../components/section/pageHeader";
import TransContainer from "./transContainer";
import ProjectDetails from "../projectDetails/container";
import { useSetRecoilState } from "recoil";
import { headerState } from "../../hooks/state/header";
import { setCSSProps } from "../../hooks/util/cssProperty";

export default function pageTemplate() {
  // 고정 요소 배치
  const loc = useLocation();
  const _path = loc.pathname;
  const setHeader = useSetRecoilState(headerState);

  const updateHeaderHeight = () => {
    if (document.querySelector("#pageHeader")) {
      const height = document.querySelector("#pageHeader").offsetHeight;
      setCSSProps("--header-height", `${height}px`);
      setHeader(prev => ({ ...prev, height: height }));
    }
  };

  useEffect(() => {
    // console.log("initiate page template");
    updateHeaderHeight();
  }, []);

  return (
    <>
      <PageHeader />
      <TransContainer />
      {_path.includes("project") ? <ProjectDetails /> : ""}
    </>
  );
}
