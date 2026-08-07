// components
import DetailVisualLower from "./Lower";
import DetailVisualViewport from "./Viewport";
import DetailVisualImage from "./0_bg/VisualImage";
import DetailSummary from "./1_summary/Container";
import DetailVisualTitleContainer from "./2_title/Container";

// style components
import { StyledPDVisualSection } from "@graffitoryu/ui/product/styles/styled/components/ProjectDetail";

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
