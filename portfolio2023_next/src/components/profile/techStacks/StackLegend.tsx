import {
  StackLegendContainer,
  StackLegendFigure,
  StackLegendItem,
  StackLegendLabel,
  StackLegendTitle,
} from "@/styles/styled/components/ProfileStacks";
import StackLevelGauge from "./StackLevel";
import legendData from "@/data/stackLegend";
import { StackLegendTypes } from "@/types/profile";

export default function StackLegend() {
  return (
    <StackLegendContainer>
      <StackLegendTitle>
        <span>경험 단계</span>
      </StackLegendTitle>
      {legendData.map(({ label, level }: StackLegendTypes) => (
        <StackLegendItem key={`stackLegend_${level}`}>
          <StackLegendLabel>{label}</StackLegendLabel>
          <StackLegendFigure>
            <StackLevelGauge level={level} />
          </StackLegendFigure>
        </StackLegendItem>
      ))}
    </StackLegendContainer>
  );
}
