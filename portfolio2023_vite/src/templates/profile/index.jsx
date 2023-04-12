// components
import PageHeader from "../../components/common/pageHeader";
import PageFooter from "../../components/common/pageFooter";
import PageContents from "./contents";

export default function profilePage(props) {
  return (
    <>
      <div className="sticky-container relative">
        <PageHeader />
        <PageContents />
      </div>
      <PageFooter />
    </>
  );
}
