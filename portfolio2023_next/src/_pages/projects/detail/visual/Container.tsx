// components
import DetailVisualLower from "./Lower";
import DetailVisualViewport from "./Viewport";
import DetailVisualImage from "./bg/VisualImage";
import DetailSummary from "./summary/Container";
import DetailVisualTitleContainer from "./title/Container";

// style components
import { StyledPDVisualSection } from "@/styles/styled/components/ProjectDetail";

export default function DetailVisualContainer() {
  return (
    <StyledPDVisualSection className="detail-section-visual">
      <DetailVisualImage />
      <DetailVisualViewport>
        <DetailSummary />
        <DetailVisualTitleContainer />
      </DetailVisualViewport>
      <DetailVisualLower />
    </StyledPDVisualSection>
  );
}
