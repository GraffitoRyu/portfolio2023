import { useLocation } from "react-router-dom";

// components
import TransContainer from "./transContainer";
import PageHeader from "../../components/section/pageHeader";
import ProjectDetails from "../projectDetails/container";

export default function pageTemplate() {
  // 고정 요소 배치
  const loc = useLocation();
  const _path = loc.pathname;

  return (
    <>
      <PageHeader />
      <TransContainer />
      {_path.includes("project") ? <ProjectDetails /> : ""}
    </>
  );
}
