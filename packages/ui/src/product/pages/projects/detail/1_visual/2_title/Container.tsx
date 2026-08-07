// components
import DetailVisualTitle from "./Title";
import DetailVisualSubTitle from "./SubTitle";

// style component
import { StyledPDVisualTitleContainer } from "@graffitoryu/ui/product/styles/styled/components/ProjectDetail";

export default function DetailVisualTitleContainer() {
  return (
    <StyledPDVisualTitleContainer>
      <DetailVisualTitle />
      <DetailVisualSubTitle />
    </StyledPDVisualTitleContainer>
  );
}
