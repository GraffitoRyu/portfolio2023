import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import PageHeader from "../../components/section/pageHeader";
import TransContainer from "./transContainer";
import ProjectDetails from "../projectDetails/container";

export default function pageTemplate() {
  // 고정 요소 배치
  const loc = useLocation();
  const _path = loc.pathname;

  useEffect(() => {
    // console.log("initiate page template");
  }, []);

  return (
    <>
      <PageHeader />
      <TransContainer />
      {_path.includes("project") ? <ProjectDetails /> : ""}
    </>
  );
}
