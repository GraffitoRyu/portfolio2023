// components
import DetailTitleWrap from "@/components/projectDetail/title/DetailTitleWrap";
import DetailHeaderPageName from "@/components/projectDetail/header/DetailHeaderPageName";

// style components
import { PDHeaderTitleContainer } from "@/styles/styled/components/ProjectDetail";

export default function DetailHeaderTitleContainer() {
  return (
    <PDHeaderTitleContainer>
      <DetailHeaderPageName />
      <DetailTitleWrap />
    </PDHeaderTitleContainer>
  );
}
