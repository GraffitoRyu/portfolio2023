// components
import DetailVisualTitle from "./DetailVisualTitle";
import DetailVisualSubtitle from "./DetailVisualSubtitle";

// style component
import { PDVisualTitleContainer } from "@/styles/styled/components/ProjectDetail";

export default function DetailVisualTitleContainer() {
  return (
    <PDVisualTitleContainer>
      <DetailVisualTitle />
      <DetailVisualSubtitle />
    </PDVisualTitleContainer>
  );
}
