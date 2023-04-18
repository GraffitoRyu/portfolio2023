import { useOutlet } from "react-router-dom";

import SeoHelmet from "../components/seo/helmet";
import PageHeader from "../components/common/pageHeader";
import PageFooter from "../components/common/pageFooter";

export default function transContainer() {
  const currentOutlet = useOutlet();
  return (
    <>
      <SeoHelmet />
      <div className="scroll-container page-bg">
        <PageHeader />
        {currentOutlet}
      </div>
      <PageFooter />
    </>
  );
}
