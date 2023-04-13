import SeoHelmet from "../../components/seo/helmet";
import PageHeader from "../../components/common/pageHeader";
import PageFooter from "../../components/common/pageFooter";
import PageContents from "./pageContents";

export default function transContainer() {
  return (
    <>
      <SeoHelmet />
      <div className="sticky-container relative page-bg">
        <PageHeader />
        <PageContents />
      </div>
      <PageFooter />
    </>
  );
}
