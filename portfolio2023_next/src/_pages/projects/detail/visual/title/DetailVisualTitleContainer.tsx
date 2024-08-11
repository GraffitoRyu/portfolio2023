// components
import DetailVisualTitle from "./DetailVisualTitle";
import DetailVisualSubtitle from "./DetailVisualSubtitle";

// style component
import { StyledPDVisualTitleContainer } from "@/styles/styled/components/ProjectDetail";

export default function DetailVisualTitleContainer() {
  return (
    <StyledPDVisualTitleContainer>
      <DetailVisualTitle />
      <DetailVisualSubtitle />
    </StyledPDVisualTitleContainer>
  );
}
