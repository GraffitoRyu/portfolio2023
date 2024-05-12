// components
import DetailVisualLower from "./DetailVisualLower";
import DetailVisualViewport from "./DetailVisualViewport";
import DetailVisualImage from "./bg/DetailsVisualImage";
import DetailSummary from "./summary/DetailSummary";
import DetailVisualTitleContainer from "./title/DetailVisualTitleContainer";

// style components
import { PDVisualSection } from "@/styles/styled/components/ProjectDetail";

export default function DetailVisualContainer() {
  return (
    <PDVisualSection className="detail-section-visual">
      <DetailVisualImage />
      <DetailVisualViewport>
        <DetailSummary />
        <DetailVisualTitleContainer />
      </DetailVisualViewport>
      <DetailVisualLower />
    </PDVisualSection>
  );
}
